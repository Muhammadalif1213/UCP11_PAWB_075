import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("GET ROUTE");
    res.send("Muhammad Alifian");
});

app.listen(port, () =>
    console.log(`Server sedang berjalan di port: http://localhost:${port}`)
);