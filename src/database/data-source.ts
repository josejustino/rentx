import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Category } from '../modules/cars/entities/Category';
import { CreateCategories1679925807132 } from './migrations/1679925807132-CreateCategories';
import { CreateSpecifications1682256919658 } from './migrations/1682256919658-CreateSpecifications';

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Category],
  migrations: [
    CreateCategories1679925807132,
    CreateSpecifications1682256919658,
  ],

  /* eslint-disable n/no-path-concat */
  // migrations: [`${__dirname}/**/database/migrations/*.{ts,js}`],
});

export const createConnection = (host = 'database'): Promise<DataSource> => {
  return AppDataSource.setOptions({ host }).initialize();
};
