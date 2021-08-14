import { NextFunction, Response } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';
import DB from '@databases';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithMachine } from '@interfaces/auth.interface';

const authMiddleware = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;
    console.log('Authorization', Authorization);
    if (Authorization) {
      const secretKey: string = config.get('secretKey');
      const verificationResponse = jwt.verify(Authorization, secretKey) as DataStoredInToken;
      const machineId = verificationResponse.id;
      console.log('machine id ', machineId);
      const findMachine = await DB.machine.findByPk(machineId);

      if (findMachine) {
        req.machine = findMachine;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
