import { Router, Request, Response } from "express";
import {getPosts} from '../controllers/post.controller';

const router = Router();

router.route('/')
    .get((req: Request, res: Response) => {
        res.json(getPosts)
    })

export default router;