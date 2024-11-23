import bodyParser from "body-parser";
import express from "express";
import bibitRoute from "./route/bibit.js";
import pupukRoute from "./route/pupuk.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use("/bibit", bibitRoute);
app.use("/pupuk", pupukRoute);

app.get("/", (req, res) => {
    console.log("GET ROUTE");
    res.send("Muhammad Alifian");
});

app.listen(port, () =>
    console.log(`Server sedang berjalan di port: http://localhost:${port}`)
);