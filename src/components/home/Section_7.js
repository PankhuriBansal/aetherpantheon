import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Left from "@/Assets/arrowLeft.svg";
import Right from "@/Assets/arrowRight.svg";
import Image from "next/image";
import Raul from "@/Assets/raul.png";
import Raul2 from "@/Assets/raul2.png";
import Raul3 from "@/Assets/raul3.png";
import Raul4 from "@/Assets/raul4.png";
import Raul5 from "@/Assets/raul5.png";

const Section_7 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 325 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <Image
          src={Left}
          className="backBtn"
          onClick={() => {
            previous();
          }}
        />
        <Image
          className="nextBtn"
          src={Right}
          alt="next btn"
          onClick={() => {
            next();
          }}
        />
      </div>
    );
  };

  const sliderImageUrl = [
    // {
    //   image: Raul,
    //   alt: "Raul Image 1",
    //   name: "Carlie Mangie",
    //   content:
    //     "Strava Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......",
    // },

    {
      image: Raul2,
      alt: "Raul2 ",
      name: "Blondiak_Music",
      content:
        "Blondiak Music is a dynamic fusion of indie pop and electronic sounds, crafted by the talented musician and producer, Alex Blondiak. With catchy melodies, infectious beats, and introspective lyrics, Blondiak's music transports listeners on a sonic journey filled with emotion and energy.......",
      instagramFollowers: "1M",
    },

    {
      image: Raul3,
      alt: "Raul3",
      name: "Flow Key",
      content:
        "Flow Key is an innovative platform revolutionizing music learning. With its interactive app, aspiring musicians can master piano effortlessly. From beginner to advanced levels, Flow Key offers personalized lessons, real-time feedback, and an extensive song library...",
      instagramFollowers: "250K",
    },

    {
      image: Raul,
      alt: "Raul1",
      name: "Victor Lunardi",
      content:
        "Victor Lunardi is a visionary entrepreneur known for his innovative ventures and leadership in the tech industry. With a knack for spotting opportunities and driving growth, he has founded and led successful startups, leaving a lasting impact on the business world. Lunardi's dedication..",
      instagramFollowers: "2.2M",
    },
    {
      image: Raul4,
      alt: "Raul4 ",
      name: "Vini07",
      content:
        "Vini07, a rising social media sensation, captivates audiences with his engaging content. From entertaining vlogs to insightful commentary, Vini07 offers a diverse range of content that resonates with viewers worldwide, earning him a dedicated following and admiration.......",
      instagramFollowers: "119K",
    },
    {
      image: Raul5,
      alt: "Raul3",
      name: "BMW KENNY",
      content:
        "BMW Kenny, a prominent figure in the rap scene, dazzles audiences with his electrifying performances and infectious beats. Known for his unique style and lyrical prowess, BMW Kenny continues to push boundaries, solidifying his status as a force to be reckoned with in the music industry.......",
      instagramFollowers: "246K",
    },
  ];

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        customButtonGroup={<ButtonGroup />}
        arrows={true}
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <div className="images-div">
              <div className="image-box">
                <div className="inner-image-box">
                  <span className="name-txt">{imageUrl?.name}</span>
                  <Image
                    className="carousel_img"
                    src={imageUrl?.image}
                    alt={imageUrl?.alt}
                  />
                  <span className="content">{imageUrl?.content}</span>
                  <p className="content">
                    Instagram Followers: {imageUrl.instagramFollowers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Section_7;
