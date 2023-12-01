const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//creating the express server
const app = express();
const port = process.env.PORT || 5000;

//setting up the middleware
app.use(cors());
app.use(express.json());

//setting mongodb connection string
const uri = process.env.ATLAS_URI;

//making the commection to mongodb
mongoose.connect(uri.toString, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log(
    "\n**** MONGODB DATABASE CONNECTION ESTABLISHED SUCCESSFULLY! ****\n"
  );
});

//asking the server to use route files 
const keysRouter = require("./routes/key");
app.use("/keys",keysRouter);


app.listen(port, () => {
  console.log(`\n**** SERVER IS UP AND RUNNING ON PORT: ${port} ****\n`);
});
