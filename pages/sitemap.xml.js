import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
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

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
export default Sitemap;
