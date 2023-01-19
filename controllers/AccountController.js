const { Account, User, Historial, Lending } = require("../models/index.js");

const AccountController = {
    createAccount(req,res){
        Account.create (req.body).then(account => {
            res.status(201).send({
                msg:"account created", account
            })
        })
        .catch(err=>{
            console.error(err)
            res.send(err)
        })
    },
    getAccounts(req, res) {
        Account.findAll({
          include: [{model:User, attributes: ["name"]}, {model:Historial, attributes: ["AccountId", "owner", "payments"]}
        ]
        })
          .then((accounts) => res.send(accounts))
          .catch((err) => {
            console.log(err); res.status(500)
              .send({
                message: "Problem while getting the accounts",
              });
          });
      },

}
module.exports = AccountController