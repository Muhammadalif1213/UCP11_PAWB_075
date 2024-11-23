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

router.put("/:id", (req, res) => {
    const pupukIndex = pupuk.findIndex((p) => p.id === parseInt(req.params.id));
    if (pupukIndex === -1)
      return res.status(404).json({ message: "Pupuk tidak ditemukan" });
  
    pupuk[pupukIndex] = {
      ...pupuk[pupukIndex],
      jenisPupuk: req.body.jenisPupuk || pupuk[pupukIndex].jenisPupuk,
      namaPupuk: req.body.namaPupuk || pupuk[pupukIndex].namaPupuk,
      deskripsi: req.body.deskripsi || pupuk[pupukIndex].deskripsi,
    };
  
    res.status(200).json({
      message: `Pupuk dengan ID ${req.params.id} telah diperbarui`,
      updatedPupuk: pupuk[pupukIndex],
    });
});

router.delete("/:id", (req, res) => {
    const pupukIndex = pupuk.findIndex((p) => p.id === parseInt(req.params.id));
    if (pupukIndex === -1)
      return res.status(404).json({ message: "Pupuk tidak ditemukan" });
  
    const deletedPupuk = pupuk.splice(pupukIndex, 1)[0];
    res.status(200).json({
      message: `Pupuk '${deletedPupuk.namaPupuk}' telah dihapus`,
    });
});