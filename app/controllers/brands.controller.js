const db = require("../models");
const Brands = db.brands;
const Op = db.Sequelize.Op;

// Create and Save a new Brands
exports.create = (req, res) => {
  // Validate request
  if (!req) {
    res.status(400).send({
      message: `Content  not be empty! ${req.body}`,
    });
    return;
  }

  const brands = {
    name: req.body.name,
    codeColor: req.body.codeColor,
    type: req.body.type,
  };

  Brands.create(brands)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Brands.",
      });
    });
};

// Retrieve all Couriers from the database.
exports.findAll = (req, res) => {
  Brands.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Brands.",
      });
    });
};

// Find a single Brands with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Brands.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Brands with id=" + id,
      });
    });
};

// Update a Brands by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Brands.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Brands was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Brands with id=${id}. Maybe Brands was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Brands with id=" + id,
      });
    });
};

// Delete a Brands with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  Brands.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Brands was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Brands with id=${id}. Maybe Brands was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Brands with id=" + id,
      });
    });
};

// Delete all Couriers from the database.
exports.deleteAll = (req, res) => {
  Brands.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Brands were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Brands.",
      });
    });
};

// Find all actived Couriers
exports.findAllActived = (req, res) => {
  Brands.findAll({ where: { estado: "1" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Brands.",
      });
    });
};
