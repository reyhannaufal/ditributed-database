import { useRouter } from 'next/router';

/* eslint-disable @next/next/no-img-element */
export default function ProductList({
  productsData,
}: {
  productsData: {
    imageSrc: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    name: string;
    price: string;
    rating: string;
    reviewCount: string;
  }[];
}) {
  const router = useRouter();
  const handleOnClickDelete = async (
    e: { preventDefault: () => void },
    id: string
  ) => {
    e.preventDefault();

    await fetch('/api/product', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    router.reload();
  };
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='-mx-px grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
          {productsData?.map((product) => ProductCard(product))}
        </div>
      </div>
    </div>
  );

  function ProductCard(product: {
    imageSrc: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    name: string;
    price: string;
    rating: string;
    reviewCount: string;
  }): JSX.Element {
    return (
      <div>
        <div key={product.id} className='group relative  p-4 sm:p-6'>
          <div className='aspect-w-1 aspect-h-1  rounded-lg bg-gray-200 group-hover:opacity-75'>
            <img
              src={product.imageSrc}
              alt={product.name}
              className='h-full w-full object-cover object-center'
              onClick={() => router.push(`/p/${product.id}`)}
            />
          </div>
          <div className='pt-10 pb-4 text-center'>
            <h3 className='text-sm font-medium text-gray-900'>
              <a>
                <span aria-hidden='true' className='absolute inset-0' />
                {product.name}
              </a>
            </h3>
            <div className='mt-3 flex flex-col items-center'>
              <p className='sr-only'>{product.rating} out of 5 stars</p>
              <p className='mt-1 text-sm text-gray-500'>
                {product.reviewCount} reviews
              </p>
            </div>
            <p className='mt-4 text-base font-medium text-gray-900'>
              {product.price}
            </p>
          </div>
        </div>
        <div className='flex justify-center space-x-5 py-1'>
          <button
            onClick={(e) => handleOnClickDelete(e, product.id)}
            className='rounded-xl border-2 border-red-500 p-2 text-sm font-medium text-red-500 hover:underline'
          >
            Delete
          </button>
          <button
            onClick={() => router.push(`/p/update/${product.id}`)}
            className='rounded-xl border-2 border-yellow-500 p-2 text-sm font-medium text-yellow-500 hover:underline'
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}
