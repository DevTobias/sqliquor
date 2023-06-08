import { User } from '@prisma/client';
import { CreateUserDto } from '$domain/dto/user/createUser.dto';

export const UserServiceSymbol = 'user_service';
export interface UserService {
  createUser: (payload: CreateUserDto) => Promise<User>;
}
