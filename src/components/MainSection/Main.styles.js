import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;

export const Boxes = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 30px 0 25px;
`;
export const Box = styled.li``;
export const Button = styled.button`
  width: 148px;
  height: 57px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  padding: 18px, 21px, 18px, 21px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#eff6ff" : "transparent")};
  &:focus {
    background: #eff6ff;
    border: none;
  }
`;
