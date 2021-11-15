import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import Image from "next/image";

export default function Index({ posts }) {
  return (
    <Layout
      headData={{
        title: "The Mixed Stack Blog | g-mahendra",
        description: `This is a blog where the author g-mahendra shares some of his
        learnings so far about javascript, ReactJS, NextJS etc so that
        everyone can benifit from his learnings`,
        image: "/icons/mixed_stack_logo.svg",
        imageAlt: "The Mixed Stack website logo",
        postedOn: null,
        modifiedOn: null,
        tags: null
      }}
    >
      <div className="space-y-10 flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:w-3/4 space-y-1">
            <h1 className="md:text-4xl text-3xl font-bold tracking-tight">
              The Mixed Stack Blog | g-mahendra
            </h1>
            <p className="md:text-lg text-base tracking-tight">
              This is a blog where the author g-mahendra shares some of his
              learnings so far about javascript, ReactJS, NextJS etc so that
              everyone can benifit from his learnings
            </p>
          </div>
          <div className="w-1/4 flex flex-row items-center justify-center">
            <Image
              alt="website logo"
              src="/icons/mixed_stack_logo.svg"
              height={125}
              width={125}
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div className="md:w-4/5" key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
              >
                <a>
                  <h3 className="md:text-xl text-lg font-bold hover:text-teal dark:hover:text-lightTeal hover:underline tracking-tight">
                    {post.data.title}
                  </h3>
                  <h4 className="md:text-lg">{post.data.description}</h4>
                </a>
              </Link>
              <p className="font-extralight text-sm tracking-tight">
                Posted on: {post.data.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
