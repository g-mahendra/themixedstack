import fs from "fs";
import prettier from 'prettier';

const Sitemap = () => <div>Bye</div>;

export const getServerSideProps = async ({ res }) => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://mydomain.com",
  }[process.env.NODE_ENV];

  const requiredPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "posts",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return staticPagePath.toString();
    });

  const moreRequiredPages = fs.readdirSync("posts").map((page) => {
    return page.replace(".mdx", "");
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${requiredPages
      .map((url) => {
        url = url === "index.js" ? "" : url;
        url = url.replace(".js", "");
        url = `${baseUrl}/${url}`;
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
      })
      .join("")}
      ${moreRequiredPages
        .map((url) => {
          url = url.replace(".mdx", "");
          url = `${baseUrl}/${url}`;
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
        .join("")}
  </urlset>
`;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);

  return {
    props: {},
  };
};
export default Sitemap;
