import express from 'express';
import persona from './persona';

const app:express.Application = express();

app.use(persona);

export default app;