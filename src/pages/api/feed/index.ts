import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  if (req.method === 'POST') {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        published: true,
        author: { connect: { email: 'alice@prisma.io' } },
      },
    });

    res.json(result);
  } else if (req.method === 'DELETE') {
    const result = await prisma.post.delete({
      where: { id: `${req?.body?.id}` },
    });
    res.json(result);
  } else if (req.method === 'PUT') {
    const result = await prisma.post.update({
      where: { id: `${req?.body?.id}` },
      data: {
        title: {
          set: 'Updated title',
        },
      },
    });
    res.json(result);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
