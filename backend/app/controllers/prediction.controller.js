// SETUP LIBRARY
const Sequelize = require("sequelize")

// SETUP FILE
const db = require("../models")
const bm = require("../algorithms/bm.algorithm.js")
const kmp = require("../algorithms/kmp.algorithm.js")
const ssaha = require("../algorithms/ssaha.algorithm.js")
const Prediction = db.predictions

// FUNCTION
exports.create = (req, res) => {
    const { User, Disease, DNASequence, IsKMP, PredictionDate } = req.body

    if (User && Disease && DNASequence && PredictionDate) {
        const DiseaseDB = db.diseases

        DiseaseDB.findOne({
            where: { Name: Disease }
        })
        .then((data) => {
            if (data) {
                const Similarity = IsKMP ? (kmp(DNASequence, data.DNASequence) ? 1 : ssaha(DNASequence, data.DNASequence)) : (bm(DNASequence, data.DNASequence) ? 1 : ssaha(DNASequence, data.DNASequence))
                const PredictionStatus = Similarity >= 0.8

                const prediction = {
                    User: User,
                    Disease: Disease,
                    Similarity: Similarity,
                    PredictionStatus: PredictionStatus,
                    PredictionDate: PredictionDate
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
    condition.Disease = Disease;
  }

  if (PredictionDate) {
    condition.PredictionDate = Sequelize.where(Sequelize.fn("DATE", Sequelize.col("PredictionDate")), "=", PredictionDate);
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
        if (nums) {
            res.status(200).send(nums)
        } else {
            res.status(400).send({
                message: "Bad Request"
            })
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

  Prediction.destroy({
    where: { Id: Id },
  })
    .then((nums) => {
        if (nums) {
            res.status(200).send(nums)
        } else {
            res.status(400).send({
                message: "Bad Request"
            })
        }
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
        res.status(200).send(nums)
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Internal Server Error",
      });
    });
};
