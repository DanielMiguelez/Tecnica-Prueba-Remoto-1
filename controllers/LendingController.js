const { Lending, Account } = require("../models/index.js");

const LendingController = {
  createLending(req, res) {
    Lending.create(req.body)
      .then((lending) => {
        res.status(201).send({
          msg: "lending created",
          lending,
        });
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  },
  getLendings(req, res) {
    Lending.findAll({
      include: [Account],
    })
      .then((lendings) => res.send(lendings))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las publicaciones",
          err,
        });
      });
  },
  async updateLendingById(req, res) {
    try {
      await Lending.update(
        { AccountId: req.body.AccountId, amount: req.body.amount },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send({ msg: "Lending updated successfully" });
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "Couldn't update this lending", err });
    }
  },
  async deleteLending(req, res) {
    try {
      await Lending.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "Lending finished!" });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "There's no chance to delete it, yet...", err });
    }
  },
};

module.exports = LendingController;
