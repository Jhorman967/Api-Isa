const db = require("../models");
const Products = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Products
exports.create = (req, res) => {
  // Validate request
  if (!req) {
    res.status(400).send({
      message: `Content  not be empty! ${req.body}`,
    });
    return;
  }

  const products = {
    name: req.body.name,
    code: req.body.code
  };

  Products.create(products)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Products.",
      });
    });
};

// Retrieve all Couriers from the database.
exports.findAll = (req, res) => {
  Products.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};

// Find a single Products with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Products.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Products with id=" + id,
      });
    });
};

// Update a Products by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Products.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Products was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Products with id=${id}. Maybe Products was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Products with id=" + id,
      });
    });
};

// Delete a Products with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  Products.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Products was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Products with id=${id}. Maybe Products was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Products with id=" + id,
      });
    });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  Products.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Products.",
      });
    });
};

// Find all actived Products
exports.findAllActived = (req, res) => {
  Products.findAll({ where: { estado: "1" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};
