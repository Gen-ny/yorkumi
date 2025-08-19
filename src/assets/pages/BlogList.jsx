import React from 'react';
import BlogCard from '../components/BlogCard';
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.webp";
import blog4 from "../images/blog4.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Why from "../components/Why";


const posts = [
  {
    id: 1,
    image: blog1,
    title: 'How to Learn React in 2024',
    slug: 'learn-react-2024',
    excerpt: 'A comprehensive guide for beginners to start their React journey...',
    content: 'This is the full content of the first blog post. It covers setting up your environment, core concepts, and best practices.  We will walk you through building your first app from scratch.'
  },
  {
    id: 2,
    image: blog2,
    title: 'Top 5 JavaScript Frameworks',
    slug: 'top-5-js-frameworks',
    excerpt: 'Explore the most popular JavaScript frameworks and their use cases...',
    content: 'This post dives into frameworks like Vue, Angular, Svelte, and more. We will discuss their pros, cons, and when to use each one to build robust applications. '
  },
  {
    id: 3,
    image: blog3,
    title: 'CSS Grid vs. Flexbox: A Detailed Comparison',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'Deciding between CSS Grid and Flexbox? This article helps you choose...',
    content: 'This detailed comparison highlights the strengths of each layout method. We will provide practical examples and use cases for both CSS Grid and Flexbox.'
  },
   {
    id: 4,
    image: blog4,
    title: 'CSS Grid vs. Grid: A Detailed Comparison',
    slug: 'css-grid-vs-grid',
    excerpt: 'Deciding between CSS Grid and Grid? This article helps you choose...',
    content: 'This detailed comparison highlights the strengths of each layout method. We will provide practical examples and use cases for both CSS Grid and Grid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit architecto aliquam odit corporis perspiciatis, vitae est earum iusto sunt officiis eum nam illo? Sed at quaerat quo ullam dolores.'
  }
];


const BlogList = () => {
  return (
    <>
      <Navbar />
      <div className="blog-list font-[Montserrat]">
        <section className="bg-[#f9f4f0] py-40 text-center">
        <h1 className="text-4xl font-bold text-[#1b5059]">Yorkumi Blog</h1>
        <p className="text-gray-600 mt-3">Natural beauty tips, product guides & lifestyle inspiration</p>
      </section>
      
        <div className="card-container">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Why />
      <Footer />
    </>
  );
};


export default BlogList;