const index = (req, res) => {
  res.send("Elenco Movies");
};

const show = (req, res) => {
  res.send("Dettaglio Movie: " + req.params.id);
};

module.exports = { index, show };
