import express from "express";

const router = express.Router();

const pupuk = [
  { id: 1, jenisPupuk: "Organik", namaPupuk: "Kompos", deskripsi: "Pupuk alamiyang terbuat dari bahan organik." },
  { id: 2, jenisPupuk: "Kimia", namaPupuk: "Urea", deskripsi: "Pupuk kimia untuk meningkatkan hasil panen." },
];

router.get("/", (req, res) => {
    res.json(pupuk);
  });