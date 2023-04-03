import { User, UserRepository, UserService, Token } from '../domain/user';
import { JwtUserAuthenticator } from '../authenticators/user-authenticator';

class DefaultUserService implements UserService {
  userRepository: UserRepository;
  jwtUserAuthenticator: JwtUserAuthenticator;

  constructor(
    userRepository: UserRepository,
    jwtUserAuthenticator: JwtUserAuthenticator
  ) {
    this.userRepository = userRepository;
    this.jwtUserAuthenticator = jwtUserAuthenticator;
  }

  async loginUser(username: string, password: string): Promise<Token> {
    if (!username) {
      throw new Error('please return a username');
    }

    const user = await this.userRepository.getUserByUsername(username);

    if (!user) {
      throw new Error('Invalid username or password');
    }

    if (user.password !== password) {
      throw new Error('Invalid username or password');
    }

    const token = await this.jwtUserAuthenticator.loginUser(user);

    return token;
  }

  async registerUser(username: string, password: string): Promise<User> {
    if (!username) {
      throw new Error('please return a username');
    }

    if (!password) {
      throw new Error('please return a password');
    }

    const user = await this.userRepository.registerUser(username, password);

    return user;
  }

  // async getAllUsers(limit: number, offset: number): Promise<User[]> {
  //   return await this.userRepository.getAllUsers(limit, offset);
  // }

  // async updateUser(id: string, username: string): Promise<User> {
  //   if (!id) {
  //     throw new Error('Please return an id');
  //   }

  //   if (!username) {
  //     throw new Error('Please return a username');
  //   }

  //   return await this.userRepository.updateUser(id, username);
  // }

  // async deleteUser(id: string): Promise<User> {
  //   if (!id) {
  //     throw new Error('Please return an id');
  //   }

  //   return await this.userRepository.deleteUser(id);
  // }
}

export default DefaultUserService;
