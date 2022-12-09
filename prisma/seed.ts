import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: '4',
    reviewCount: '38',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
  },
  {
    name: 'Organize Pen Holder',
    price: '$15',
    rating: '4',
    reviewCount: '18',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
  },
  {
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: '4',
    reviewCount: '14',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
  },
  {
    name: 'Organize Phone Holder',
    price: '$15',
    rating: '4',
    reviewCount: '21',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
  },
  {
    name: 'Organize Phone Holder',
    price: '$15',
    rating: '4',
    reviewCount: '21',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
  },
  // More products...
];

async function main() {
  const product = await prisma.product.createMany({
    data: products,
  });
  console.log({ product });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
