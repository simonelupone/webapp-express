const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Elenco Movies");
});

router.get("/:id", (req, res) => {
  res.send("Dettaglio Movie: " + req.params.id);
});

module.exports = router;
