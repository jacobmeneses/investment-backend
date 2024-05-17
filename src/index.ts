import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
