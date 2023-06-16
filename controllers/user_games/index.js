const router = require("express").Router();//bikin routingnya
const UserGameController = require("./user_game_controller");//panggil

const controller = new UserGameController()

router.get("/", controller.index );
router.get("/create", controller.create);
router.get("/:id", controller.show);
router.get("/:id/edit", controller.edit);
router.get("/:id/delete", controller.delete );

router.post("/store", controller.store);
router.post("/:id/update", controller.update);
router.post("/:id/editbio", controller.editbio);

module.exports=router;
