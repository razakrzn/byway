import { Link } from "react-router-dom";
import styled from "styled-components";

export const CourseContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
`;
export const HeadinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const Heading = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  text-align: left;
  color: #0f172a;
`;
export const Widgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Card = styled(Link)`
  text-decoration: none;
  padding: 16px;
  border-radius: 16px;
  border: 1px;
  box-shadow: 0px 0px 8px 0px #3b82f61f;
`;
export const ImageWrapper = styled.div`
  width: 266px;
  height: 139px;
  border-radius: 8px;
  overflow: hidden;
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
`;
export const Lecture = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  margin-bottom: 8px;
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
`;
export const TimeDuration = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #334155;
  margin: 8px 0;
`;
export const Price = styled.h4`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #0f172a;
`;
