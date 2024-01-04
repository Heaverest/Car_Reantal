// Requiring module
const express = require("express");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000;



const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);



// First step is the authentication of the client


// Server setup
app.listen(PORT, () => {
	console.log(`Server is Running on localhost ${PORT}`);
})
