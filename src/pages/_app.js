import "@/styles/global.scss";
import "@/styles/home/section1.scss";
import "@/styles/home/section2.scss";
import "@/styles/home/header.scss";
import "@/styles/home/banner.scss";
import "@/styles/home/section3.scss";
import "@/styles/home/section4.scss";
import "@/styles/home/section5.scss";
import "@/styles/home/section6.scss";
import "@/styles/home/section7.scss";
import "@/styles/home/section8.scss";
import "@/styles/cookie/cookie.scss";
import "@/styles/privacy_policy/privacy_policy.scss";
import "@/styles/contactUs/contact.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aether Pantheon</title>
        <link rel="icon" href="/logo.png" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://assets.adobedtm.com/6196ef54ab10/23bf6855542d/launch-8b619e00e62a-development.min.js" async></script>
      </Head>
      <div className="app-container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
