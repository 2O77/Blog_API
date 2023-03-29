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
  // registerUser(username: string, password: string): Promise<User>;
  loginUser(username: string, password: string): Promise<User>;
  // getAllUsers(limit: number, offset: number): Promise<User[]>;
  // updateUser(id: string, username?: string, password?: string): Promise<User>;
  // deleteUser(id: string): Promise<User>;
  getUserByUsername(username: string): Promise<User>;
}

interface UserService {
  // registerUser(username: string, password: string): Promise<User>;
  loginUser(username: string, password: string): Promise<Token>;
  // getAllUsers(limit: number, offset: number): Promise<User[]>;
  // updateUser(id: string, username?: string, password?: string): Promise<User>;
  // deleteUser(id: string): Promise<User>;
}

interface UserAuthenticator {
  signUser(user: User): Promise<Token>;
}

export { User, Token, UserRepository, UserService, UserAuthenticator };
