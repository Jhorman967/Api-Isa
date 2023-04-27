const { authJwt } = require("../middleware");
const controller = require("../controllers/vendors.controller");

module.exports  = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/vendors/create", controller.create);

  app.get("/api/vendors/read", controller.findAll);

  app.post("/api/vendors/readOne/:id", controller.findOne);

  app.post("/api/vendors/update/:id", controller.update);

  app.post("/api/vendors/delete", controller.delete);
  
};
