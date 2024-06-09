import Section_8 from "@/components/home/Section_8";
import Header from "@/components/home/Header";
import React from "react";
import ContactUsForm from "@/components/ContactUsForm";
import SEO from "@/components/SEO";

const index = () => {
  return (
    <div className="homePage">
      {/* this components is for seo only */}
      <SEO
        title={"Contact Us - Aether Pantheon"}
        description={
          "Get in touch with Aether Pantheon. Reach out for inquiries, collaborations, or support. We're here to assist you with our AI-driven solutions."
        }
      />
      <Header />
      <div className="main-content">
        <ContactUsForm />
      </div>

      <Section_8 />
    </div>
  );
};

export default index;
