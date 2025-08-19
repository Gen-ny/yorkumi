import React from 'react';
import { useParams } from 'react-router';



const posts = [
  {
    id: 1,
    title: 'How to Learn React in 2024',
    slug: 'learn-react-2024',
    excerpt: 'A comprehensive guide for beginners to start their React journey...',
    content: 'This is the full content of the first blog post. It covers setting up your environment, core concepts, and best practices.  We will walk you through building your first app from scratch.'
  },
  {
    id: 2,
    title: 'Top 5 JavaScript Frameworks',
    slug: 'top-5-js-frameworks',
    excerpt: 'Explore the most popular JavaScript frameworks and their use cases...',
    content: 'This post dives into frameworks like Vue, Angular, Svelte, and more. We will discuss their pros, cons, and when to use each one to build robust applications. '
  },
  {
    id: 3,
    title: 'CSS Grid vs. Flexbox: A Detailed Comparison',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'Deciding between CSS Grid and Flexbox? This article helps you choose...',
    content: 'This detailed comparison highlights the strengths of each layout method. We will provide practical examples and use cases for both CSS Grid and Flexbox.'
  },
  {
    id: 4,
    title: 'CSS Grid vs. Grid: A Detailed Comparison',
    slug: 'css-grid-vs-grid',
    excerpt: 'Deciding between CSS Grid and Grid? This article helps you choose...',
    content: 'This detailed comparison highlights the strengths of each layout method. We will provide practical examples and use cases for both CSS Grid and Grid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit architecto aliquam odit corporis perspiciatis, vitae est earum iusto sunt officiis eum nam illo? Sed at quaerat quo ullam dolores.'
  }
];

const SinglePost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className="single-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;