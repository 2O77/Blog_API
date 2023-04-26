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
}

export default DefaultUserService;
