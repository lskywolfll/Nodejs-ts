import express from 'express';
import { getAll } from '../controller/persona.controller';
const app:express.Application = express();

app.get('/Persona', getAll);

export default app;