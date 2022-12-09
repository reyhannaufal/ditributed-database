import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function CreatePage() {
  const router = useRouter();

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [imageSrc, setImageSrc] = React.useState('');

  const submitData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = {
      name,
      price,
      rating,
      reviewCount: '5',
      imageSrc,
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
      <Seo title='Create Product' />
      <div className='layout flex min-h-screen flex-col items-center justify-center'>
        <form
          className='mt-10 space-y-8 divide-y divide-gray-200'
          onSubmit={submitData}
        >
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Price
                  </label>
                  <div className='mt-1'>
                    <input
                      id='price'
                      name='price'
                      type='text'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='rating'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Rating
                  </label>
                  <div className='mt-1'>
                    <input
                      id='rating'
                      name='rating'
                      type='text'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='imageSrc'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Image Source List
                  </label>
                  <div className='mt-1'>
                    <select
                      id='imageSrc'
                      name='imageSrc'
                      autoComplete='imageSrc'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setImageSrc(e.target.value)}
                      value={imageSrc}
                    >
                      <option value='https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg'>
                        Organize Basic Set (Walnut)
                      </option>
                      <option value='https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg'>
                        Organize Pen Holder
                      </option>
                      <option value='https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg'>
                        Organize Sticky Note Holder
                      </option>
                      <option value='https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg'>
                        Organize Phone Holder
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <a
                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={() => router.push('/')}
              >
                Cancel
              </a>
              <button
                type='submit'
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
