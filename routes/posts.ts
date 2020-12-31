import express, { Router, Request, Response, NextFunction } from "express";
import * as _ from 'lodash';
const Post = require('../models/Post');

const router: Router = express.Router();

router.use('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('Middleware');
    return next();
});

router.get("/", async (req: Request, res: Response,) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.json({ message: err })
    } 
});

router.get('/:id', async (req: Request, res: Response,) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req: Request, res: Response,) => {
    const { title, description } = req.body
    const post = new Post({
        title,
        description,
    });
    try {
        const savedPost = await post.save()
        res.status(201).json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
});

router.delete('/:id', async (req: Request, res: Response,) => {
    const removed = await Post.remove({ _id: req.params.id })
    res.json(removed)
});

router.patch('/:id', async (req: Request, res: Response,) => {
    const { title, description } = req.body
    try {
        const updated = await Post.updateOne(
            { _id: req.params.id },
            { $set: {
                title,
                description
            }}
        );
        res.json(updated)
    } catch (err) {
        res.json({ message: err })
    }
})


module.exports = router;