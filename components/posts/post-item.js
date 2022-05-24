import React from 'react'
import s from './post-item.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostItem = ({ title, image, excerpt, date, slug } ) => {
  

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: 'long',
        year: "numeric"
    })

    const imagePath = `/images/posts/${slug}/${image}`


    return (
        <li className={s.post}>
            <Link href={`/posts/${slug}`}>
                <a >
                    <div className={s.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
                    </div>
                    <div className={s.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem