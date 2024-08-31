import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Table,
  Row,
  FirstColomn,
  IconSpan,
  Icon,
  SubTitle,
  SecondColumn,
  Lessons,
  Hour,
} from "./Syllabus.styles";
import { useCourseDetails } from "../../Hooks/useCourseDetails";

function Syllabus() {
  const courseDetails = useCourseDetails();

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Syllabus</Title>
          <Table>
            {courseDetails.syllabus.map((item, index) => (
              <Row key={index}>
                <FirstColomn>
                  <IconSpan>
                    <Icon
                      src={require("../../assets/icons/arrow-down.svg").default}
                      alt="Arrow icon"
                    />
                  </IconSpan>
                  <SubTitle>{item.title}</SubTitle>
                </FirstColomn>
                <SecondColumn>
                  <Lessons>{item.lessons} Lessons</Lessons>
                  <Hour>{item.duration}</Hour>
                </SecondColumn>
              </Row>
            ))}
          </Table>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Syllabus;
