const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const app = express ();
app.enable('trust proxy')

app.use(cors ({origin:'*'}))
//* =>  all origins to accept form
app.use(bodyParser.json())
const port = process.env.port || 5000;
app.listen(port, () =>{
    console.log(`listening at port ${port}`)
})