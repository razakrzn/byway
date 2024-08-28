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
import { useParams } from "react-router-dom";
function Syllabus() {
  const [courseDetails, setCourseDetails] = useState(null); // Initialize with null
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
