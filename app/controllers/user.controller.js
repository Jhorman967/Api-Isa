const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users.",
      });
    });
};

// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};