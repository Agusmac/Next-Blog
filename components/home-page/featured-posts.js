import React from 'react'
import PostsGrid from '../posts/posts-grid'

import s from './featured-posts.module.css'

const FeaturedPosts = ({posts}) => {
  return (
    <section className={s.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts