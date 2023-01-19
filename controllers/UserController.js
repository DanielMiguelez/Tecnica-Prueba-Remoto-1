const { User, Account } = require("../models/index.js");

const UserController = {
  createUser(req, res) {
    req.body.role = "user";
    User.create(req.body)
      .then((user) => {
        res.status(201).send({ msg: "user created", user });
      })
      .catch((err) => console.error(err));
  },
  getUsers(req, res) {
    User.findAll({
      include: [Account],
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Problem while getting users",
        });
      });
  },
  async deleteUser(req,res) {
    try {
      await User.destroy({
        where:{
          id:req.params.id,
        },
      });
      await Account.destroy({
        where:{
          id:req.params.id,
        },
      });
      res.send({msg:"User deleted"})
    } catch (error) {
      console.error(err)
      res
        .status(500)
        .send({msg:"problem deleting user", err})
    }
  },
}
module.exports = UserController;
