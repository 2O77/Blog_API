import { User, UserRepository } from '../domain/user';
import { User as MongoUser } from '../models/user-model';

class MongoUserRepository implements UserRepository {
  constructor() {}

  async loginUser(username: string, password: string): Promise<User> {
    const user = await MongoUser.findOne({ username, password });
    if (!user) {
      throw new Error('Invalid username or password');
    }
    if (user.password !== password) {
      throw new Error('Invalid username or password');
    }

    return {
      id: user.id,
      username: user.username,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async registerUser(username: string, password: string): Promise<User> {
    const user = await MongoUser.create({ username, password });
    return {
      id: user.id,
      username: user.username,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async getUserByUsername(username: string): Promise<User> {
    const user = await MongoUser.findOne({ username });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      username: user.username,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
export default MongoUserRepository;
