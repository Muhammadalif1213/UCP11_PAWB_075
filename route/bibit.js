import express from "express";

const router = express.Router();

const bibit = [
    { id: 1, namaBibit: "Mangga", jenisTanaman: "Buah", harga: 10000 },
    { id: 2, namaBibit: "Padi", jenisTanaman: "Pangan", harga: 5000 },
];

router.get("/", (req, res) => {
    res.json(bibit);
});

router.post("/", (req, res) => {
    const newBibit = {
        id: bibit.length + 1,
        namaBibit: req.body.namaBibit,
        jenisTanaman: req.body.jenisTanaman,
        harga: req.body.harga,
    };
    bibit.push(newBibit);
    res.status(201).json(newBibit);
});

router.put("/:id", (req, res) => {
    const bibitIndex = bibit.findIndex((b) => b.id === parseInt(req.params.id));
    if (bibitIndex === -1)
      return res.status(404).json({ message: "Bibit tidak ditemukan" });
  
    bibit[bibitIndex] = {
      ...bibit[bibitIndex],
      namaBibit: req.body.namaBibit || bibit[bibitIndex].namaBibit,
      jenisTanaman: req.body.jenisTanaman || bibit[bibitIndex].jenisTanaman,
      harga: req.body.harga || bibit[bibitIndex].harga,
    };
  
    res.status(200).json({
      message: `Bibit dengan ID ${req.params.id} telah diperbarui`,
      updatedBibit: bibit[bibitIndex],
    });
});  

router.delete("/:id", (req, res) => {
    const bibitIndex = bibit.findIndex((b) => b.id === parseInt(req.params.id));
    if (bibitIndex === -1)
      return res.status(404).json({ message: "Bibit tidak ditemukan" });
  
    const deletedBibit = bibit.splice(bibitIndex, 1)[0];
    res.status(200).json({
      message: `Bibit '${deletedBibit.namaBibit}' telah dihapus`,
    });
});

export default router;