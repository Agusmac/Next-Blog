import PostHeader from "./post-header"
import s from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from "next/image"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
// import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
// SyntaxHighlighter.registerLanguage('css', css)



const PostContent = ({ postData }) => {
    const { slug, title, date, image, excerpt, content } = postData

    const imagePath = `/images/posts/${slug}/${image}`

    const customRenderers = {
        img(image) {
            return (
                // <span className={s.image}>
                <Image
                    className="image"
                    src={`/images/posts/${slug}/${image.src}`}
                    alt={image.alt}
                    width={800}
                    height={400}
                />
                // </span>
            );
        },
        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1];
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        }
    }
    return (
        <article className={s.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </article>
    )
}

export default PostContent