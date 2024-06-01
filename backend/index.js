const express = require("express");
const cors = require("cors")
const rootRouter = require("./routes/index.js");

const app = express();

app.use(cors({
    origin: 'http://100.100.11.105:5173'
}));
app.use(express.json());
app.use("/api/v1" , rootRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
})