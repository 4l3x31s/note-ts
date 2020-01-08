import { Response, Request } from "express";

export function indexWelcome(req: Request, res: Response): Response {
    return res.json('Bienvenido to my api');
}