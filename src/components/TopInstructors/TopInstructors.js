import React, { useEffect, useState } from "react";
import {
  CategoryContainer,
  HeadinWrapper,
  Heading,
  SeeAllButton,
  Widgets,
  Card,
  ImageWrapper,
  Image,
  Name,
  Proffesion,
  RatingStar,
  StarIcon,
  Label,
  Subscription,
  Line,
  RatingWrapper,
} from "./TopInstructors.styles";

function TopInstructors() {
  const [isSeeAllClicked, setIsSeeAllClicked] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTopInstructors(data.topInstructors);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 980);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSeeAllClick = () => {
    setIsSeeAllClicked(!isSeeAllClicked);
  };

  return (
    <>
      <CategoryContainer>
        <HeadinWrapper>
          <Heading>Top Instructors</Heading>
          <SeeAllButton onClick={handleSeeAllClick}>
            {isSeeAllClicked ? "Show Less" : "See All"}
          </SeeAllButton>
        </HeadinWrapper>
        <Widgets>
          {topInstructors.slice(0, 4).map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image src={item.image} alt={item.name} />
              </ImageWrapper>
              <Name>{item.name}</Name>
              <Proffesion>{item.proffesion}</Proffesion>
              <Line />
              <RatingWrapper>
                <RatingStar>
                  <StarIcon src={item.icon} alt="star" />
                  <Label>{item.rating}</Label>
                </RatingStar>
                <Subscription>{item.subscription} Students</Subscription>
              </RatingWrapper>
            </Card>
          ))}

          {(isSeeAllClicked || !isMobileView) && topInstructors[4] && (
            <Card key={topInstructors[4].id}>
              <ImageWrapper>
                <Image
                  src={topInstructors[4].image}
                  alt={topInstructors[4].name}
                />
              </ImageWrapper>
              <Name>{topInstructors[4].name}</Name>
              <Proffesion>{topInstructors[4].proffesion}</Proffesion>
              <Line />
              <RatingWrapper>
                <RatingStar>
                  <StarIcon src={topInstructors[4].icon} alt="star" />
                  <Label>{topInstructors[4].rating}</Label>
                </RatingStar>
                <Subscription>
                  {topInstructors[4].subscription} Students
                </Subscription>
              </RatingWrapper>
            </Card>
          )}
        </Widgets>
      </CategoryContainer>
    </>
  );
}

export default TopInstructors;
