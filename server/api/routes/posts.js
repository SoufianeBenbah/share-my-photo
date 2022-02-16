const express = require('express')
const router = express.Router();
const Post = require('../models/post.model')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};
const upload = multer({storage: storage , fileFilter: fileFilter});


router.get('/', async(req, res) => {
  try {
    const posts = await Post.find().select("id comment picture");
    res.status(200).send(posts);
  }catch (err){
    res.status(404).send( err);
  }
});

router.get('/:comment', async (req,res) => {
  try {
    const posts = await Post.find({ comment: {$regex:`.*${req.params.comment}.*`}});
    res.status(200).send(posts)
  } catch (err) {
    res.status(404).send(err.message)
  }
})

router.get('/:id', async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id).select("id comment picture");
    res.status(200).send(post);
  }catch (err){
    res.status(404).send(err.message);
  }
});

router.post('/', upload.single("picture"),async (req, res) => {

  const post = new Post({
    comment: req.body.comment,
    picture: req.file.path,
  });

  try {
    const newPost = await post.save();
    res.status(201).send(newPost);
  } catch (err) {
    res.status(400).send(err.message);

  }
});

router.delete('/:id', async (req,res)=>{
  try{
    const post = await Post.findByIdAndRemove(req.params.id);
    res.status(200).send(post)
  }catch (err){
    res.status(404).send(err.message)
  }
});

router.delete('/', async (req,res)=>{
  try{
    const post = await Post.deleteMany();
    res.status(200).send("deleted");
  }catch (err){
    res.status(500).json({message: err.message})
  }
});

router.patch('/:id', async (req,res)=>{
  try{
    const post = await Post.updateOne(
      { _id: req.params.id },
      {$set: { comment: req.body.comment } }
      )
    res.status(200).json({post})
  } catch(err) {
    res.status(404).json({message: err.message})
  }
});

module.exports = router;
