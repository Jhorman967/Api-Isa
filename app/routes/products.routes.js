const { authJwt } = require("../middleware");
const controller = require("../controllers/products.controller");

module.exports  = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/products/create", controller.create);

  app.get("/api/products/read", controller.findAll);

  app.post("/api/products/readOne/:id", controller.findOne);

  app.post("/api/products/update/:id", controller.update);

  app.post("/api/products/delete", controller.delete);
  
};
