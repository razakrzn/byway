import React from "react";
import {
  SportlighContainer,
  TextWrapper,
  Heading,
  Paragraph,
  Button,
  RightImageSection,
  ImageWrapper,
  Images,
} from "./Sortlight.styles";

function Sortlight() {
  return (
    <>
      <SportlighContainer>
        <TextWrapper>
          <Heading>Unlock Your Potential with Byway</Heading>
          <Paragraph>
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success.
          </Paragraph>
          <Button>Start your instructor journey</Button>
        </TextWrapper>
        <RightImageSection>
          <ImageWrapper>
            <Images
              src={require("../../assets/images/image-1.jpeg")}
              alt="Sortlight"
            />
          </ImageWrapper>
        </RightImageSection>
      </SportlighContainer>
    </>
  );
}

export default Sortlight;
