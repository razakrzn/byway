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
`;
export const LeftImage = styled.div`
  width: 400px;
  height: 425px;
`;
export const RightContent = styled.div`
  width: 549px;
`;
export const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  margin: 15px 0;
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
  line-height: 22.4px;
  text-align: left;
`;

export const BottomSection = styled.div`
  padding: 30px 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(90% - 0px);
  margin: 0 auto;
`;
export const LeftContent = styled.div`
  width: 511px;
  height: 154px;
`;
export const RightImage = styled.div`
  width: 471.5px;
  height: 385px;
`;
export const Image = styled.img`
  width: 100%;
  display: block;
`;
export const ButtonIcon = styled.img`
  width: 100%;
  display: block;
`;
