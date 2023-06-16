const models = require("../../models");

class UserGameController {
    //view
    async index(req, res) {
        const ListOfUserGames = await models.UserGame.findAll();//untuk mendapatkan semua data yang ada di classUserGame
        res.render("index", {//data akan dilempar ke index
            data: ListOfUserGames,
        })
    }
    async create(req, res) {
        res.render("create");
    }
    async edit(req, res) {
        const { id } = req.params;
        const userGame = await models.UserGame.findOne({
            where: {
                id: id,
            },
        });
        res.render("edit", {//data akan dilempar ke edit
            data: userGame,
        })
    }
    async show(req, res) {
        const { id } = req.params;
        const userGame = await models.UserGame.findOne({
            where: {
                id: id,
            },
            include: [models.user_game_history],
            include: [models.user_game_biodata],
        });
       // return res.json(userGame);
        res.render("show", {//data akan dilempar ke edit
            data: userGame,
        })
    }

    //action
    async store(req, res) {//insert
        const { username, password } = req.body;

        await models.UserGame.create({
            username: username,
            password: password,
        });
        return res.redirect("/user_games");
     }
    async update(req,res) {
      const { id } = req.params;
      const {username, password}=req.body;
      await models.UserGame.update({
        username: username,
        password:password,
      },{
        where:{
          id:id,
        },
      }
      );
      return res.redirect("/user_games");
     
     }
     async editbio(req,res) {
        const { id } = req.params;
        const {fullname, birthday, gender}=req.body;
        await models.UserGame.editbio({
          fullname: fullname,
          birthday:birthday,
          gender:gender,
        },{
          where:{
            id:id,
          },
        }
        );
        return res.redirect("/user_games");
       
       }
    async delete(req,res) {
      const {id}= req.params;
      await models.UserGame.destroy({
        where:{
          id,
        },
      });
      return res.redirect("/user_games");

      }
}
module.exports = UserGameController;
