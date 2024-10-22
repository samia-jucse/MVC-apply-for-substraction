import express from 'express';
import cors from 'cors';
import viewsSubtractor from './views/viewsSubtractor.js'; 

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/', viewsSubtractor);

app.listen(5000, () => console.log('App is running on port 5000'));
