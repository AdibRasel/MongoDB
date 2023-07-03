const Express = require("express");
const Router = Express.Router();
const controller = require("./controller")



Router.get("/test", controller.test)




module.exports = Router