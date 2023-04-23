import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { createConnection } from './database/data-source';
import { router } from './routes';
import swaggerFile from './swagger.json';

import './shared/container';

createConnection().then(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.use(router);

  app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT);
  });
});
