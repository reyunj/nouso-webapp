import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Mastering B2B Lead Generation for Business Growth",
    href: "/post/mastering-b2b-lead-generation-for-business-growth",
  },
  {
    title: "Boost Your Business with Expert B2B Lead Generation Services",
    href: "/post/boost-your-business-with-expert-b2b-lead-generation-services",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a2233]">Insights and Strategies</h1>
        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-700">
          Discover expert advice on sales pipeline management and strategies for success. Learn how to enhance your sales pipeline management now.
        </p>
      </header>
      <section className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.href} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-[#294243]">
              <Link href={post.href} className="hover:underline hover:text-[#1a2233]">
                {post.title}
              </Link>
            </h2>
            <Link href={post.href} className="text-[#294243] underline hover:text-[#1a2233] text-sm">
              Read More
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
