const express = require("express")
const app = express()
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

require('dotenv').config()

const connectionParams={
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true 
}

const PORT = process.env.PORT || 5000


app.use("/cars", userRoutes);



mongoose.connect(process.env.MONGODB_URI,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })