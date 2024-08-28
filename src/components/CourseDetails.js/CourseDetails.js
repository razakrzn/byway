import React from "react";
import TopCategories from "../TopCategories/TopCategories";
import { Container } from "./CourseDetails.styles";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructors from "../TopInstructors/TopInstructors";
function CourseDetails() {
  return (
    <>
      <Container>
        <TopCategories />
        <TopCourses />
        <TopInstructors />
      </Container>
    </>
  );
}

export default CourseDetails;
