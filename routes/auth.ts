import express, { Router, Request, Response, NextFunction } from "express";
import * as _ from 'lodash';
import Joi from '@hapi/joi';

const User = require('../models/User');
const router: Router = express.Router();

const schema = {
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string().min(7).required(),
}

router.post('/register', async (req: Request, res: Response) => {
    const validation = Joi.validate(req.body, schema)
    res.send(validation)
    // const { username, email, password } = req.body
    // const user = new User({
    //     username,
    //     email, 
    //     password, 
    // })
    // try {
    //     const saved = await user.save();
    //     res.send(saved)
    // } catch (err) {
    //     res.status(400).send(err)
    // }
})

module.exports = router;