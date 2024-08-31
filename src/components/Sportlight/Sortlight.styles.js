import styled from "styled-components";

export const SportlighContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 80px;

  @media (max-width: 980px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 30px 0 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 0 30px;
  }
`;

export const TextWrapper = styled.div`
  width: 592px;

  @media (max-width: 980px) {
    width: 100%;
  }
`;
export const Heading = styled.h1`
  color: #0f172a;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  width: 483px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    width: 280px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
    line-height: inherit;
  }
`;
export const Paragraph = styled.p`
  color: #334155;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: 320px) {
    line-height: 16px;
    font-size: 10px;
  }
`;
export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  line-height: 22.4px;

  height: 48px;
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: 320px) {
    display: block;
    text-align: center;
    line-height: inherit;
    width: 125px;
    margin: 0 auto 15px;
  }
`;
export const RightImageSection = styled.div``;
export const ImageWrapper = styled.div`
  width: 590px;

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    max-width: 350px;
    width: 100%;
  }
`;
export const Images = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
