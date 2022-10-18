import express from 'express';
import schema from '/models/schema.js';
const authRouter = express.Router();

authRouter.get('/', (req, res) => res.send('Hello World!'))
export default  authRouter;
