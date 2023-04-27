const db = require("../models");
const Vendors = db.vendors;
const Op = db.Sequelize.Op;

// Create and Save a new Vendors
exports.create = (req, res) => {
  // Validate request
  if (!req) {
    res.status(400).send({
      message: `Content  not be empty! ${req.body}`,
    });
    return;
  }

  const vendors = {
    name: req.body.name,
    alias: req.body.alias,
    dni: req.body.dni,
    type: req.body.type,
  };

  Vendors.create(vendors)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vendors.",
      });
    });
};

// Retrieve all Couriers from the database.
exports.findAll = (req, res) => {
  Vendors.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vendors.",
      });
    });
};

// Find a single Vendors with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vendors.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Vendors with id=" + id,
      });
    });
};

// Update a Vendors by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Vendors.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vendors was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Vendors with id=${id}. Maybe Vendors was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Vendors with id=" + id,
      });
    });
};

// Delete a Vendors with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  Vendors.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vendors was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Vendors with id=${id}. Maybe Vendors was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Vendors with id=" + id,
      });
    });
};

// Delete all Couriers from the database.
exports.deleteAll = (req, res) => {
  Vendors.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Vendors were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vendors.",
      });
    });
};

// Find all actived Couriers
exports.findAllActived = (req, res) => {
  Vendors.findAll({ where: { estado: "1" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vendors.",
      });
    });
};
