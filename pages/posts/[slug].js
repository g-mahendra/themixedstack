import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import Layout from "../../components/Layout";
import PostHeader from "../../components/PostHeader";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const components = {
  BlogNavigation: dynamic(() => import("../../components/BlogNavigation")),
  BlogNextImage: dynamic(() => import("../../components/BlogNextImage")),
  CustomLink: dynamic(() => import("../../components/CustomLink")),
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout
      headData={{
        title: frontMatter.title,
        description: frontMatter.description,
        image: frontMatter.image ? frontMatter.image : "",
        imageAlt: frontMatter.imageAlt ? frontMatter.imageAlt : "",
        postedOn: new Date(frontMatter.date).toISOString(),
        modifiedOn: new Date(frontMatter.modifiedOn).toISOString(),
        tags: frontMatter.tags,
      }}
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <PostHeader title={frontMatter.title} date={frontMatter.date} />
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
