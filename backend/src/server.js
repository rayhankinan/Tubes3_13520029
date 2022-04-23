// SETUP ENVIRONMENT VARIABLE
require("dotenv").config();

// SETUP LIBRARY
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// SETUP DATABASE
const db = require("./models");
const diseaseRoutes = require("./routes/disease.routes.js");
const predictionRoutes = require("./routes/prediction.routes.js");

// SETUP VARIABLE
const PORT = process.env.PORT || 3000;

// SETUP APPLICATION
const app = express();

app.use(
  cors({
    origin: "*", // UBAH INI DENGAN REACT APP
  })
);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// SYNC DATABASE
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// ADD ROUTES
diseaseRoutes(app);
predictionRoutes(app);

// PUT BACKEND ON PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
