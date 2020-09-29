const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const url = process.env.ATLAS_URL;
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected succesfully");
});

const savedBookRouter = require("./routes/savedBookRoutes");

app.use("/saved", savedBookRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
