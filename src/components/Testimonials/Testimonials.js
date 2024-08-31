import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Background,
  Container,
  HeadingWrapper,
  Heading,
  ButtonContainer,
  PrevButton,
  NextButton,
  ButtonIcon,
  Card,
  QuoteIcon,
  Icon,
  Paragraph,
  UserImage,
  Image,
  UserProfile,
  Name,
  Profession,
  UserWrapper,
} from "./Testimonials.styles";
function Testimonials() {
  const sliderRef = useRef(null);

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          speed: 400,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.testimonials);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      <Background>
        <Container>
          <HeadingWrapper>
            <Heading>What Our Customer Say About Us</Heading>
            <ButtonContainer>
              <PrevButton onClick={() => sliderRef.current.slickPrev()}>
                <ButtonIcon
                  src={
                    require("../../assets/icons/short-arrow-left.svg").default
                  }
                  alt="Arrow-left"
                />
              </PrevButton>
              <NextButton onClick={() => sliderRef.current.slickNext()}>
                <ButtonIcon
                  src={
                    require("../../assets/icons/short-arrow-right.svg").default
                  }
                  alt="Arrow-right"
                />
              </NextButton>
            </ButtonContainer>
          </HeadingWrapper>
          <Slider ref={sliderRef} {...settings1}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <QuoteIcon>
                  <Icon
                    src={require("../../assets/icons/quotes.svg").default}
                    alt="quote-icon"
                  />
                </QuoteIcon>
                <Paragraph>"{testimonial.description}"</Paragraph>
                <UserWrapper>
                  <UserImage>
                    <Image
                      src={testimonial.userImage}
                      alt={testimonial.userName}
                    />
                  </UserImage>
                  <UserProfile>
                    <Name>{testimonial.userName}</Name>
                    <Profession>{testimonial.userProfession}</Profession>
                  </UserProfile>
                </UserWrapper>
              </Card>
            ))}
          </Slider>
        </Container>
      </Background>
    </>
  );
}

export default Testimonials;
