import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import Image from "next/image";

export default function Index({ posts }) {
  return (
    <Layout>
      <div className="space-y-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:w-3/4 space-y-1">
            <h1 className="md:text-4xl text-3xl font-bold">The Mixed Stack Blog</h1>
            <p className="md:text-lg text-base">
              This is a blog where the author g-mahendra shares some of his
              learnings so far about javascript, ReactJS, NextJS etc so that
              everyone can benifit from his learnings
            </p>
          </div>
          <div className="w-1/4 flex flex-row items-center justify-center">
            <Image src="/icons/mixed_stack_logo.svg" height={125} width={125} />
          </div>
        </div>
        <h4 className="text-3xl font-bold">Recent Posts</h4>
        <div className="space-y-2">
          {posts.map((post) => (
            <div className="md:w-4/5" key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
              >
                <a>
                  <h5 className="md:text-xl text-lg font-bold hover:text-teal">{post.data.title}</h5>
                  <h6 className="md:text-lg">{post.data.description}</h6>
                </a>
              </Link>
              <p className="font-extralight text-sm">
                Posted on: {post.data.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
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
