import { RegisterPayload, RegisterResponse } from '$domain/dto/auth/register.dto';

export const AuthServiceSymbol = 'auth_service';
export interface AuthService {
  signUp: (payload: RegisterPayload) => Promise<RegisterResponse>;
}
