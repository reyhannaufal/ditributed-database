import prisma from 'lib/prisma';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ProductList from '@/components/ProductList';
import Seo from '@/components/Seo';

export default function HomePage({
  products,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const renderHeader = (
    <div className='py-10'>
      <div className='flex items-center justify-between space-x-10'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
          Trending products
        </h2>
        <button
          onClick={() => router.push('/p/create')}
          className='hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline md:block'
        >
          Create new product -{'>'}
        </button>
      </div>
    </div>
  );
  return (
    <Layout>
      <Seo title='Product List' />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            {renderHeader}
            <ProductList productsData={products} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const products = await prisma.product.findMany();

  const serializedProducts = products.map((product) => {
    return {
      ...product,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    };
  });

  return {
    props: {
      products: serializedProducts,
    },
  };
};
