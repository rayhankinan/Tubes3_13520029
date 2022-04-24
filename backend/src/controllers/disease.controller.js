// SETUP LIBRARY
const Sequelize = require("sequelize");

// SETUP FILE
const db = require("../models");
const Disease = db.diseases;

// FUNCTION
exports.create = (req, res) => {
  const { Name, DNASequence } = req.body;

  if (Name && DNASequence) {
    const disease = {
      Name: Name,
      DNASequence: DNASequence,
    };

    Disease.create(disease)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || "Internal Server Error",
        });
      });
  } else {
    res.status(400).send({
      message: "Bad Request",
    });
  }
};

exports.findOne = (req, res) => {
  const { Id } = req.params;

  Disease.findByPk(Id)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: "Not Found",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};

exports.findAll = (req, res) => {
  const { Name } = req.query;
  const condition = Name
    ? { Name: Name }
    : null;

  Disease.findAll({
    where: condition,
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};

exports.update = (req, res) => {
  const { Id } = req.params;

  Disease.update(req.body, {
    where: { Id: Id },
  })
    .then((nums) => {
      if (nums) {
        res.status(200).send(nums);
      } else {
        res.status(400).send({
          message: "Bad Request",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};

exports.delete = (req, res) => {
  const { Id } = req.params;

  Disease.destroy({
    where: { Id: Id },
  })
    .then((nums) => {
      if (nums) {
        res.status(200).send(nums);
      } else {
        res.status(400).send({
          message: "Bad Request",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};

exports.deleteAll = (req, res) => {
  Disease.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.status(200).send(nums);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};
