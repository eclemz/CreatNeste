import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import BlogFilter from "../Components/BlogFilter";
import BlogPost from "../Components/BlogPost";
import { sanityClient } from "../Sanity/client";
import { useEffect, useState } from "react";
import { latestBlogPostQuery } from "../Sanity/queries";
import { format } from "date-fns";
import { Buttons } from "../Components/Buttons";
import ContactPreview from "../Components/ContactPreview";
import { PortableText } from "next-sanity";

const Blog = () => {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(latestBlogPostQuery).then(setLatestPost);
  }, []);
  return (
    <main className="flex flex-col md:p-10 lg:py-10 lg:px-14 md:gap-6 lg:gap-7 mt-32">
      <section className="flex flex-col self-stretch items-center gap-16 md:gap-8 md:py-0 py-16 ">
        <div className="flex items-start self-stretch md:gap-4 md:px-0 px-4">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-col flex-1 items-start gap-3 md:gap-2">
              <p className="text-sm md:text-base self-stretch font-medium text-[#6B479E] leading-5">
                Our Blog
              </p>
              <h1 className="text-4xl lg:text-5xl font-medium md:font-semibold text-[#101828] leading-[2.75rem] tracking-[-0.017rem] ">
                Resources and insights
              </h1>
            </div>
            <p className="text-sm md:text-lg text-[#475467] md:font-normal font-bold self-stretch ">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-4 md:px-0 gap-12">
        {latestPost && (
          <>
            {/* For mobile */}
            <article className="md:hidden flex flex-col items-start self-stretch gap-12">
              <div className="flex flex-col items-start gap-12 self-stretch">
                <div className="flex flex-col items-start md:justify-center self-stretch gap-5">
                  <img
                    src={latestPost.coverImage}
                    alt=""
                    className="md:hidden self-stretch rounded-2xl h-80 object-cover"
                  />
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    {latestPost.categories?.[0] && (
                      <p className="text-sm md:text-base font-medium text-[#6B479E]">
                        {latestPost.categories[0].title}
                      </p>
                    )}

                    <div className="flex flex-col items-start self-stretch gap-2">
                      <div className="flex items-start gap-4 self-stretch">
                        <h2 className="text-xl md:text-2xl font-medium flex-1 text-[#101828] leading-8 whitespace-pre-line">
                          {latestPost.title}
                        </h2>
                        {latestPost.externalUrl && (
                          <a
                            href={latestPost.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start p-1 "
                          >
                            <FiArrowUpRight className="h-6 w-6" />
                          </a>
                        )}
                      </div>
                      <div className="line-clamp-2 text-sm text-[#475467] self-stretch font-bold leading-4  text-ellipsis">
                        <p className="text-sm text-[#475467] font-bold line-clamp-2">
                          {latestPost.content?.[0]?.children?.[0]?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <picture className="flex justify-center items-center">
                      <img
                        src={latestPost.coverImage}
                        alt=""
                        className="rounded-full border h-10 w-10 flex-1 self-stretch border-gray-500 object-cover"
                      />
                    </picture>
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-[#101828] font-medium">
                        {latestPost.author}
                      </p>
                      <p className="text-sm text-[#101828] font-bold">
                        {format(new Date(latestPost.date), "dd MMM yyyy")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* For Tablet and Desktop */}
            <article
              className="hidden md:flex box-border flex-col items-start lg:min-h-[300px] self-stretch relative lg:py-16 md:py-10 px-5 gap-8 bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden "
              style={{
                backgroundImage: `url(${latestPost.coverImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl" />

              <div className="flex flex-col items-start md:justify-center self-stretch z-10 gap-4">
                <div className="flex flex-col items-start self-stretch gap-2">
                  <div className="flex items-start gap-4 self-stretch md:max-w-[30rem]">
                    <h2 className="md:text-2xl font-medium lg:font-semibold flex-1 text-[#FFF] leading-8 whitespace-pre-line">
                      {latestPost.title}
                    </h2>
                  </div>

                  <div className="text-sm lg:text-base text-[#FFF] font-normal line-clamp-2 md:max-w-[32rem] ">
                    <PortableText value={latestPost.content} />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <picture className="flex justify-center items-center gap-3">
                    <img
                      src={latestPost.coverImage}
                      alt=""
                      className="rounded-full border h-10 w-10 flex-1 self-stretch border-gray-500 object-cover"
                    />
                    <p className="text-sm text-[#FFF] font-medium">
                      {latestPost.author}
                    </p>
                  </picture>

                  <div className="flex flex-row gap-2">
                    <p className="text-sm text-[#FFF] font-bold">
                      Published on
                    </p>
                    <p className="text-sm text-[#FFF] font-bold">
                      {format(new Date(latestPost.date), "dd MMM yyyy")}
                    </p>
                  </div>
                </div>
              </div>
              <Buttons className={`z-10`}>Read more...</Buttons>
            </article>
          </>
        )}
        <BlogFilter />
        <BlogPost />
      </section>
      <ContactPreview className="bg-white" />
    </main>
  );
};

export default Blog;
