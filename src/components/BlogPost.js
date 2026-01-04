import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        // In a real app, you might fetch this from a CMS or local file mapping
        // For this demo, we'll fetch from public folder
        fetch(`/posts/${slug}.md`)
            .then(res => {
                if (!res.ok) throw new Error("Post not found");
                return res.text();
            })
            .then(text => {
                // Simple frontmatter parser (assuming --- starts the file)
                const parts = text.split('---');
                if (parts.length >= 3) {
                    const frontmatter = parts[1];
                    const body = parts.slice(2).join('---');

                    // Parse metadata
                    const metaObj = {};
                    frontmatter.split('\n').forEach(line => {
                        const [key, ...val] = line.split(':');
                        if (key && val) metaObj[key.trim()] = val.join(':').trim().replace(/"/g, '');
                    });

                    setMeta(metaObj);
                    setContent(body);
                } else {
                    setContent(text);
                }
            })
            .catch(err => {
                setContent("# 404: Post Not Found\nSorry, that article could not be located.");
            });
    }, [slug]);

    return (
        <div className="blog-post-page">
            <div className="container">
                <Link to="/blog" className="back-btn">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Tech Notes
                </Link>

                <article className="markdown-body">
                    {meta.title && (
                        <div className="post-header">
                            <h1>{meta.title}</h1>
                            <div className="meta">
                                <span><FontAwesomeIcon icon={faCalendarAlt} /> {meta.date}</span>
                            </div>
                        </div>
                    )}

                    <ReactMarkdown
                        children={content}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={dracula}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
