import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Feed Factors</title>
        <link href="./styles/slider.css" rel="stylesheet" />
        <link href="./styles/globals.css" rel="stylesheet" />
        <link href="./styles/menu.css" rel="stylesheet" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script type="text/javascript" src="./js/scripts.js" />
      <Script type="text/javascript" src="./js/menu.js" />
    </>
  );
}
