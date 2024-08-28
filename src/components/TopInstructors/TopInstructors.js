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
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTopInstructors(data.topInstructors);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      <CategoryContainer>
        <HeadinWrapper>
          <Heading>Top Instructors</Heading>
          <SeeAllButton>See All</SeeAllButton>
        </HeadinWrapper>
        <Widgets>
          {topInstructors.map((item) => (
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
        </Widgets>
      </CategoryContainer>
    </>
  );
}

export default TopInstructors;
