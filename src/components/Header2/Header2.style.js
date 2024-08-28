import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoWrapper = styled.div``;
export const LogoLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #334155;
`;
export const Logo = styled.img`
  width: 100%;
  display: block;
`;
export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
export const Navlink = styled(Link)``;
export const CartIcon = styled.img`
  width: 100%;
  display: block;
`;
export const AccountPannel = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  background: #334155;
  padding: 15px;
  border-radius: 50%;
  color: #fff;
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #e2e8f0;
`;
