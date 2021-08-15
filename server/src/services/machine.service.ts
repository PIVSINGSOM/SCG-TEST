import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { machineAttributes, machineCreationAttributes } from '@/models/machine';
import { isEmpty } from '@utils/util';

class MachineService {
  public machine = DB.machine;

  public async index(): Promise<machineAttributes[]> {
    const resultList: machineAttributes[] = await this.machine.findAll({
      attributes: { exclude: ['password'] },
    });
    return resultList;
  }

  public async profile(machineId: number): Promise<machineAttributes> {
    const resultList: machineAttributes = await this.machine.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: machineId,
      },
    });
    return resultList;
  }

  // public async findUserById(userId: number): Promise<User> {
  //   if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  //   const findUser: User = await this.users.findByPk(userId);
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   return findUser;
  // }

  public async createMachine(machineData: machineCreationAttributes): Promise<machineAttributes> {
    if (isEmpty(machineData)) throw new HttpException(400, "You're not userData");

    const findMachine: machineAttributes = await this.machine.findOne({ where: { username: machineData.username } });
    if (findMachine) throw new HttpException(409, `You're username ${machineData.username} already exists`);

    const hashedPassword = await bcrypt.hash(machineData.password, 10);
    const createMachineData: machineAttributes = await this.machine.create({ ...machineData, password: hashedPassword });
    return createMachineData;
  }

  // public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
  //   if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //   const findUser: User = await this.users.findByPk(userId);
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   const hashedPassword = await bcrypt.hash(userData.password, 10);
  //   await this.users.update({ ...userData, password: hashedPassword }, { where: { id: userId } });

  //   const updateUser: User = await this.users.findByPk(userId);
  //   return updateUser;
  // }

  // public async deleteUser(userId: number): Promise<User> {
  //   if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  //   const findUser: User = await this.users.findByPk(userId);
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   await this.users.destroy({ where: { id: userId } });

  //   return findUser;
  // }
}

export default MachineService;
