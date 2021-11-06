import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

const AllPosts = ({ posts }) => {
  return (
    <Layout>
      <div className="space-y-10">
        <h4 className="text-3xl font-bold">All Posts</h4>
        <div className="space-y-2">
          {posts.map((post) => (
            <div className="md:w-4/5" key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
              >
                <a>
                  <h5 className="md:text-xl text-lg font-bold hover:text-teal">
                    {post.data.title}
                  </h5>
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
};

export default AllPosts;

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
