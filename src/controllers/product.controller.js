const db = require("../models");
const { validateProduct } = require("../models/product.model")
const { createProduct} = require("../services/product.service")
const Product = db.product;

// Create and Save a new Product
exports.create = async (req, res) => {
  try {
    // Validate request
    validateProduct(req.body);

    // Save Product in the database

    const result = await createProduct(req.body)
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Product."
    });
  }
}

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
}

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500)
        .send({ message: "Error retrieving Product with id=" + id });
    });
}

// Update a Product by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found!`
        });
      } else res.send({ message: "Product was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
}

// Delete a Product with the specified id in the request
exports.deleteById = async (req, res) => {
  const id = req.params.id;

  try {
    let result = await Product.findByIdAndRemove(id);
    if (!result) {
      res.status(404).send({
        message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
      });
    } else {
      res.send({
        message: "Product was deleted successfully!"
      });
    }

  } catch (error) {
    res.status(500).send({
      message: "Could not delete Product with id=" + id
    });
  }
};


