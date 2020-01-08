import { Request, Response } from "express";
import {connect} from '../database';

export async function getPosts(req: Request, res: Response) {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    res.json(posts);
}