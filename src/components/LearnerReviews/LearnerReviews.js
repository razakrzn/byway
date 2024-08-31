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
  StarPyramidContainer,
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
import { useCourseDetails } from "../../Hooks/useCourseDetails";
import StarPyramid from "../StarPyramid/StarPyramid";

function LearnerReviews() {
  const courseDetails = useCourseDetails();

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
            <StarPyramidContainer>
              <StarPyramid />
            </StarPyramidContainer>
          </LeftWrapper>
          <RightSection>
            {courseDetails.leanerReviews.map((item, index) => (
              <RightWrapper key={index}>
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
