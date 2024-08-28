import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryContainer = styled.div``;
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
export const SeeAllButton = styled.button`
  background: transparent;
  border: none;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #3b82f6;
`;
export const Widgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 93px 24px 93px;
  border-radius: 16px;
  border: 1px;
  box-shadow: 0px 0px 8px 0px #3b82f61f;
`;
export const IconBackround = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #e0f2fe;
`;
export const Icon = styled.div``;
export const Subheading = styled.h4`
  color: #0f172a;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  margin: 8px 0;
`;
export const Info = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: center;
  color: #334155;
`;
