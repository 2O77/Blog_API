import { User } from '../domain/user';
import { Token } from '../domain/user';
import { verify } from 'jsonwebtoken';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserAuthenticator } from '../domain/user';

dotenv.config();

class JwtUserAuthenticator implements UserAuthenticator {
  async loginUser(user: User): Promise<Token> {
    try {
      const token = sign(user, process.env.ACCESS_TOKEN_SECRET);
      return token;
    } catch (error) {
      return error;
    }
  }

  async decodeToken(token: string): Promise<User> {
    try {
      const decoded = verify(token, process.env.ACCESS_TOKEN_SECRET);
      return decoded;
    } catch (error) {
      return error;
    }
  }

  async isValidToken(token: string): Promise<boolean> {
    try {
      const decoded = verify(token, process.env.ACCESS_TOKEN_SECRET);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export { JwtUserAuthenticator };
