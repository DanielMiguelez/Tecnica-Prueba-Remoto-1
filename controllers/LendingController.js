const { Lending } = require("../models/index.js");

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
};

module.exports = LendingController;
