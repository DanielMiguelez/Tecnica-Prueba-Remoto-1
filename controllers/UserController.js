const { User, Account, Token, Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const { Op } = Sequelize;
const transporter = require("../config/nodemailer");

const UserController = {
  async createUser(req, res, next) {
    try {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({
        ...req.body,
        password: hash,
        confirmed: false,
        rol: "user",
      });
      await transporter.sendMail({
        to: req.body.email,
        subject: "Confirm your registration",
        html: `<h3>Welcome, youre about to register! </h3>
    <a href="#"> Click to confirm!</a>
    `,
      });
      res.status(201).send({
        message: "We sent you an email",
        user,
      });
    } catch (err) {
      next(err);
    }
  },

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "user or password are not correct" });
      }
      if (!user.confirmed) {
        return res.status(400).send({ message: "Confirm your email" });
      }

      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "User or password are not correct" });
      }
      const token = jwt.sign({ id: user.id }, jwt_secret);
      Token.create({ token, UserId: user.id });
      res.send({ message: "Welcome" + user.name, user, token });
    });
  },
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.log(error);

      res
        .status(500)
        .send({ message: "hubo un problema al tratar de desconectarte" });
    }
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
    await User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send({ msg: "Usuario actualizado con éxito", User });
  },
};

module.exports = UserController;
