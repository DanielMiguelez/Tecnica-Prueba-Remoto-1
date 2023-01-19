const { Historial, Account } = require("../models/index.js");

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
  getHistorial(req, res) {
        Historial.findAll({
          include: [Account]
        })
          .then((historial) => res.send(historial))
          .catch((err) => {
            console.log(err); res.status(500)
              .send({
                message: "Problem while getting the historials",
              });
          });
      },
  
};

module.exports = HistorialController;
