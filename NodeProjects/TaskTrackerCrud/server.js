const express = require("express");
const dotenv = require("dotenv");
//Load env vars
dotenv.config({ path: "./config/config.env" });

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

app.use(
  bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cookieParser());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

require("./routes/index")(app);

const PORT = process.env.PORT || 4000;
const connect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: true,
});

connect.then(
  (db) => {
    app.listen(PORT, "localhost", () => {
      console.log("server running", PORT);
    });
  },
  (err) => {
    console.log(err);
  }
);
