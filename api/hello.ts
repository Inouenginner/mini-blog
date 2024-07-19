import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req); //どこかで使う
  res.status(200).json({ message: "Hello from Vercel Serverless Function written in TypeScript!" });
}
