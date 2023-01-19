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
      include: [Account],
    })
      .then((historial) => res.send(historial))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Problem while getting the historials",
        });
      });
  },
  async deleteHistorialById(req, res) {
    try {
      await Historial.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "Historial deleted successfully" });
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "Historial cannot be deleted", err });
    }
  },
  async updateHistorialById(req, res) {
    try {
      await Historial.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send({ msg: "Historial successfully updated" });
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "Couldn't update this historial", err });
    }
  },
};

module.exports = HistorialController;
