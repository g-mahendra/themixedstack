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
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content={`${headData.description}`} />
        <meta name="og:title" content={`${headData.title}`} />
        <meta name="og:description" content={`${headData.description}`} />
        <meta name="og:image" content={`${SITE_URL}${headData.image}`} />
        <meta name="og:author" content="g-mahendra" />
        <meta name="og:site" content={`${SITE_NAME}`} />
        {pathname === "/" ? (
          <>
            <meta name="og:url" content={`${SITE_URL}`} />
            <meta name="canonical" content={`${SITE_URL}`} />
          </>
        ) : (
          <>
            <meta name="og:url" content={`${SITE_URL}/${pathname}`} />
            <meta name="canonical" content={`${SITE_URL}/${pathname}`} />
          </>
        )}
        {theme === "light" ? (
          <meta name="theme-color" content="#212225" />
        ) : (
          <meta name="theme-color" content="#ffffff" />
        )}
        <meta name="robots" content="index,follow"></meta>
        <meta name="googlebot" content="index,follow"></meta>
        {pathname.includes("posts") ? (
          <meta name="og:type" content="article"></meta>
        ) : (
          <meta name="og:type" content="website"></meta>
        )}
        <meta property="og:image:alt" content={`${headData.imageAlt}`}></meta>
      </Head>
      <Navbar />
      <main className="md:w-3/5 m-auto px-4 pb-10">{children}</main>
    </React.Fragment>
  );
};
export default Layout;
