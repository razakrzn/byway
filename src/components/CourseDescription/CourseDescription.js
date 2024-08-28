import React, { useEffect, useState } from "react";
import {
  Container,
  TextWrapper,
  TopSection,
  BottomSection,
  Title,
  Paraghraph,
} from "./CourseDescription.styles";
import { useParams } from "react-router-dom";
function CourseDescription() {
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
