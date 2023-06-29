const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/todo");
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});