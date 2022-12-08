import express from 'express';

const router = express.Router();
const loginRouter = express.Router();

router.use('/login', loginRouter);
