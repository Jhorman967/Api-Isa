const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports  = (app) => {
  
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users/all",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.allAccess
   );

  app.get(
    "/api/users/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/users/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/users/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
