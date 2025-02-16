import express from 'express';
import { config} from "dotenv";
import exp from 'constants';
config();


const app = express();

//middleware
app.use(express.json());


export default app;