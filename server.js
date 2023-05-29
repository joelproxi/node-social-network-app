const express = require("express");
const dotEnv = require("dotenv");
const dbConnexion = require("./databases/connexion");

//Constant
dotEnv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 3001;

// database configuration
dbConnexion();

const app = express();

// Request payaload url Encoder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handler for routers
app.use("/api/v1/user", require("./routes/userRoute"));

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
