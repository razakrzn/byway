import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  width: 65%;
  padding: 30px 0 23px;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
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

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;
export const Table = styled.div`
  width: 95%;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 320px) {
    padding: 10px;
  }
`;
export const FirstColomn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 320px) {
    gap: 10px;
  }
`;
export const IconSpan = styled.span`
  width: 12px;

  @media (max-width: 480px) {
    width: 11px;
  }

  @media (max-width: 320px) {
    width: 12px;
  }
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

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
    width: 150px;
  }
`;
export const SecondColumn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 320px) {
    gap: 10px;
  }
`;
export const Lessons = styled.p`
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
export const Hour = styled.p`
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
