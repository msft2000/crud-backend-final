require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const userRouter = require("./routes/user");
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use('/api/v1/user', userRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
