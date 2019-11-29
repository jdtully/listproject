const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  const page = req.query.page;
  const curSort = req.query.curSort;
  console.log("router incoming sort " + curSort);
  console.log("object" + JSON.parse(curSort));
  const curSortObject = JSON.parse(curSort);
  User.paginate({}, { sort: curSortObject, offset: 10 * (page - 1), limit: 10 })
    .then(result => res.json(result))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const useremail = req.body.useremail;
  const userdate = req.body.userdate;
  const usergender = req.body.usergender;
  const userstreet = req.body.userstreet;
  const usercity = req.body.usercity;
  const userstate = req.body.userstate;
  const userzip = req.body.userzip;
  const userphone = req.body.userphone;

  const newUser = new User({
    username,
    useremail,
    userdate,
    usergender,
    userstreet,
    usercity,
    userstate,
    userzip,
    userphone,
    userdate
  });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id)

    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted boohoo."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.usernumber = req.body.usernumber;
      users.username = req.body.username;
      users.userphone = req.body.userphone;
      users.userdate = req.body.userdate;

      users
        .save()
        .then(() => res.json("User updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
