const { User, Account } = require("../models/index.js");

const UserController = {
  createUser(req, res) {
    req.body.role = "user";
     User.create (req.body).then(user => {
        res.status(201).send({msg: "user created", user})
     })
     .catch(err => console.error(err))
  },
  getUsers(req, res) {
    User.findAll({
      include: [Account],
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err); res.status(500)
          .send({
            message: "Problem while getting users",
          });
      });
  },
}; 

module.exports = UserController;
