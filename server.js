const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Connect to the Mongo DB
const url = process.env.ATLAS_URL;
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// mongoose.connect(
//   "mongodb://localhost:27017/books",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("successfully connected to database");
//   }
// );

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected succesfully");
});

// Use apiRoutes
const savedBookRouter = require("./routes/savedBookRoutes");

app.use("/saved", savedBookRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
