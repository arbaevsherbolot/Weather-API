require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 2006;

const cors = require("cors");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
});

app.use(limiter);
app.set("trust proxy", 1);

app.use(express.static("public"));

app.use("/api", require("./routes/Weather"));
app.use(cors());

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
