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
        res.status(201).send({
          message: "Created",
        });
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
  const { Name } = req.params;

  Disease.findByPk(Name)
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
    ? { Name: { [Sequelize.Op.like]: `%${Name}%` } }
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
  const { Name } = req.params;

  Disease.update(req.body, {
    where: { Name: Name },
  })
    .then((nums) => {
      if (nums) {
        res.status(200).send({
          message: "OK",
        });
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
  const { Name } = req.params;

  Disease.destroy({
    where: { Name: Name },
  })
    .then((nums) => {
      if (nums) {
        res.status(200).send({
          message: "OK",
        });
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
      res.status(200).send({
        message: "OK",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};
