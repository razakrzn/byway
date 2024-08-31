import { Link } from "react-router-dom";
import styled from "styled-components";

export const CourseContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;
export const HeadinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;
export const Heading = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  text-align: left;
  color: #0f172a;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const Widgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    gap: 25px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;
export const Card = styled(Link)`
  width: calc(20% - -8px);
  text-decoration: none;
  display: inline-block;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 0px 8px 0px #3b82f61f;

  @media (max-width: 980px) {
    flex: 1 1 calc(30% - 16px);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
  @media (max-width: 320px) {
    flex-basis: 100%;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 139px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 90px;
  }

  @media (max-width: 320px) {
    height: 139px;
  }
`;
export const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;
export const Subheading = styled.h4`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #0f172a;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 26.8px;
    font-weight: 700;
  }

  @media (max-width: 320px) {
    font-size: 16px;
    margin: 8px 0 0;
  }
`;
export const Lecture = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

export const RatingStar = styled.span`
  display: inline-flex;
  align-items: center;
  width: 20px;
  height: 20px;
`;
export const StarIcon = styled.img`
  width: 100%;
  display: block;
`;
export const Label = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: left;
  color: #334155;
  margin-left: 10px;

  @media (max-width: 480px) {
    margin-left: 5px;
    font-weight: 500;
  }
`;
export const TimeDuration = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  margin: 8px 0;

  @media (max-width: 768px) {
    margin: 4px 0 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
export const Price = styled.h4`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #0f172a;

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
    text-align: center;
  }
`;
