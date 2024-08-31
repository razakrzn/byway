import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Name,
  Profession,
  ProfileContainer,
  ProfilePic,
  Image,
  DetailsContainer,
  Points,
  Ponit,
  IconSpan,
  Icon,
  Text,
  Paragraph,
} from "./Instructor.styles";
import { useCourseDetails } from "../../Hooks/useCourseDetails";

function Instructor() {
  const courseDetails = useCourseDetails();

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Instructor</Title>
          <Name>{courseDetails.instructor}</Name>
          <Profession>{courseDetails.instructorProfession}</Profession>
          <ProfileContainer>
            <ProfilePic>
              <Image
                src={courseDetails.instructorImage}
                alt="User profile image"
              />
            </ProfilePic>
            <DetailsContainer>
              <Points>
                <Ponit>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/achive.svg").default}
                      alt="Revies icon"
                    />
                  </IconSpan>
                  <Text>{courseDetails.reviews} Reviews</Text>
                </Ponit>
                <Ponit>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/cap.svg").default}
                      alt="Students icon"
                    />
                  </IconSpan>
                  <Text>{courseDetails.students} Students</Text>
                </Ponit>
                <Ponit>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/play.svg").default}
                      alt="Courses icon"
                    />
                  </IconSpan>
                  <Text>{courseDetails.courses} Courses</Text>
                </Ponit>
              </Points>
            </DetailsContainer>
          </ProfileContainer>
          <Paragraph>{courseDetails.aboutInstructor}</Paragraph>
        </Wrapper>
      </Container>
    </>
  );
}

export default Instructor;
