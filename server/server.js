const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors");
const postsRoute = require('./routes/posts');
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(cors());
app.use('/posts',postsRoute )
const uri = "mongodb+srv://souf:motdepasse@cluster.aul9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
  ()=> {console.log('Connected to db');}
);

app.get('/', ((req, res) => {
  res.send('<h1>from server</h1>')}))

server.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`)
})
