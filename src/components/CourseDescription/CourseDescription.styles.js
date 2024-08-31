import styled from "styled-components";

export const Container = styled.div``;
export const TextWrapper = styled.div`
  width: 65%;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
    gap: 15px;
  }
`;
export const TopSection = styled.div``;
export const BottomSection = styled.div``;

export const Title = styled.h4`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Paraghraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.6px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
