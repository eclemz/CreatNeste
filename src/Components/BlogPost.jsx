import React from "react";
import { useEffect, useState } from "react";
import { sanityClient } from "../Sanity/client";
import { blogPostQuery } from "../Sanity/queries";
import { BsDot } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { getImageUrl } from "../Sanity/image";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";

function BlogPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(blogPostQuery)
      .then(setPosts)
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return (
    <section className="flex md:grid md:grid-cols-2 xl:grid-cols-3 flex-col items-start content-start  self-stretch md:gap-x-5 lg:gap-x-8 gap-y-12">
      {posts.map((post) => (
        <article
          key={post._id}
          className="flex flex-col flex-1 items-start self-stretch rounded-2xl border border-[#EAECF0]"
        >
          <picture className="self-stretch">
            <img
              src={getImageUrl(post.coverImage).width(800).url()}
              className="rounded-t-2xl h-72 md:h-96 w-full object-cover bg-no-repeat"
            />
          </picture>
          <div className="flex flex-col items-start self-stretch gap-6 pt-5 pb-6 px-2 md:py-6 md:px-4">
            <div className="flex flex-col items-start self-stretch gap-2">
              <span className="flex self-stretch text-sm font-medium text-[#6B479E] leading-5">
                {post.author}
                <BsDot className="self-center" />
                {format(new Date(post.date), "dd MMM yyyy")}
              </span>
              <div className="flex items-start justify-between self-stretch gap-4">
                <h2 className="text-xl lg:text-2xl font-medium text-[#101828] leading-8 whitespace-pre-line">
                  {post.title}
                </h2>

                <a
                  href={post.externalUrl}
                  className="flex items-start p-1 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiArrowUpRight className="h-6 w-6" />
                </a>
              </div>

              <div className="line-clamp-2 text-sm md:text-base text-[#475467] leading-5">
                <PortableText value={post.content} />
              </div>
            </div>
            <div className="flex items-start content-start flex-wrap gap-2 self-stretch">
              {post.categories?.map((category) => (
                <span
                  key={category._id}
                  style={{
                    backgroundColor: category.bgColor,
                    border: `1px solid ${category.borderColor}`,
                    color: category.textColor || "#000",
                  }}
                  className="text-xs font-medium px-2 py-1 md:px-[0.625rem] rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default BlogPost;
