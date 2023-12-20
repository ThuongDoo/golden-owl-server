require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const productRouter = require("./routes/productRouter");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1/products", productRouter);

const port = process.env.PORT || 3000;
const mongoURL =
  "mongodb+srv://domanhthuong20122002:MatKhauMoi123@nodecourse.dcfmcdw.mongodb.net/goldenOwlTest?retryWrites=true&w=majority";
const start = async () => {
  try {
    connectDB(mongoURL);
    app.listen(port, () => {
      console.log("SERVER IS LISTENING ON PORT", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
