import prisma from 'lib/prisma';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage({
  feeds,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const handleOnClickCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const body = {
      title: 'title',
      content: 'content',
    };

    fetch('/api/feed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  const handleOnClickDelete = (id: string) => {
    fetch('/api/feed', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
  };

  const handleOnClickUpdate = (id: string) => {
    fetch('/api/feed', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <div>
              <h1 className='p-5'>Feed List</h1>
              <Button onClick={handleOnClickCreate}>Create</Button>
            </div>
            {feeds.map((feed) => (
              <div
                key={feed.id}
                className='flex flex-col items-center justify-center p-4'
              >
                <p>{feed.author?.name}</p>
                <p>{feed.title}</p>
                <p>{feed.content}</p>
                <div className='mt-4 flex space-x-2'>
                  <Button onClick={() => handleOnClickDelete(feed.id)}>
                    Delete
                  </Button>
                  <Button onClick={() => handleOnClickUpdate(feed.id)}>
                    Update
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const feeds = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: {
      feeds,
    },
  };
};
