import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/lib/prisma';
import redis from '@/lib/redis';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET' && req.query.id) {
    const result = await prisma.product.findUnique({
      where: { id: `${req.query.id}` },
    });
    res.json(result);
  } else if (req.method === 'POST') {
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
    const result = await prisma.product.update({
      where: { id: `${req?.query?.id}` },
      data: {
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        imageSrc: req.body.imageSrc,
        reviewCount: req.body.reviewCount,
      },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    const prouductRedis = await redis.get('products');

    if (prouductRedis) {
      console.log('🚀 ~ Get redis');
      return res.json(JSON.parse(prouductRedis));
    } else {
      const products = await prisma.product.findMany();

      const serializedProducts = products.map((product) => {
        return {
          ...product,
          createdAt: product.createdAt.toISOString(),
          updatedAt: product.updatedAt.toISOString(),
        };
      });

      console.log('🚀 ~ Set redis');

      await redis.set('products', JSON.stringify(serializedProducts));

      res.json(serializedProducts);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
