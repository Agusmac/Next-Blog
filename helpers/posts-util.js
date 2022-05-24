import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export  function getPostData(fileName) {
    const postSlug = fileName.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
   
    const postData = {
        slug: postSlug,
        ...data,
        content,
    }

    return postData
}

export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}
export function getAllPosts() {
    const postFiles = getPostsFiles()
    const allPosts = postFiles.map(postFile => getPostData(postFile))
    return allPosts.sort((a, b) => a.date > b.date ? -1 : 1)
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()
    // console.log(allPosts)
    return allPosts.filter(post => post.isFeatured)
}