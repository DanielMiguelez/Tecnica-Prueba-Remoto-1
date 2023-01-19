const { User, Account } = require("../models/index.js");
const bcrypt = require ('bcryptjs');

const UserController = {
  createUser(req, res) {
    req.body.role = "user";
    const password = bcrypt.hashSync(req.body.password,10)
    User.create({...req.body, password:password }) 
      .then((user) => {
        res.status(201).send({ msg: "user created", user });
      })
      .catch((err) => console.error(err));
  },

login(req,res){
  User.findOne({
    where:{
      email:req.body.email
    }
  }).then(user=>{
    if(!user){
      return res.status(400).send({message:"user or password are not correct"})
    }
    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if(!isMatch){
      return res.status(400).send({message:"User or password are not correct"})
    }
    res.send(user)
  })
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
  async deleteUser(req, res) {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      await Account.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "User deleted" });
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "problem deleting user", err });
    }
  },

  async updateUserById(req, res) {
    await User.update({ ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send({msg: "Usuario actualizado con éxito", User});
  },
};

module.exports = UserController;
