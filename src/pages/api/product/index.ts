import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const result = await prisma.product.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        imageSrc: req.body.imageSrc,
        reviewCount: req.body.reviewCount,
      },
    });

    res.json(result);
  } else if (req.method === 'DELETE') {
    const result = await prisma.product.delete({
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
