import prisma from 'lib/prisma';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage({
  feeds,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            {feeds.map((feed) => (
              <div key={feed.id} className=' border-black  text-left'>
                <p>{feed.author?.name}</p>
                <p>{feed.title}</p>
                <p>{feed.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
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
