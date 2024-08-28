import React from "react";
import { Container, Boxes, Box, Button } from "./NavButtons.styles";

function NavButtons() {
  return (
    <>
      <Container>
        <Boxes>
          <Box>
            <Button>Description</Button>
          </Box>
          <Box>
            <Button>Instructor</Button>
          </Box>
          <Box>
            <Button>Syllabus</Button>
          </Box>
          <Box>
            <Button>Reviews</Button>
          </Box>
        </Boxes>
      </Container>
    </>
  );
}

export default NavButtons;
