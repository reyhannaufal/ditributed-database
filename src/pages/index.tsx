import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ProductList from '@/components/ProductList';
import Seo from '@/components/Seo';

export default function HomePage() {
  const router = useRouter();

  const [productsData, setProductsData] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/product');
      const data = await res.json();
      setProductsData(data);
    };
    fetchProducts();
  }, []);

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
            {productsData && productsData.length !== 0 ? (
              <ProductList productsData={productsData} />
            ) : (
              <p>Data not found</p>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
