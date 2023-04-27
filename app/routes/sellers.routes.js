const { authJwt } = require("../middleware");
const controller = require("../controllers/sellers.controller");

module.exports  = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/sellers/create", controller.create);

  app.get("/api/sellers/read", controller.findAll);

  app.post("/api/sellers/readOne/:id", controller.findOne);

  app.post("/api/sellers/update/:id", controller.update);

  app.post("/api/sellers/delete", controller.delete);
  
};
