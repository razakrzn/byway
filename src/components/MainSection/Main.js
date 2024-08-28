import React, { useState } from "react";
import CourseDescription from "../../components/CourseDescription/CourseDescription";
import Instructor from "../../components/Instructor/Instructor";
import Syllabus from "../../components/Syllabus/Syllabus";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import { Container, Boxes, Box, Button } from "./Main.styles";

function Main() {
  const [activeComponent, setActiveComponent] = useState("Description");

  const components = {
    Description: <CourseDescription />,
    Instructor: <Instructor />,
    Syllabus: <Syllabus />,
    LearnerReviews: <LearnerReviews />,
  };

  const renderComponents = () => {
    const orderedComponents = [];
    // Push the active component to the top
    orderedComponents.push(components[activeComponent]);

    // Push the other components in the original order
    Object.keys(components).forEach((key) => {
      if (key !== activeComponent) {
        orderedComponents.push(components[key]);
      }
    });

    return orderedComponents;
  };

  return (
    <Container>
      <Boxes>
        <Box>
          <Button
            style={{
              background:
                activeComponent === "Description" ? "#eff6ff" : "transparent",
            }}
            onClick={() => setActiveComponent("Description")}
          >
            Description
          </Button>
        </Box>
        <Box>
          <Button onClick={() => setActiveComponent("Instructor")}>
            Instructor
          </Button>
        </Box>
        <Box>
          <Button onClick={() => setActiveComponent("Syllabus")}>
            Syllabus
          </Button>
        </Box>
        <Box>
          <Button
            style={{
              background:
                activeComponent === "LearnerReviews"
                  ? "#eff6ff"
                  : "transparent",
            }}
            onClick={() => setActiveComponent("LearnerReviews")}
          >
            Reviews
          </Button>
        </Box>
      </Boxes>
      <div>
        {renderComponents().map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    </Container>
  );
}

export default Main;
