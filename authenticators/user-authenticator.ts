import { User } from '../domain/user';
import { Token } from '../domain/user';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserAuthenticator } from '../domain/user';

dotenv.config();

class JwtUserAuthenticator implements UserAuthenticator {
  async signUser(user: User): Promise<Token> {
    try {
      const token = sign(user, process.env.ACCESS_TOKEN_SECRET);
      return token;
    } catch (error) {
      return error;
    }
  }
}

export { JwtUserAuthenticator };
