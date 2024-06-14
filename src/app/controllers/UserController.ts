import { Request, Response } from "express";
import generatePassword from "password-generator";

import Queue from "../lib/Queue";

export default {
  async store(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: generatePassword(15, false),
    };

    await Queue.add("RegistrationMail", { user });

    return res.json(user);
  },
};
