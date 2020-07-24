import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
//dentro das chaver do cors colocaria origin e o dominio ;D
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
