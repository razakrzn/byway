import React from "react";
import {
  Container,
  TopSection,
  LeftImage,
  RightContent,
  Title,
  Paragraph,
  LinkButton,
  BottomSection,
  LeftContent,
  RightImage,
  Image,
  ButtonIcon,
} from "./CallToActionSection.styles";

function CallToActionSection() {
  return (
    <div>
      <Container>
        <TopSection>
          <LeftImage>
            <Image src={require("../../assets/images/model-4.jpg")} alt="#" />
          </LeftImage>
          <RightContent>
            <Title>Become an Instructor</Title>
            <Paragraph>
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </Paragraph>
            <LinkButton to="/action">
              Start Your Instructor Journey
              <span>
                <ButtonIcon
                  src={require("../../assets/icons/arrow-right.svg").default}
                  alt="icon"
                />
              </span>
            </LinkButton>
          </RightContent>
        </TopSection>
        <BottomSection>
          <LeftContent>
            <Title>Transform your life through education</Title>
            <Paragraph>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </Paragraph>
            <LinkButton to="/action">
              Checkout Courses
              <span>
                <ButtonIcon
                  src={require("../../assets/icons/arrow-right.svg").default}
                  alt="icon"
                />
              </span>
            </LinkButton>
          </LeftContent>
          <RightImage>
            <Image src={require("../../assets/images/model-6.jpg")} alt="#" />
          </RightImage>
        </BottomSection>
      </Container>
    </div>
  );
}

export default CallToActionSection;
