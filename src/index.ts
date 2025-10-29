import express from "express";
import { PrismaClient } from './generated/prisma/client.js';

const app = express();
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    const user = await prisma.user.findMany();
    res.json(({
        user
    }))
})

app.post('/', async (req, res) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }

    })
    const user = prisma.user.findMany();
    res.json(({
        message: "Account Added"
    }))
})

app.listen(3000, () => {
    console.log("Server Listing port 3000");
})