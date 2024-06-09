import Head from "next/head";
import defaultImage from "@/Assets/aetherPantheon.png";
const SEO = ({ title, description, keyword }) => {
  const defaultDescription =
    "Unleash the power of AI-Driven technology and automations to produce, distribute and analyze content faster and easier than ever before. Designed to trend and personalized to you.";
  const defaultTitle = "Aether Pantheon";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {/* all keyword related to page */}
      {keyword && <meta name="keywords" content={keyword} />}
      {/* Add Open Graph meta tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImage?.src} />
      <script src="https://assets.adobedtm.com/6196ef54ab10/23bf6855542d/launch-8b619e00e62a-development.min.js" async></script>
    </Head>
  );
};

export default SEO;
