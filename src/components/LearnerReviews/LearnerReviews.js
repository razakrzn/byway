import React from "react";
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
  StarIcons,
  StarText,
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
} from "./LearnerReviews.style";
function LearnerReviews() {
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
              <SpanText>4.6</SpanText>
              <ReviewsText>146,951 reviews</ReviewsText>
            </Topline>
            <StarPyramid>
              <Starts>
                <StarIcons>
                  <Icon
                    src={require("../../assets/icons/star.svg").default}
                    alt="star"
                  />
                </StarIcons>
                <StarIcons>
                  <Icon
                    src={require("../../assets/icons/star.svg").default}
                    alt="star"
                  />
                </StarIcons>
                <StarIcons>
                  <Icon
                    src={require("../../assets/icons/star.svg").default}
                    alt="star"
                  />
                </StarIcons>
                <StarIcons>
                  <Icon
                    src={require("../../assets/icons/star.svg").default}
                    alt="star"
                  />
                </StarIcons>
                <StarIcons>
                  <Icon
                    src={require("../../assets/icons/star.svg").default}
                    alt="star"
                  />
                </StarIcons>
              </Starts>
              <StarText>5 out of 5</StarText>
            </StarPyramid>
          </LeftWrapper>
          <RightWrapper>
            <UserProfile>
              <ProfilePic>
                <Image
                  src={require("../../assets/icons/span-6.svg").default}
                  alt="User Profile"
                />
              </ProfilePic>
              <Name>John Doe</Name>
            </UserProfile>
            <Contents>
              <Top>
                <StarIcon style={{ marginRight: 5 }}>
                  <Icon
                    src={require("../../assets/icons/star.svg").default}
                    alt="star"
                  />
                </StarIcon>
                <StarText
                  style={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  5
                </StarText>
                <Date>Reviewed on 22nd March, 2024</Date>
              </Top>
              <Paragraph>
                I was initially apprehensive, having no prior design experience.
                But the instructor, John Doe, did an amazing job of breaking
                down complex concepts into easily digestible modules. The video
                lectures were engaging, and the real-world examples really
                helped solidify my understanding.
              </Paragraph>
            </Contents>
          </RightWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default LearnerReviews;
