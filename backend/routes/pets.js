const router = require("express").Router();
let Pet = require("../models/pet.model");

router.route("/").get((req, res) => {
  const page = req.query.page;
  const curSort = req.query.curSort;
  console.log("router incoming sort " + curSort);
  console.log("object" + JSON.parse(curSort));
  const curSortObject = JSON.parse(curSort);
  Pet.paginate({}, { sort: curSortObject, offset: 10 * (page - 1), limit: 10 })
    .then(result => res.json(result))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const petname = req.body.petname;
  const petspecies = req.body.petspecies;
  const petgender = req.body.petgender;
  const petownerID = req.body.petownerID;

  const newPet = new Pet({
    petname,
    petspecies,
    petgender,
    petownerID
  });
  newPet
    .save()
    .then(() => res.json("Pet added!"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Pet.findById(req.params.id)

    .then(pets => res.json(pets))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Pet.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pet Deleted boohoo."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Pet.findByIdAndUpdate(req.params.id)
    .then(pets => {
      pets.petname = req.body.petname;
      pets.petspecies = req.body.petspecies;
      pets.petgender = req.body.petgender;
      pets.petownerID = req.body.petownerID;

      pets
        .save()
        .then(() => res.json("Pet updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
