const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const app = express ();
app.enable('trust proxy')
const mongoose = require('mongoose')
//* =>  all origins to accept form
app.use(bodyParser.json())
const authRoutes = require('./routes/authRoutes')
//Creating API

app.use(cors())
app.use("/api", authRoutes) 
// app.use(
//     cors({
//       origin: "http://localhost:3000",
//       // credentials: true,
//     })
//   );

//Connect to Database
const DB = process.env.DATABASE
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log('connected to the database'))
const port = process.env.port || 5000;
app.listen(port, () =>{
    console.log(`listening at port ${port}`)
})