//require swagger
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

module.exports = app => {

    const options = {
        definition: {
        openapi: "3.0.0",
        info: {
            title: "API ADMIN ISA with Swagger",
            version: "0.1.0",
            description:
            "This is a API application base and documented with Swagger",
            license: {
            name: "API ADMIN ISA",
            url: "https://github.com/eduardokalle/Api_Admin_ISA",
            },
            contact: {
            name: "edocalle",
            url: "https://github.com/eduardokalle",
            email: "eduardokallek@gmail.com",
            },
            
        },
        servers: [
            {
            url: "https://api-admin-isa-rlj3.vercel.app/api/",
            },
        ],
        
        },
        apis: [
               "./app/docs/document/document-swagger.yaml",
               "./app/docs/schema.yaml",    
        ]
    };

    const specs = swaggerJsdoc(options);
    app.use(
    "/api-docs-swagger",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
    );

}