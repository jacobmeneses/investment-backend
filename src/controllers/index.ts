import { Router } from 'express';
import { router as oportunityRouter } from './oportunity';

export class AppRouter {
  path: string;
  router: Router;

  public constructor(path: string, router: Router) {
    this.path = path;
    this.router = router;
  }
};

export const routers = [ 
  new AppRouter('/oportunity', oportunityRouter),
];
