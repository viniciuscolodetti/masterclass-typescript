import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Vinicius', email: 'vinicius.colodetti@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Vinicius',
        email: 'vinicius@gmail.com'
      },
      message: {
        subject: 'Bem-Vindo',
        body: 'Seja bem vindo ao sistema'
      }
    });

    return res.send();
  }
}
