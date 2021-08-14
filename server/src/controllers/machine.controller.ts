import { NextFunction, Request, Response } from 'express';
import MachineService from '@/services/machine.service';

import { machineAttributes, machineCreationAttributes } from '@/models/machine';
class MachineController {
  public machineService = new MachineService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dataList: machineAttributes[] = await this.machineService.index();

      res.status(200).json({ data: dataList, message: '' });
    } catch (error) {
      next(error);
    }
  };

  public createMachine = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const machineData: machineCreationAttributes = req.body;
      const createMachineData: machineAttributes = await this.machineService.createMachine(machineData);
      res.status(201).json({ data: createMachineData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default MachineController;
