import express, { Request, Response, NextFunction } from 'express';
import prisma from './prisma-client';
import { routers, AppRouter } from './controllers';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());

routers.forEach((route: AppRouter) => {
  app.use('/api/v1' + route.path, route.router);
});

// Simple example route
app.get('/users', async (req: Request, res: Response) => {
  const user: object[] | null = await prisma.user.findMany({
    select: { email: true, createdAt: true },
  });

  res.send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
