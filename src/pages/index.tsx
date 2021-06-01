import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'

import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

 export default function Home() {
   return (
     <>
      <Head>
        <title>Posts | Spacetraveling</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <strong>Creating a monorepo</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <span><FiCalendar /> Data</span>  &nbsp;&nbsp;&nbsp;&nbsp;
            <span><FiUser /> Autor</span>
          </a>
          <a href="#">
            <strong>Creating a monorepo</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <span><FiCalendar/> Data</span>  &nbsp;&nbsp;&nbsp;&nbsp;
            <span><FiUser /> Autor</span>
          </a>
          <a href="#">
            <strong>Creating a monorepo</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <span><FiCalendar/> Data</span>  &nbsp;&nbsp;&nbsp;&nbsp;
            <span><FiUser /> Autor</span>
          </a>
         <button>
           Carregar mais posts
         </button>
        </div>
      </main>
    </>
   )
 }

 export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const postsResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100,
  })

  return {
    props: {}
  };
};
