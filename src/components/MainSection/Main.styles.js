import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;

export const Boxes = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 30px 0 25px;

  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 600px) {
    justify-content: space-between;
  }

  @media (max-width: 320px) {
    flex-wrap: wrap;
  }
`;
export const Box = styled.li`
  @media (max-width: 320px) {
    width: calc(50% - 10px);
  }
`;
export const Button = styled.button`
  width: 148px;
  height: 57px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  padding: 18px 21px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#eff6ff" : "transparent")};
  &:focus {
    background: #eff6ff;
    border: none;
  }

  @media (max-width: 600px) {
    padding: 15px 20px;
    width: 120px;
    height: 50px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 10px 20px;
    width: 100%;
  }
`;
