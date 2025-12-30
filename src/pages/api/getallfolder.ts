// src/pages/api/getallfolder.ts
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blogDir = path.join(process.cwd(), 'src', 'app','(blogs)');

  try {
    const folders = fs.readdirSync(blogDir).filter(name =>
      fs.lstatSync(path.join(blogDir, name)).isDirectory()
    );
    res.status(200).json({ slugs: folders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ slugs: [], error: 'Failed to read blog folders' });
  }
}
