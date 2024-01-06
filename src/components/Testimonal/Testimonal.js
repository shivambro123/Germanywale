import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "./../../styles/Testimonalcss.css";
// import { FaBeer, FaChevronLeft } from "react-icons/fa";
import anthonyreedy from "./../../assests/testimonal/anthonygrouped.svg";
function Success() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotelCards = [
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //   title: "Deluxe Room",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori",
    //   pricingText: "USD 80/Day",
    //   features: ["Free Wifi", "Free breakfast"],
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    //   title: "Studio Room",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori",
    //   pricingText: "USD 50/Day",
    //   features: ["Free Wifi", "Free breakfast"],
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    //   title: "Studio Room",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori",
    //   pricingText: "USD 50/Day",
    //   features: ["Free Wifi", "Free breakfast"],
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    //   title: "Studio Room",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori",
    //   pricingText: "USD 50/Day",
    //   features: ["Free Wifi", "Free breakfast"],
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    //   title: "Studio Room",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori",
    //   pricingText: "USD 50/Day",
    //   features: ["Free Wifi", "Free breakfast"],
    // },
  ];

  return (
    <>
      <section id="second">
        <Container>
          <div className="text-left">
            <h3 className="text-4xl font-bold mb-2 overflow-hidden">
              What our student speak
            </h3>
          </div>
          <div className="h-full min-w-full">
            <div className="mb-4 flex justify-end md:mr-20 mr-2">
              <button
                onClick={sliderRef?.slickPrev}
                className="bg-orange-500 p-3 rounded-full text-white hover:text-black"
              >
                <FaChevronLeft className="text__20" />
              </button>
              <button
                onClick={sliderRef?.slickNext}
                className="bg-orange-500 p-3 rounded-full text-white hover:text-black ml-3"
              >
                <FaChevronRight className="text__20" />
              </button>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {hotelCards.map((card, index) => (
                <div key={index}>
                  <div className="testimonal">
                    {/* <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="h-full rounded-xl w-full object-fill md:w-4/5"
                    /> */}
                    hiii hell
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}
export default Success;
