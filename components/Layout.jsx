import React, { useState } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_NAME, SITE_URL } from "../utils/constants";
import { useTheme } from "next-themes";

const Layout = ({ children, headData }) => {
  const { pathname } = useRouter();
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <Head>
        <title>{headData.title}</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={`${headData.description}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GhargeMahendra" />
        <meta name="twitter:creator" content="@GhargeMahendra" />
        <meta name="twitter:title" content={headData.title} />
        <meta name="twitter:description" content={headData.description} />
        <meta property="og:title" content={`${headData.title}`} />
        <meta property="og:description" content={`${headData.description}`} />
        <meta property="og:image" content={`${SITE_URL}${headData.image}`} />
        <meta name="twitter:image" content={`${SITE_URL}${headData.image}`} />
        <meta property="og:image:alt" content={`${headData.imageAlt}`} />
        <meta property="og:image:width" content="1366" />
        <meta property="og:image:height" content="768" />
        <meta name="author" content="g-mahendra" />{" "}
        <meta property="og:locale" content="en-us" />
        <meta property="og:site_name" content={`${SITE_NAME}`} />
        {pathname === "/" ? (
          <>
            <meta property="og:url" content={`${SITE_URL}`} />
            <link rel="canonical" href={`${SITE_URL}`} />
          </>
        ) : (
          <>
            <meta property="og:url" content={`${SITE_URL}/${pathname}`} />
            <link rel="canonical" href={`${SITE_URL}/${pathname}`} />
          </>
        )}
        {theme === "light" ? (
          <meta name="theme-color" content="#212225" />
        ) : (
          <meta name="theme-color" content="#ffffff" />
        )}
        {pathname.includes("posts") ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {headData.postedOn && (
          <>
            <meta
              property="article:published_time"
              content={`${headData.postedOn}`}
            />
            <meta
              property="article:modified_time"
              content={`${headData.modifiedOn}`}
            />
          </>
        )}
        <meta
          property="article:author"
          content="https://themixedstack.com/about"
        />
        {headData.tags &&
          headData.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
      </Head>
      <Navbar />
      {/* <main className="md:w-3/5 m-auto px-4 pb-10">{children}</main> */}
      <main className="flex flex-col justify-center px-8">{children}</main>
    </React.Fragment>
  );
};
export default Layout;
