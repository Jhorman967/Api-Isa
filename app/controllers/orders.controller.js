const db = require("../models");
const Orders = db.orders;
const Op = db.Sequelize.Op;

// Create and Save a new Orders
exports.create = (req, res) => {
  // Validate request
  if (!req) {
    res.status(400).send({
      message: `Content  not be empty! ${req.body}`,
    });
    return;
  }

  const orders = {
    title: req.body.title,
    vendor: req.body.vendor,
    contact: req.body.contact,
    location: req.body.location,
    product: req.body.product,
    price: req.body.price,
    fob: req.body.fob,
    start: req.body.start,
    end: req.body.end,
    droplocation: req.body.droplocation,
    color: req.body.color,
    consignee: req.body.consignee,
  };

  Orders.create(orders)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Orders.",
      });
    });
};

// Retrieve all Couriers from the database.
exports.findAll = (req, res) => {
  Orders.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Orders.",
      });
    });
};

// Find a single Orders with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Orders.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Orders with id=" + id,
      });
    });
};

// Update a Orders by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Orders.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Orders was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Orders with id=${id}. Maybe Orders was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Orders with id=" + id,
      });
    });
};

// Delete a Orders with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  Orders.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Orders was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Orders with id=${id}. Maybe Orders was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Orders with id=" + id,
      });
    });
};

// Delete all Orders from the database.
exports.deleteAll = (req, res) => {
  Orders.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Orders were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Orders.",
      });
    });
};

// Find all actived Orders
exports.findAllActived = (req, res) => {
  Orders.findAll({ where: { estado: "1" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Orders.",
      });
    });
};
