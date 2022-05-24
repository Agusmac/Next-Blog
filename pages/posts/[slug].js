import React from 'react'
import Head from 'next/head'

import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../helpers/posts-util'

const SinglePost = ({ postData }) => {
  // console.log(postData.title)
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name='description' content={postData.excerpt} />
      </Head>
      <PostContent postData={postData} />
    </>
  )
}


export function getStaticProps(context) {
  const postData = getPostData(context.params.slug)
  return { props: { postData }, revalidate: 600 }
}


export function getStaticPaths() {
  const allPosts = getPostsFiles()
  const slugs = allPosts.map(post => post.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default SinglePost