const router = require("express").Router();
let Key = require("../models/key.model");

// route to fetch list of all keys
router.route("/").get((req, res) => {
  Key.find()
    .then((keys) => res.json(keys))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to add new user
router.route("/addkey").post((req, res) => {
  const key = req.body.key;
  const newKey = new Key({ key });

  newKey
    .save()
    .then(() => res.json("New key added"))
    .catch((err) =>
      res.status(400).json("Unable to add new key to db!" + " Error msg: " + err)
    );
});

// route to delete key from db
router.route("/:id").delete((req, res) => {
    Key.findByIdAndDelete(req.params.id)
      .then(() => res.json("Key Deleted Succesfully!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
  //update keys details
  router.route("/update/:id").post((req, res) => {
    Key.findById(req.params.id)
      .then((key) => {
        key.key = req.body.key;
  
        key
          .save()
          .then(() => res.json("Key Updated Succesfully!"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
