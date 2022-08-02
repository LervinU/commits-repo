import express from "express";
import * as controller from './controllers/commit.controller.js';

export const router = express.Router();

router.get("/commits", controller.getCommits);
