import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;
