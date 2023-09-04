import { Service } from '@freshgum/typedi';

import { mapUser } from '$domain/mappings/user.mapper';
import { Handler } from '$infrastructure/webserver';

@Service([])
export class UserController {
  static getUser: Handler<unknown> = async ({ user }) => {
    return mapUser(user!);
  };
}
