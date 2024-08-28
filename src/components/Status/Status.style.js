import styled from "styled-components";

export const StatusContainer = styled.div`
  background: #f8fafc;
`;
export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0px;
  max-width: 1280px;
`;
export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Item = styled.div`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    width: 55px;
    height: 0; /* Adjust as needed */
    border-bottom: 4px solid #e2e8f0;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(204%) rotate(-90deg);
  }
`;
export const Number = styled.h3`
  margin-bottom: 8px;
  color: #0f172a;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 41.6px;
`;
export const Info = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;
