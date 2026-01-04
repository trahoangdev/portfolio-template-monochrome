import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import '../styles/Blog.css';

const Blog = () => {
    useEffect(() => {
        document.title = "Tech Notes | Tra Hoang Trong";
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            id: 1,
            title: "Building a Monochrome Portfolio in React",
            excerpt: "How I handled theme switching, glassmorphism, and 3D interactions without cluttering the UI.",
            date: "Jan 05, 2026",
            readTime: "5 min read",
            tags: ["React", "CSS", "UI/UX"],
            slug: "monochrome-portfolio"
        },
        {
            id: 2,
            title: "Why I Switched to TypeScript",
            excerpt: "From loose typing chaos to strict typing nirvana. A journey of finding bugs before they happen.",
            date: "Dec 12, 2025",
            readTime: "8 min read",
            tags: ["TypeScript", "Frontend"],
            slug: "typescript-journey"
        },
        {
            id: 3,
            title: "Mastering CSS Grid and Flexbox",
            excerpt: "A comprehensive guide to modern CSS layout techniques and when to use which.",
            date: "Nov 28, 2025",
            readTime: "12 min read",
            tags: ["CSS", "Web Design"],
            slug: "css-grid-flexbox"
        }
    ];

    return (
        <div className="blog-page">
            <div className="container">
                <Link to="/" className="back-btn">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Link>

                <div className="blog-header">
                    <h1>Tech Notes</h1>
                    <p>Thoughts, tutorials, and snippets about web development.</p>
                </div>

                <div className="blog-grid">
                    {posts.map(post => (
                        <div key={post.id} className="blog-card">
                            <div className="post-meta">
                                <span><FontAwesomeIcon icon={faCalendarAlt} /> {post.date}</span>
                                <span><FontAwesomeIcon icon={faClock} /> {post.readTime}</span>
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <div className="tags">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                            <Link to={`/blog/${post.slug}`} className="read-more">Read Article &rarr;</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
