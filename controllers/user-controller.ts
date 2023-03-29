import { Request, Response } from 'express';
import { UserService } from '../domain/user';

class ExpressUserController {
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  async loginUser(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;

      const user = await this.userService.loginUser(username, password);

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  }
}

export default ExpressUserController;
