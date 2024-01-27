const express = require('express');
import Express from 'express';
const router = express.Router();
const functionProblems = require('../models/functions');

router.get('/functions', async (req: Express.Request, res: Express.Response) => {
    const result = await functionProblems.find();
    res.send({"problems": result});
});

router.get("/functions/:id", async (req: Express.Request, res: Express.Response) => {
    const problemId = req.params.id;
    const result = await functionProblems.find({_id: problemId});
    res.send({"problem": result});
});

module.exports = router