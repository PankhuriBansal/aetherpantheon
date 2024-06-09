import Section_8 from "@/components/home/Section_8";
import Header from "@/components/home/Header";
import React from "react";
import CollapseCard from "@/components/CollapseCard";
import SEO from "@/components/SEO";

const index = () => {
  const descriptionText =
    "You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use our website for your personal, non-commercial use, subject to these Terms and Conditions. You agree not to use our website for any unlawful or prohibited purpose, or in any way that may harm or violate the rights of others.";
  const privacyData = [
    { id: 1, heading: "Use of our website", description: descriptionText },
    {
      id: 2,
      heading: "Intellectual Property Rights",
      description: descriptionText,
    },
    { id: 3, heading: "User-Generated Content", description: descriptionText },
    { id: 4, heading: "Third-Party Websites", description: descriptionText },
    {
      id: 5,
      heading: "Disclaimer of Warranties",
      description: descriptionText,
    },
    { id: 6, heading: "Limitation of Liability", description: descriptionText },
    { id: 7, heading: "Indemnification", description: descriptionText },
    {
      id: 8,
      heading: "Governing Law and Jurisdiction",
      description: descriptionText,
    },
    {
      id: 9,
      heading: "Changes to These Terms and Conditions",
      description: descriptionText,
    },
    { id: 10, heading: "Termination", description: descriptionText },
    { id: 11, heading: "Severability", description: descriptionText },
    { id: 12, heading: "Waiver", description: descriptionText },
  ];
  return (
    <div className="homePage">
      {/* this components is for seo only */}
      <SEO
        title={"Privacy & Policy - Aether Pantheon"}
        description={
          "Learn about the privacy policies at Aether Pantheon. Understand how we handle your data and ensure a secure and transparent experience."
        }
      />
      <Header />
      <div className="main-content">
        <h1 className="main-heading text-center">Privacy and Policy</h1>
        <p className="update-date text-center">Updated on 20/12/2023</p>
        <p className="normal-text text-center">
          Welcome to the Aether Pantheon: Temple of Stars. Please read these
          Terms and Conditions carefully before using our website and services.
          By accessing or using our website, you agree to be bound by these
          Terms and Conditions. If you do not agree with any part of these Terms
          and Conditions, you should not use our website or services.
        </p>
        {/* all Collapse cards */}
        {privacyData?.map((e) => (
          <CollapseCard
            key={e?.id}
            heading={e?.heading}
            description={e?.description}
            // opend={true}
          />
        ))}
      </div>
      <Section_8 />
    </div>
  );
};

export default index;
