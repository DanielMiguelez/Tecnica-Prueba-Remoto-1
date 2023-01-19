const { Historial } = require("../models/index.js");

const HistorialController = {
  createHistorial(req, res) {
    Historial.create(req.body)
      .then((historial) => {
        res.status(201).send({
          msg: "Historial created",
          historial,
        });
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  },
};

module.exports = HistorialController;
