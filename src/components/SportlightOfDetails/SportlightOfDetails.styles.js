import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Bg = styled.div`
  background: #f8fafc;
`;
export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 40px 0 30px;
  position: relative;

  @media (max-width: 980px) {
    display: flex;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const NavContainer = styled.div`
  margin-bottom: 50px;

  @media (max-width: 980px) {
    flex-basis: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
  }
`;
export const List = styled.li``;
export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #334155;
  &:last-child {
    color: #2563eb;
  }
`;
export const Arrow = styled.span`
  display: inline-block;
  width: 6px;
  margin-left: 20px;
`;
export const Icon = styled.img`
  width: 100%;
  display: block;
`;

export const Contents = styled.div`
  width: 60%;

  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const Paragraph = styled.p`
  width: 90%;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.6px;
    margin: 15px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
`;
export const Rating = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #fec84b;
  margin-right: 8px;
`;
export const Star = styled.span`
  margin-right: 4px;
`;
export const StarIcon = styled.img`
  display: inline-flex;
  align-items: center;
`;
export const RatingCounts = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
  }
`;
export const Duration = styled.span`
  border-left: 1px solid #000;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 300;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
  }
`;
export const FounderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;
export const Founder = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
export const FounderPic = styled.img`
  display: block;
  width: 100%;
`;
export const SmallText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const LanguageIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

export const Languages = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  text-align: left;
`;
export const PurchaseDetailsBox = styled.div`
  box-shadow: 0px 0px 8px 0px #3b82f61f;
  background: #ffffff;
  width: 400px;
  border-radius: 16px;
  position: absolute;
  right: 0;
  top: 26px;

  @media (max-width: 980px) {
    position: static;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 23px;
  border-bottom: 1.5px solid #e2e8f0;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 980px) {
    height: 167px;
  }

  @media (max-width: 768px) {
  }
`;
export const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;
export const PriceSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 0 0 25px;
  }
`;

export const SpecialPrice = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
export const OldRate = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: rgba(148, 163, 184, 0.5);
`;
export const Offer = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #16a34a;
`;

export const CartButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 48px;
  background: #020617;
  padding: 10px 24px 10px 24px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  border: none;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const BuyButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  text-decoration: none;
  padding: 10px 24px 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #020617;
  color: #0f172a;
  text-align: center;
  box-sizing: border-box;
`;
export const MediaSection = styled.div`
  padding: 25px 20px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;
export const SubTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;
export const MeadiaIcons = styled.ul`
  margin-top: 12px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const IconList = styled.li``;
export const IconLink = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 8px;
  border-radius: 50%;
  border: 4px solid rgba(226, 232, 240, 0.5);
`;
