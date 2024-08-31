import styled from "styled-components";

export const Container = styled.div`
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
`;
export const Wrapper = styled.div`
  width: 65%;
  padding: 30px 0 23px;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h4`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Table = styled.div`
  width: 95%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  border-top: none;
  padding: 24px;
  &:first-child {
    border-top: 1px solid #e2e8f0;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
export const FirstColomn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const IconSpan = styled.span`
  width: 12px;
`;
export const Icon = styled.img`
  width: 100%;
  display: block;
`;
export const SubTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const SecondColumn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 1280px) {
    // width: 100%;
  }
`;
export const Lessons = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
export const Hour = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
