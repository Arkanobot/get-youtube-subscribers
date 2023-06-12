const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");

exports.swaggerSetup = (app) => {
  dotenv.config();

  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Get Youtube Subscribers",
        description:
          "Information related to all the available endpoints for the Capstone Project II: Get Youtube Subscribers",
        contact: {
          name: "Shreyas Bhat K",
        },
        servers: [`127.0.0.1:${process.env.PORT}`],        
      },
    },
    apis: ["src/view/swagger/swagger.js"],
  };

  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, {customSiteTitle:"Docs",}));
};
