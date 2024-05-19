const express = require("express");
const cors = require("cors")
const rootRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1" , rootRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
})