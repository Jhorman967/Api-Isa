const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
//  force: true will drop the table if it already exists
 db.sequelize.sync({force: true}).then(() => {
   console.log('Drop and Resync Database with { force: true }');
   initial();
 });
// esso laaaaaa creaaa crea las tablaas yy crera un orp
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API ADMIN ISA application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/vendors.routes')(app);
require('./app/routes/brands.routes')(app);
require('./app/routes/sellers.routes')(app);
require('./app/routes/products.routes')(app);
require('./app/routes/orders.routes')(app);
require('./app/routes/swagger.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}