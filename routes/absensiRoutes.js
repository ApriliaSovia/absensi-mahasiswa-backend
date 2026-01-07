const express = require("express");
const router = express.Router();
const db = require("../config/db");

// READ
router.get("/", (req, res) => {
  db.query("SELECT * FROM absensi", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// CREATE
router.post("/", (req, res) => {
  const { nama, nim, tanggal, status } = req.body;
  db.query(
    "INSERT INTO absensi (nama, nim, tanggal, status) VALUES (?, ?, ?, ?)",
    [nama, nim, tanggal, status],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Data berhasil ditambahkan" });
    }
  );
});

// UPDATE
router.put("/:id", (req, res) => {
  const { nama, nim, tanggal, status } = req.body;
  db.query(
    "UPDATE absensi SET nama=?, nim=?, tanggal=?, status=? WHERE id=?",
    [nama, nim, tanggal, status, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Data berhasil diubah" });
    }
  );
});

// DELETE
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM absensi WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Data berhasil dihapus" });
    }
  );
});

module.exports = router;
