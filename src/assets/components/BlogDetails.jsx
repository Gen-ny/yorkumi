// // BlogDetails.jsx
// import { useParams, Link } from "react-router-dom";
// import blog1 from "../images/blog1.jpeg";
// import blog2 from "../images/blog2.jpg";
// import blog3 from "../images/blog3.webp";
// import blog4 from "../images/blog4.jpeg";

// const blogs = [
//   {
//     id: 1,
//     title: "Decode Your Skin",
//     date: "April 25, 2025",
//     image: blog1,
//     content: "Here’s the full blog content for Decode Your Skin..."
//   },
//   {
//     id: 2,
//     title: "The Transformative Magic of Body Scrubs",
//     date: "March 23, 2025",
//     image: blog2,
//     content: "Here’s the full blog content for Body Scrubs..."
//   },
//   {
//     id: 3,
//     title: "HAPPY NEW YEAR",
//     date: "January 26, 2025",
//     image: blog3,
//     content: "Here’s the full blog content for HAPPY NEW YEAR..."
//   },
//   {
//     id: 4,
//     title: "Acne Eating you Up",
//     date: "February 24, 2025",
//     image: blog4,
//     content: "Here’s the full blog content for Acne Eating you Up..."
//   }
// ];

// export default function BlogDetails() {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b.id === Number(id));

//   if (!blog) {
//     return <div className="p-6 text-red-500">Blog not found!</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-xl" />
//       <h1 className="mt-6 text-3xl font-bold text-[#1b5059]">{blog.title}</h1>
//       <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
//       <p className="mt-6 text-lg text-gray-700">{blog.content}</p>

//       <Link to="/" className="mt-6 inline-block text-[#ec8733] hover:underline">
//         ← Back to Blogs
//       </Link>
//     </div>
//   );
// }
