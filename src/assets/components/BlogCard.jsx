import React from "react";
import { Link } from "react-router"; 
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.webp";
import blog4 from "../images/blog4.jpeg";

export default function BlogList({ posts = [
  {
      id: 1,
      image: blog1,
      title: 'Decode Your Skin',
      slug: 'decode-your-skin',
      excerpt: 'A Simple Guide to Understanding Your Skin Type (Natural Skincare Edition)...',
      content: 'Welcome to the world of natural skincare! Understanding your skin type is the cornerstone of creating a personalized, effective routine. Forget the one-size-fits-all approach; your skin is unique, and treating it right starts with knowing its specific needs. This guide, crafted by your friendly natural skincare cosmetologist, will demystify skin types and empower you to achieve your healthiest, most radiant complexion. The four main skin types are normal, oily, dry, and combination. Each type has its own characteristics and requires different care strategies. By identifying your skin type, you can choose products and treatments that will work best for you. How to determine your skin type? Start by observing how your skin behaves throughout the day. Is it oily in the T-zone but dry on the cheeks? Do you experience redness or irritation? Taking note of these factors will help you pinpoint your skin type and tailor your routine accordingly. Natural ingredients for every skin type include aloe vera for soothing, tea tree oil for acne-prone skin, and hyaluronic acid for hydration. Why choose natural skincare? Because it respects your skin’s natural balance and promotes long-term health over quick fixes.'
    },
    {
      id: 2,
      image: blog2,
      title: 'The Transformative Magic of Body Scrubs',
      slug: 'the-transformative-magic-of-body-scrubs',
      excerpt: 'Body scrubs can work wonders for your skin. Discover their benefits...',
          content: 'Alright, darling, let’s talk about the transformative magic of body scrubs! As someone who’s spent years coaxing radiant skin from nature’s bounty, I can tell you, a good scrub is the cornerstone of truly glowing, healthy skin. It’s not just a pampering ritual; it’s a vital step in your skincare journey. The exfoliation elixir of body scrubs helps to slough off dead skin cells, revealing the fresh, vibrant skin underneath. Not only do they improve your skin’s texture, but they also enhance circulation and promote a healthy glow. So, if you’re not already incorporating body scrubs into your routine, now is the time to start! Types of body scrubs include sugar scrubs, salt scrubs, and coffee scrubs, each with its own unique benefits. Sugar scrubs are gentle and hydrating, salt scrubs provide deep exfoliation, and coffee scrubs can help reduce the appearance of cellulite. Whichever type you choose, make sure to follow up with a nourishing body lotion to lock in moisture and keep your skin feeling soft and smooth. The benefits of body scrubs extend beyond just aesthetics; they can also be a form of self-care, allowing you to take a moment for yourself and indulge in a little luxury. So go ahead, treat yourself to a body scrub and experience the magic for yourself! Skin types and suitability vary, so choose a scrub that complements your skin’s needs. For sensitive skin, opt for a gentle sugar scrub; for oily skin, a salt scrub can help balance oil production. Remember, the key is to listen to your skin and adjust your routine accordingly. How to use body scrubs? Start with dry skin for maximum exfoliation, then apply the scrub in circular motions, focusing on rough areas. Rinse thoroughly and follow up with a moisturizer to keep your skin hydrated and happy. Why Choose Yorkumi body scrubs? Because they are crafted with love and care, using only the finest natural ingredients that respect your skin’s delicate balance. Our scrubs are designed to nourish, exfoliate, and rejuvenate your skin, leaving you feeling refreshed and radiant. So go ahead, indulge in the transformative magic of body scrubs and let your skin shine! Our promise is to provide you with the best natural skincare products that not only enhance your beauty but also promote your overall well-being. Remember, your skin deserves the best, and with Yorkumi, you can achieve that effortlessly.'
    },
    {
      id: 3,
      image: blog3,
      title: 'HAPPY NEW YEAR !!!',
      slug: 'happy-new-year',
      excerpt: 'Celebrate the New Year with a fresh start for your skin...',
      content: 'It’s been 15 days of the new year already – that went by very quickly and I am wondering how it is going for you. Are you sticking to your resolutions? Have you started any new projects? I’d love to hear about your journey so far! I want to bring light to the importance of self-care and how it can positively impact your skin and overall well-being. Let’s make this year the best one yet! This Year, let’s prioritize self-care and embrace the journey to healthier skin together! Happy prosperous New Year to you all! May this year bring you joy, love, and of course, beautiful skin. Remember, self-care is not selfish; it’s essential for your mental and physical health. So take a moment for yourself, indulge in a little pampering, and let your skin glow with happiness!'
    },
    {
      id: 4,
      image: blog4,
      title: 'Acne Eating you Up',
      slug: 'acne-eating-you-up',
      excerpt: 'Understanding acne and how to treat it naturally...',
      content: 'Imagine your skin has tiny little holes called pores. Each pore has a little factory inside it that makes oil (called sebum). This oil is good because it keeps your skin moist. But sometimes, these factories can get clogged with dirt, dead skin, and extra oil. When this happens, it can cause a bump on your skin called acne. It’s like when your toy gets stuck because there’s too much stuff in it! In essence, acne is a very common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. And bacteria can make the inflammation worse. It’s not just a teenage problem; people of all ages can experience acne. The good news is that there are many natural ways to treat and prevent it, focusing on gentle, effective methods that respect your skin’s natural balance. Understanding your skin and its needs is the first step towards achieving a clear, healthy complexion. Diet and lifestyle play crucial roles in managing acne, so let’s explore some holistic approaches to keep your skin happy and healthy. Things to avoid include harsh chemicals, excessive scrubbing, and neglecting your skin’s hydration needs. Routine care and attention can make all the difference in maintaining your skin’s health and vitality.'
    }
] }) {
  const safePosts = Array.isArray(posts) ? posts.slice(0, 4) : [];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 !grid-flow-row">
        {safePosts.map((post) => (
          <article
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
                  className="text-sm text-[#ec8733] font-semibold hover:text-[#cc630e] transition"
                >
                  Read More →
                </Link>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}