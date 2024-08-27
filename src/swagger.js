const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Jokes Submit App API',
      version: '1.0.0',
      description: 'code94',
    },
    servers: [
      {
        url: 'http://localhost:4100/api/1.0',
      },
    ],
  },
  apis: [`src/v1/routes/*.js`],
}
const specs = swaggerJsdoc(options);

module.exports = (app) => {
      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
