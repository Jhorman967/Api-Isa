const { authJwt } = require("../middleware");
const controller = require("../controllers/orders.controller");

module.exports  = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/orders/create", controller.create);

  app.get("/api/orders/read", controller.findAll);

  app.post("/api/orders/readOne/:id", controller.findOne);

  app.post("/api/orders/update/:id", controller.update);

  app.post("/api/orders/delete", controller.delete);
  
};
