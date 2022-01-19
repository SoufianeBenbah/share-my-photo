const express = require('express')
const router = express.Router();
const Post = require('../models/post')


router.get('/', async(req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({posts});
  }catch (err){
    res.status(404).json({message: err.message});
  }
});
router.get('/:id', async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id);
    res.status(200).json({post})
  }catch (err){
    res.status(404).json({message: err.message})
  }
})
router.post('/',async (req, res) => {
  const post = new Post({
    comment: req.body.comment,
    url: req.body.url,
  });

  try {
    const newPost = await post.save();
    res.status(201).json({newPost});
  } catch (err) {
    res.status(400).json({ message: err.message })

  }
})
router.delete('/:id', async (req,res)=>{
  try{
    const post = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({message : post.comment +' deleted'})
  }catch (err){
    res.status(404).json({message: err.message})
  }
})
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
})
module.exports = router;
