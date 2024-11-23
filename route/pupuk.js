import express from "express";

const router = express.Router();

const pupuk = [
  { id: 1, jenisPupuk: "Organik", namaPupuk: "Kompos", deskripsi: "Pupuk alamiyang terbuat dari bahan organik." },
  { id: 2, jenisPupuk: "Kimia", namaPupuk: "Urea", deskripsi: "Pupuk kimia untuk meningkatkan hasil panen." },
];

router.get("/", (req, res) => {
    res.json(pupuk);
});

router.post("/", (req, res) => {
    const newPupuk = {
      id: pupuk.length + 1,
      jenisPupuk: req.body.jenisPupuk,
      namaPupuk: req.body.namaPupuk,
      deskripsi: req.body.deskripsi,
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk);
});