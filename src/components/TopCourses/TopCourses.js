import React, { useEffect, useState } from "react";

import {
  CourseContainer,
  HeadinWrapper,
  Heading,
  SeeAllButton,
  Widgets,
  Card,
  ImageWrapper,
  Image,
  Subheading,
  Lecture,
  RatingStar,
  Label,
  TimeDuration,
  Price,
} from "./TopCourses.styles";
import StarRating from "../StarRating/StarRating";

function TopCourses() {
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCourseDetails(data.topCourses);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <>
      <CourseContainer>
        <HeadinWrapper>
          <Heading>Top Courses</Heading>
          <SeeAllButton>See All</SeeAllButton>
        </HeadinWrapper>
        <Widgets>
          {courseDetails.map((item) => (
            <Card key={item.id} to={`/details/${item.id}`}>
              <ImageWrapper>
                <Image src={item.image} alt="image" />
              </ImageWrapper>
              <Subheading>{item.subject}</Subheading>
              <Lecture>{item.instructor}</Lecture>
              <RatingStar>
                <StarRating rating={item.rating} />
                <Label>({item.ratingCounts})</Label>
              </RatingStar>
              <TimeDuration>{item.duration}</TimeDuration>
              <Price>${item.offerRate}</Price>
            </Card>
          ))}
        </Widgets>
      </CourseContainer>
    </>
  );
}

export default TopCourses;
