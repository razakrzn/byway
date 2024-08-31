import { Link } from "react-router-dom";
import styled from "styled-components";

export const Background = styled.div`
  padding: 70px 0 60px;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;
export const Heading = styled.h3`
  width: 308px;
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;

  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    width: 200px;
    line-height: 26px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    line-height: inherit;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 600px) {
    gap: 15px;
  }
`;
export const PrevButton = styled.button`
  background: #94a3b8;
  width: 56px;
  height: 40px;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px 16px 8px 16px;
    width: 100%;
    height: 100%;
  }
`;
export const NextButton = styled.button`
  background: #94a3b8;
  width: 56px;
  height: 40px;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px 16px 8px 16px;
    width: 100%;
    height: 100%;
  }
`;
export const ButtonIcon = styled.img``;
export const Slider = styled.div``;
export const Card = styled(Link)`
  text-decoration: none;
  background: #ffffff;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 0px 8px 0px #3b82f61f;
`;
export const QuoteIcon = styled.span`
  display: block;
  width: 35px;
  margin: 5px 0 20px;
`;
export const Icon = styled.img`
  width: 100%;
  display: block;
`;
export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #000000;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;
export const UserWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
export const UserImage = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #94a3b8;
  overflow: hidden;
`;
export const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
export const UserProfile = styled.span`
  margin-left: 6px;
`;
export const Name = styled.h5`
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Profession = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
