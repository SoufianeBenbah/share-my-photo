const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors");
const postsRoute = require('./api/routes/posts')


const uri = "mongodb+srv://souf:motdepasse@cluster.aul9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    () => { console.log("Connected to Database"); }
);

mongoose.Promise = global.Promise;

app.use(express());
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use("/posts", postsRoute);




//Error handling
app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404;
    next(error);
});

app.use((req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app
