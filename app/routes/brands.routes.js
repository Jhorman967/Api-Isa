const { authJwt } = require("../middleware");
const controller = require("../controllers/brands.controller");

module.exports  = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/brands/create", controller.create);

  app.get("/api/brands/read", controller.findAll);

  app.post("/api/brands/readOne/:id", controller.findOne);

  app.post("/api/brands/update/:id", controller.update);

  app.post("/api/brands/delete", controller.delete);
  
};
