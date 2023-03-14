const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = require("./app");
dotenv.config({ path: "./config.env" });
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const PORT = 4001 || process.env.PORT;

app.use("/", express.static("public"));
app.use(fileUpload());
// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// mongoose
//   .connect(DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => console.log('Database connected successful!'))
//   .catch((err) => console.log('Database is not concocted to the server, you are offline:', err));

app.post("/extract_text", (req, res) => {
  if (!req.files.pdfFile) {
    res.status(400);
    res.end();
  }
  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
