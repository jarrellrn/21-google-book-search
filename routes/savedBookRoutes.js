const router = require("express").Router();
let SavedBook = require("../models/SavedBooks.model");

router.route("/").get((req, res) => {
  SavedBook.find()
    .then((books) => res.send(books))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.route("/:id").delete((req, res) => {
  SavedBook.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book removed"))
    .catch((err) => res.status(400).json(err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const authors = req.body.authors;
  const description = req.body.description;
  const link = req.body.link;
  const thumbnail = req.body.thumbnail;

  const newBook = new SavedBook({
    title,
    authors,
    description,
    link,
    thumbnail,
  });

  newBook
    .save()
    .then(() => res.json("Book succesfully added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
