interface User {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Token {
  token: string;
}

interface UserRepository {
  registerUser(username: string, password: string): Promise<User>;
  loginUser(username: string, password: string): Promise<User>;
  getUserByUsername(username: string): Promise<User>;
}

interface UserService {
  registerUser(username: string, password: string): Promise<User>;
  loginUser(username: string, password: string): Promise<Token>;
}

interface UserAuthenticator {
  loginUser(user: User): Promise<Token>;
  decodeToken(token: string): Promise<User>;
  isValidToken(token: string): Promise<boolean>;
}

export { User, Token, UserRepository, UserService, UserAuthenticator };
