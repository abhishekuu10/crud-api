const { Router } = require("express");
const route = Router({ mergeParams: true });
const {get,create,update,del} = require("../../../controllers")




route.get("/employee/", get);
route.post("/employee", create);
route.put("/employee/", update);
route.delete("/employee/", del);

module.exports = {route };

