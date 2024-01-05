const express = require("express")
const app = express()
const mongoose = require("mongoose");

require('dotenv').config()

const connectionParams={
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true 
}
mongoose.connect(process.env.MONGODB_URI,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })