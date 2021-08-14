import bcrypt from 'bcrypt';
import config from 'config';
import jwt from 'jsonwebtoken';
import DB from '@databases';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { machineAttributes, machineCreationAttributes } from '@/models/machine';
class AuthService {
  public users = DB.Users;
  public machine = DB.machine;
  // public async signup(userData: CreateUserDto): Promise<User> {
  //   if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //   const findUser: User = await this.users.findOne({ where: { email: userData.email } });
  //   if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

  //   const hashedPassword = await bcrypt.hash(userData.password, 10);
  //   const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

  //   return createUserData;
  // }

  public async login(machineData: machineCreationAttributes): Promise<TokenData> {
    if (isEmpty(machineData)) throw new HttpException(400, "You're not machine");

    const findMachine: machineAttributes = await this.machine.findOne({ where: { username: machineData.username } });
    if (!findMachine) throw new HttpException(409, `You're username ${machineData.username} not found`);

    const isPasswordMatching: boolean = await bcrypt.compare(machineData.password, findMachine.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = this.createToken(findMachine);
    // const cookie = this.createCookie(tokenData);

    return tokenData;
  }

  // public async logout(userData: User): Promise<User> {
  //   if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //   const findUser: User = await this.users.findOne({ where: { email: userData.email, password: userData.password } });
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   return findUser;
  // }

  public createToken(machine: machineAttributes): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: machine.id };
    const secretKey: string = config.get('secretKey');
    const expiresIn: number = 100000 * 600;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
