import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await prisma.blog.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId
    }
  })
  console.log(req); //どこかで使う
  res.status(200).json({ message: "Hello from Vercel Serverless Function written in TypeScript!" });
}
