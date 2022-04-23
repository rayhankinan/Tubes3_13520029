// SETUP LIBRARY
const Sequelize = require("sequelize");

// SETUP FILE
<<<<<<< HEAD
const db = require("../models");
const bm = require("../algorithms/bm.algorithm.js");
const kmp = require("../algorithms/kmp.algorithm.js");
const levenshtein = require("../algorithms/levenshtein.algorithm.js");
const Prediction = db.predictions;

// FUNCTION
exports.create = (req, res) => {
  const { User, Disease, DNASequence, IsKMP } = req.body;

  if (User && Disease && DNASequence) {
    const DiseaseDB = db.diseases;

    DiseaseDB.findOne({
      where: { Name: Disease },
    }).then((data) => {
      if (data) {
        const Similarity = IsKMP
          ? kmp(DNASequence, data.DNASequence)
            ? 1
            : levenshtein(DNASequence, data.DNASequence)
          : bm(DNASequence, data.DNASequence)
          ? 1
          : levenshtein(DNASequence, data.DNASequence);
        const PredictionStatus = Similarity >= 0.8;

        const prediction = {
          User: User,
          Disease: Disease,
          Similarity: Similarity,
          PredictionStatus: PredictionStatus,
        };

        Prediction.create(prediction)
          .then((data) => {
            res.status(201).send(data);
          })
          .catch((error) => {
            res.status(500).send({
              message: error.message || "Internal Server Error",
            });
          });
      } else {
        res.status(404).send({
          message: "Not Found",
        });
      }
    });
  } else {
    res.status(400).send({
      message: "Bad Request",
    });
  }
};
=======
const db = require("../models")
const bm = require("../algorithms/bm.algorithm.js")
const kmp = require("../algorithms/kmp.algorithm.js")
const lcs = require("../algorithms/lcs.algorithm.js")
const Prediction = db.predictions

// FUNCTION
exports.create = (req, res) => {
    const { User, Disease, DNASequence, IsKMP } = req.body

    if (User && Disease && DNASequence) {
        const DiseaseDB = db.diseases

        DiseaseDB.findOne({
            where: { Name: Disease }
        })
        .then((data) => {
            if (data) {
                const Similarity = IsKMP ? (kmp(DNASequence, data.DNASequence) ? 1 : lcs(DNASequence, data.DNASequence)) : (bm(DNASequence, data.DNASequence) ? 1 : lcs(DNASequence, data.DNASequence))
                const PredictionStatus = Similarity >= 0.8

                const prediction = {
                    User: User,
                    Disease: Disease,
                    Similarity: Similarity,
                    PredictionStatus: PredictionStatus
                }

                Prediction.create(prediction)
                .then((data) => {
                    res.status(201).send(data)
                })
                .catch((error) => {
                    res.status(500).send({
                        message: error.message || "Internal Server Error"
                    })
                })

            } else {
                res.status(404).send({
                    message: "Not Found"
                })
            }
        })

    } else {
        res.status(400).send({
            message: "Bad Request"
        })
    }
}
>>>>>>> f6706ee8b15c56c0ddf59aba2349c97b4bfc1a3c

exports.findOne = (req, res) => {
  const { Id } = req.params;

  Prediction.findByPk(Id)
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
  const { Disease, PredictionDate } = req.query;
  const condition = {};

  if (Disease) {
    condition.Disease = { [Sequelize.Op.like]: `%${Disease}%` };
  }

  if (PredictionDate) {
    condition.PredictionDate = PredictionDate;
  }

  Prediction.findAll({
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

  Prediction.update(req.body, {
    where: { Id: Id },
  })
    .then((nums) => {
<<<<<<< HEAD
      if (nums) {
        res.status(200).send({
          message: "OK",
        });
      } else {
        res.status(400).send({
          message: "Bad Request",
        });
      }
=======
        if (nums) {
            res.status(200).send(nums)
        } else {
            res.status(400).send({
                message: "Bad Request"
            })
        }
>>>>>>> f6706ee8b15c56c0ddf59aba2349c97b4bfc1a3c
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};

exports.delete = (req, res) => {
  const { Id } = req.params;

  Prediction.destroy({
    where: { Id: Id },
  })
    .then((nums) => {
<<<<<<< HEAD
      if (nums) {
        res.status(200).send({
          message: "OK",
        });
      } else {
        res.status(400).send({
          message: "Bad Request",
        });
      }
=======
        if (nums) {
            res.status(200).send(nums)
        } else {
            res.status(400).send({
                message: "Bad Request"
            })
        }
>>>>>>> f6706ee8b15c56c0ddf59aba2349c97b4bfc1a3c
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};

exports.deleteAll = (req, res) => {
  Prediction.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
<<<<<<< HEAD
      res.status(200).send({
        message: "OK",
      });
=======
        res.status(200).send(nums)
>>>>>>> f6706ee8b15c56c0ddf59aba2349c97b4bfc1a3c
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};
