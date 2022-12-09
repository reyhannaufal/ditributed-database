import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function UpdatePage() {
  const router = useRouter();

  const { id } = router.query;

  const [product, setProduct] = React.useState(null);

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [rating, setRating] = React.useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/product?${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setName(data.name);
          setPrice(data.price);
          setRating(data.rating);
        });
    }
  }, [id]);

  const submitData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      reviewCount: '5',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    };

    fetch(`/api/product?${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    router.push('/');
  };

  return (
    <Layout>
      <Seo title='Update Product' />
      <div className='layout flex min-h-screen flex-col items-center justify-center'>
        <form
          className='mt-10 space-y-8 divide-y divide-gray-200'
          onSubmit={submitData}
        >
          <div className='space-y-8 divide-y divide-gray-200'>
            <div>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Update Product
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
              <a
                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={() => router.push('/')}
              >
                Cancel Update
              </a>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
