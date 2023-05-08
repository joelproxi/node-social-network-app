const express = require("express");
const userRoutes = require("./routes/user.routes");
const dotEnv = require("dotenv");
const dbConnection = require("./config/db");

dotEnv.config({ path: "./config/.env" });

const app = express();

dbConnection();

app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server stared on http://localhost:${process.env.PORT}`);
});
