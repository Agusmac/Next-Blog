import React from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../helpers/posts-util'
import Head from 'next/head'

// const DUMMYPOSTS = [
//     { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs' },
//     { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs2' },
//     { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs3' },
//     { title:'Getting started with next', image:'getting-started-nextjs.png', excerpt:'lefishauchocolat', date:'2022-02-10', slug:'getting-started-with-nextjs4' }
//   ]

const AllPostsPage = ({ allPosts }) => {
  console.log(allPosts)
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta name='description' content="a list of all programming related tutorials & posts!" />
      </Head>
      <AllPosts posts={allPosts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return { props: { allPosts } }
}

export default AllPostsPage

