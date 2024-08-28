import React, { useEffect, useState } from "react";
import {
  CourseContainer,
  HeadinWrapper,
  Heading,
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
} from "./MoreCourses.styles";

import StarRating from "../StarRating/StarRating";

function MoreCourses() {
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
          <Heading>More Courses Like This</Heading>
        </HeadinWrapper>
        <Widgets>
          {courseDetails.map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image src={item.image} alt="image" />
              </ImageWrapper>
              <Subheading>{item.courseName}</Subheading>
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

export default MoreCourses;
