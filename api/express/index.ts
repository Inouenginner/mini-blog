import express, { Router } from 'express';

const app = express();

const router = Router();

router.get('/', (_: any, res: { json: (arg0: { message: string; }) => void; }) => {
  res.json({
    message: 'Hello from express!',
  });
});

app.use('/api/express', router);

export default app;