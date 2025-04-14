const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require('dotenv').config()



// middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

const bookRoutes =  require("./src/books/book.route")
app.use("/api/books", bookRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Hello, Welcome to the BOOKSTORE app!");
  });
}

main().then(() => console.log("mongo db connected successfully")).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
