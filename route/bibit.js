import express from "express";

const router = express.Router();

const bibit = [
    { id: 1, namaBibit: "Mangga", jenisTanaman: "Buah", harga: 10000 },
    { id: 2, namaBibit: "Padi", jenisTanaman: "Pangan", harga: 5000 },
];

router.get("/", (req, res) => {
    res.json(bibit);
  });