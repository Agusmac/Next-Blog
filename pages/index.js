import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import { getFeaturedPosts } from "../helpers/posts-util"
import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// const DUMMYPOSTS = [
//   { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs' },
//   { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs2' },
//   { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs3' },
//   { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs4' }
// ]
export default function Home({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Agustin&apos;s Blog</title>
        <meta name='description' content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: { featuredPosts },
    revalidate: 600
  }
}