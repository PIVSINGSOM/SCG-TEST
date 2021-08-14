import { Request } from 'express';
import { User } from '@interfaces/users.interface';
import { machineAttributes } from '@/models/machine';
export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithMachine extends Request {
  machine: machineAttributes;
}
