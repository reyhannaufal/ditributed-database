import { useRouter } from 'next/router';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function CreatePage() {
  const router = useRouter();

  const handleOnClickCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const body = {
      name: 'New',
      price: '1',
      rating: '2',
      reviewCount: '5',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    };

    fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    router.push('/');
  };

  return (
    <Layout>
      <Seo templateTitle='Create Product' />
      <div className='layout flex min-h-screen flex-col items-center justify-center'>
        <form className='mt-10 space-y-8 divide-y divide-gray-200'>
          <div className='space-y-8 divide-y divide-gray-200'>
            <div>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Create Product
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>
            <div className='pt-8'>
              <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='text'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Product Name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='text'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Price
                  </label>
                  <div className='mt-1'>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='text'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Rating
                  </label>
                  <div className='mt-1'>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Image List
                  </label>
                  <div className='mt-1'>
                    <select
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='button'
                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={() => router.push('/')}
              >
                Cancel
              </button>
              <button
                onClick={handleOnClickCreate}
                className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
