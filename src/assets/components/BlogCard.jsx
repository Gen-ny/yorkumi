import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({ post }) => {
  return (
    <section className="blog-card max-w-7xl mx-auto px-6 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="mt-2 text-lg font-bold text-[#1b5059]">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                 to={`/blog/${post.slug}`}
                  className="text-sm text-[#ec8733] font-semibold hover:underline"
                >
                  Read More →
                </Link>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
    </section>
  );
};

export default BlogCard;

