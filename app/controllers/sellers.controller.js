const db = require("../models");
const Sellers = db.sellers;
const Op = db.Sequelize.Op;

// Create and Save a new Sellers
exports.create = (req, res) => {
  // Validate request
  if (!req) {
    res.status(400).send({
      message: `Content  not be empty! ${req.body}`,
    });
    return;
  }

  const sellers = {
    name: req.body.name,
    code: req.body.code
  };

  Sellers.create(sellers)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sellers.",
      });
    });
};

// Retrieve all Couriers from the database.
exports.findAll = (req, res) => {
  Sellers.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sellers.",
      });
    });
};

// Find a single Sellers with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sellers.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Sellers with id=" + id,
      });
    });
};

// Update a Sellers by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Sellers.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sellers was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Sellers with id=${id}. Maybe Sellers was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Sellers with id=" + id,
      });
    });
};

// Delete a Sellers with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  Sellers.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sellers was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Sellers with id=${id}. Maybe Sellers was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Sellers with id=" + id,
      });
    });
};

// Delete all Couriers from the database.
exports.deleteAll = (req, res) => {
  Sellers.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Sellers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sellers.",
      });
    });
};

// Find all actived Couriers
exports.findAllActived = (req, res) => {
  Sellers.findAll({ where: { estado: "1" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sellers.",
      });
    });
};
