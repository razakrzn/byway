import styled from "styled-components";

export const Container = styled.div`
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
`;
export const Wrapper = styled.div`
  width: 65%;
  padding: 30px 0;
  border-bottom: 1px solid #e2e8f0;
`;
export const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 18px;
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
export const IconSpan = styled.span``;
export const Icon = styled.img``;
export const SubTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;
export const SecondColumn = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Lessons = styled.p``;
export const Hour = styled.p``;
