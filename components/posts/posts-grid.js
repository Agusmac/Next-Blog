import React from 'react'
import PostItem from './post-item'

import s from './posts-grid.module.css'

const PostsGrid = ({ posts }) => {
    return (
        <ul className={s.grid}>
            {posts.map(post => <PostItem key={post.slug} {...post} />)}
        </ul>
    )
}

export default PostsGrid