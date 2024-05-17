import express, { Request, Response, NextFunction } from 'express';
import prisma from './prisma-client';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
