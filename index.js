// require instances
const express = require("express");
require("dotenv").config();
// import database
const database = require("./config/database");
// import routes
const blogRoutes = require('./routes/bolg');

// make app
const app = express();

// make port
const PORT = process.env.PORT;

// connect with database
database();

// add middleware for parsing json data
app.use(express.json());

// makes routes
app.use('/api/v1/post',blogRoutes);

// listen our app on given port
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
});