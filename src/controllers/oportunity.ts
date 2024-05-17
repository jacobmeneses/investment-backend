import { Router, Request } from 'express';
import prisma from '../prisma-client';

export const router = Router();

router.get('/', async (req: Request, res) => {
  const oportunities: object[] | null = await prisma.oportunity.findMany({
    include: {
      company: { select: { name: true } },
    }
  });

  res.send(oportunities);
});
