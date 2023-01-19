const { Account, User, Historial, Lending } = require("../models/index.js");

const AccountController = {
  createAccount(req, res) {
    Account.create(req.body)
      .then((account) => {
        res.status(201).send({
          msg: "account created",
          account,
        });
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  },
  getAccounts(req, res) {
    Account.findAll({
      include: [
        { model: User, attributes: ["name"] },
        { model: Historial, attributes: ["AccountId", "owner", "payments"] },
        { model: Lending, attributes: ["AccountId", "amount"] },
      ],
    })
      .then((accounts) => res.send(accounts))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Problem while getting the accounts",
        });
      });
  },

  async deleteAccount(req, res) {
    try {
      await Account.destroy({
        where: {
          id: req.params.id,
        },
      });
      await Historial.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "Account deleted" });
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "problem while deleting", err });
    }
  },
  async updateAccountById(req, res) {
    try {
      await Account.update(
        { number: req.body.number },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send({ msg: "Account updated successfully" });
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "Couldn't update the account", err });
    }
  },
};

module.exports = AccountController;
