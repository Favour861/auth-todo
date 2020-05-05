const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

const withAuth = require('./middlewares/auth-middleware');
// const { db } = require('./db')

require('dotenv').config()
const secret = 'favour861';

// <<connection>>
const uri = "mongodb+srv://favour861:81655359Aa.@cluster0-1lrqu.mongodb.net/todo?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// <<.use>>
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/checkToken', withAuth, (req, res) => {
    res.sendStatus(200);
})


// <<routes>>
const user = require('./routes/user.route');
app.use('/user',user);





// app.get('/', (req,res)=>{
//     res.send("Workingggg!!!")
// })

// app.post('/signup', (req,res)=>{
//     console.log(req.body);
//     res.send({success: true, message: "Signed up"})
//     // console.log("SIGNING UP!!!")
// })

app.listen(5000, ()=>{
    console.log("Server started: listening on port 5000")
});