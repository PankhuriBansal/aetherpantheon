import React, { useEffect, useState } from "react";
import Header from "@/components/home/Header";
import Section_1 from "@/components/home/Section_1";
import Section_2 from "@/components/home/Section_2";
import Section_3 from "@/components/home/Section_3";
import Section_4 from "@/components/home/Section_4";
import Section_5 from "@/components/home/Section_5";
import Section_6 from "@/components/home/Section_6";
import Section_7 from "@/components/home/Section_7";
import Section_8 from "@/components/home/Section_8";
import Banner from "@/components/home/Banner";
import Section_311 from "@/components/home/Section_311";
import CookieComponent from "@/components/CookieComponent";
import SEO from "@/components/SEO";
import defaultImage from "@/Assets/aetherPantheon.png";
export default function Home() {
  const [acceptCookie, setAcceptCookie] = useState(false);
  useEffect(() => {
    const localStorageCookie = JSON.parse(
      localStorage.getItem("aether-cookie")
    );
    setAcceptCookie(localStorageCookie);
  }, []);
  const handleClick = () => {
    setAcceptCookie(true);
    localStorage.setItem("aether-cookie", JSON.stringify(true)); //setting cookie permission in
  };
  return (
    <div className="homePage">
      {/* SEO component */}
      <SEO
        keyword="Automatically convert video to real audio,
Automatically translate videos,
Match mouth to audio,
Caption generator,
Hashtag generator,
Thumbnail generator,
Lipsync video to audio,
Post to multiple social media from one place"
      />
      {/* component to ask cookies permession */}
      <div className="coockie-main">
        {!acceptCookie ? <CookieComponent handleClick={handleClick} /> : ""}
      </div>

      <Header />
      <Section_1 />
      <Banner />
      <Section_2 />
      <Section_3 />
      <Section_311 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
    </div>
  );
}
