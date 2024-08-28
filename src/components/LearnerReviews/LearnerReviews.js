import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Title,
  Wrapper,
  LeftWrapper,
  Topline,
  StarIcon,
  SpanText,
  ReviewsText,
  StarPyramid,
  Starts,
  StarText,
  RightSection,
  RightWrapper,
  UserProfile,
  ProfilePic,
  Image,
  Name,
  Contents,
  Top,
  Date,
  Paragraph,
  Icon,
  Button,
} from "./LearnerReviews.style";
import StarRating from "../StarRating/StarRating";

function LearnerReviews() {
  const [courseDetails, setCourseDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const coursesId = Number(id);
        const filteredCourse = data.topCourses.find(
          (course) => course.id === coursesId
        );
        if (filteredCourse) {
          setCourseDetails(filteredCourse);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [id]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Title>Learner Reviews</Title>
        <Wrapper>
          <LeftWrapper>
            <Topline>
              <StarIcon>
                <Icon
                  src={require("../../assets/icons/star.svg").default}
                  alt="star"
                />
              </StarIcon>
              <SpanText>{courseDetails.rating}</SpanText>
              <ReviewsText>
                {courseDetails.leanersTotalReviews} reviews
              </ReviewsText>
            </Topline>
            <StarPyramid>
              <Starts>
                <StarRating />
              </Starts>
              <StarText></StarText>
            </StarPyramid>
          </LeftWrapper>
          <RightSection>
            {courseDetails.leanerReviews.map((item) => (
              <RightWrapper>
                <UserProfile>
                  <ProfilePic>
                    <Image src={item.LeanerImage} alt="User Profile" />
                  </ProfilePic>
                  <Name>{item.leanerName}</Name>
                </UserProfile>
                <Contents>
                  <Top>
                    <StarIcon style={{ width: "17px", marginRight: "5px" }}>
                      <Icon
                        src={
                          require("../../assets/icons/Small-star.svg").default
                        }
                        alt="star"
                      />
                    </StarIcon>
                    <StarText>{item.rating}</StarText>
                    <Date>{item.reviewedDate}</Date>
                  </Top>
                  <Paragraph>{item.review}</Paragraph>
                </Contents>
              </RightWrapper>
            ))}

            <Button>View more Reviews</Button>
          </RightSection>
        </Wrapper>
      </Container>
    </>
  );
}

export default LearnerReviews;
