import React, { useEffect, useState } from "react";
import {
  Container,
  TextWrapper,
  TopSection,
  BottomSection,
  Title,
  Paraghraph,
} from "./CourseDescription.styles";
import { useCourseDetails } from "../../Hooks/useCourseDetails";
function CourseDescription() {
  const courseDetails = useCourseDetails();

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <TextWrapper>
          <TopSection>
            <Title>Course Description</Title>
            <Paraghraph>{courseDetails.description}</Paraghraph>
          </TopSection>
          <BottomSection>
            <Title>Certification</Title>
            <Paraghraph>{courseDetails.certification}</Paraghraph>
          </BottomSection>
        </TextWrapper>
      </Container>
    </>
  );
}

export default CourseDescription;
