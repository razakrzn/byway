import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;
export const TopSection = styled.div`
  padding: 60px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(90% - 0px);
  margin: 0 auto;

  @media (max-width: 980px) {
    width: 100%;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 0 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 0 15px;
    gap: 25px;
    flex-direction: column;
  }
`;
export const LeftImage = styled.div`
  width: 400px;

  @media (max-width: 980px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 280px;
  }

  @media (max-width: 600px) {
    width: 220px;
  }
`;
export const RightContent = styled.div`
  width: 549px;

  @media (max-width: 980px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;
export const Title = styled.h4`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const LinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  background: #020617;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px 16px 12px 16px;

    .icon-container {
      width: 15px;
    }
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 10px 16px 10px 16px;
  }
`;

export const BottomSection = styled.div`
  padding: 30px 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(90% - 0px);
  margin: 0 auto;

  @media (max-width: 980px) {
    width: 100%;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 20px 0 40px;
  }

  @media (max-width: 480px) {
    padding: 15px 0 30px;
    gap: 25px;
    flex-direction: column-reverse;
  }
`;
export const LeftContent = styled.div`
  width: 511px;

  @media (max-width: 980px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;
export const RightImage = styled.div`
  width: 471px;

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 271px;
  }
`;
export const Image = styled.img`
  width: 100%;
  display: block;
`;
export const ButtonIcon = styled.img`
  width: 100%;
  display: block;
`;
