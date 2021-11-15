import React from "react";
import Layout from "../components/Layout";
import { useTheme } from "next-themes";
import Image from "next/image";

const About = () => {
  const { theme } = useTheme();
  const social = [
    {
      id: "0",
      name: "meetmahendra",
      url: "https://stackoverflow.com/users/14189964/g-mahendra",
      icon: `${
        theme === "light" ? "/icons/person.svg" : "/icons/person_white.svg"
      }`,
    },
    {
      id: "1",
      name: "github.com/g-mahendra",
      url: "https://github.com/g-mahendra",
      icon: `${
        theme === "light"
          ? "/icons/github_black.svg"
          : "/icons/github_white.png"
      }`,
    },
    {
      id: "2",
      name: "themixedstack blog",
      url: "/",
      icon: `${
        theme === "light" ? "/icons/blog.svg" : "/icons/blog_white.svg"
      }`,
    },
    {
      id: "3",
      name: "themixedstack",
      url: "https://www.youtube.com/channel/UCsXKBlr3hqp_KcoNZjy1_xQ",
      icon: `${
        theme === "light"
          ? "/icons/youtube_black.svg"
          : "/icons/youtube_white.svg"
      }`,
    },
    {
      id: "4",
      name: "g-mahendra stackoverflow",
      url: "https://stackoverflow.com/users/14189964/g-mahendra",
      icon: `${
        theme === "light"
          ? "/icons/stackoverflow_black.svg"
          : "/icons/stackoverflow_white.png"
      }`,
    },
    {
      id: "5",
      name: "mahendragharge2000",
      url: "mailto:mahendragharge2000@gmail.com",
      icon: `${
        theme === "light" ? "/icons/email_black.svg" : "/icons/email_white.svg"
      }`,
    },
    {
      id: "6",
      name: "mahendra-gharge",
      url: "https://www.linkedin.com/in/mahendra-gharge-14a0b4172/",
      icon: `${
        theme === "light"
          ? "/icons/linkedin_black.svg"
          : "/icons/linkedin_white.png"
      }`,
    },
    {
      id: "7",
      name: "source code for this blog",
      url: "https://github.com/g-mahendra/themixedstack",
      icon: `${
        theme === "light" ? "/icons/code_black.svg" : "/icons/code_white.svg"
      }`,
    },
  ];
  return (
    <Layout
      headData={{
        title: "About the Author and blog",
        description: `The Author ( g-mahendra ) of this blog is an undergraduate student at
      Walchand College of Engineering, Sangli in India. He is passionate
      about web and web frameworks specally REACT ( NextJS ) and tailwind-css wants to share what he
      has learnt till now and what he will learn further with everyone. This
      blog is one the means he uses to share his learnings with thw world`,
        image: "/icons/g-mahendra.svg",
        imageAlt: "An avatar of author of The Mixed Stack blog",
        postedOn: null,
        modifiedOn: null,
        tags: null,
      }}
    >
      <div className="space-y-2 flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col items-center w-max">
          <div className="rounded-full border-teal dark:border-lightTeal border-4 w-max flex flex-col items-center">
            <Image
              alt="Author's picture avatar"
              className="rounded-full"
              src="/icons/g-mahendra.svg"
              height={150}
              width={150}
            />
          </div>
          <p className="text-lg">g-mahendra</p>
        </div>
        <h1 className="md:text-3xl text-2xl font-semibold tracking-tight">
          About the Author and blog
        </h1>
        <p className="md:text-lg tracking-tight">
          The Author ( g-mahendra ) of this blog is an undergraduate student at
          Walchand College of Engineering, Sangli in India. He is passionate
          about web and web frameworks specally{" "}
          <span className="font-bold">REACT ( NextJS )</span> and{" "}
          <span className="font-bold">tailwind-css</span> wants to share what he
          has learnt till now and what he will learn further with everyone. This
          blog is one the means he uses to share his learnings with thw world
        </p>

        <div className="flex md:flex-row flex-col w-full flex-wrap">
          {social.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row items-center space-x-4 my-2 md:mx-auto md:w-1/2"
              >
                <img
                  alt={`${item.name} logo`}
                  src={`${item.icon}`}
                  height={40}
                  width={40}
                />
                <a
                  className="hover:underline hover:text-teal dark:hover:text-lightTeal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${item.url}`}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
