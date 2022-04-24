const express = require('express');
const cors = require('cors');
const pool = require('./db')
const getDate = require('./getDate')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add-disease", async (req, res) => {
  const { name, sequence } = req.body;
  await pool.query("INSERT INTO disease (name, sequence) VALUES ($1, $2)", [name, sequence]);
  res.json("Disease added successfully!");
});

app.post("/test", async (req, res) => {
  const { patient, sequence, disease } = req.body;
  const diseaseQuery = await pool.query("SELECT * FROM disease WHERE name = $1", [disease]);
  const diseaseSequence = diseaseQuery.rows[0].sequence;
  /* Cek apakah sequence DNA pasien mengandung sequence DNA disease */
  let result = sequence.includes(diseaseSequence);
  let response = {};
  if (result) {
    response = {
      date: getDate(),
      patient: patient,
      disease: disease,
      similarity: "100%",
      result: "True",
    };
  } else {
    response = {
      date: getDate(),
      patient: patient,
      disease: disease,
      similarity: "Unknown",
      result: "False",
    };
  }
  await pool.query("INSERT INTO test (date, patient, disease, similarity, result) VALUES ($1, $2, $3, $4, $5)", [response.date, response.patient, response.disease, response.similarity, response.result]);
  res.json(response);
})

app.post("/search", async (req, res) => {
  const { search } = req.body;
  /* Hanya bisa bekerja untuk search by disease name */
  const queryResults = await pool.query("SELECT * FROM test WHERE disease = $1", [search]);
  res.json(queryResults.rows);
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started!");
  console.log(process.env.DATABASE_URL);
})