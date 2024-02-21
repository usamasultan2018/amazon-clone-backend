console.log("Hello JavaScript");
// its is similar to flutter to import packages
// import:"package:express/express.dart"
// Import From packages
// Import form other files..

// Initialization

const express =  require('express');
const authRouter  = require('./routes/auth');
const mongoose = require('mongoose');
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// Middleware
// Client -> Middleware -> Server -> Client
const PORT = 3000;
const app = express();

const DB = "mongodb+srv://usamakhan2018:Khan1432@cluster0.sakhw9v.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


//Connection
mongoose.connect(DB).then(()=>{
console.log("Connection Successful");
}).catch(e => {
console.log(e);
})

app.listen(PORT,'0.0.0.0',()=>{
console.log("Connected at port "+PORT);
});

// CreatingAn API
//http:///<your-ipaddress>/hello-world

// Task 1
// Create a Get Request giving a Json with a key of name and value of name.
//app.get('/')
//app.get('/hello-world',(req,res)=>{
// res.json({hi:"Hello world "});
//});
//// Get , Put , Post ,Delete , Update -> Crud
////Creating for get api request



//LocalHost
// 127.0.0.1  its is ip for local host

