import { Router } from 'express';
import MachineController from '@/controllers/machine.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@/middlewares/auth.middleware';

class MachineRoute implements Routes {
  public path = '/machine';
  public router = Router();
  public machineController = new MachineController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.machineController.index);
    this.router.post(`${this.path}`, this.machineController.createMachine);
    this.router.get(`${this.path}/profile`, authMiddleware, this.machineController.profile);
  }
}

export default MachineRoute;
