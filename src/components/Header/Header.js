import React from "react";
import {
  HeaderContainer,
  LogoWrapper,
  LogoLink,
  Logo,
  LoginContainer,
  CartLink,
  CartIcon,
  LoginLink,
  SignupLink,
  Border,
} from "./Header.styles";

function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <LogoLink to="/">
            <Logo
              src={require("../../assets/icons/logo.svg").default}
              alt="Logo"
            />
            Byway
          </LogoLink>
        </LogoWrapper>
        <LoginContainer>
          <CartLink>
            <CartIcon
              src={require("../../assets/icons/cart.svg").default}
              alt="Cart"
            />
          </CartLink>
          <LoginLink to="/">Log In</LoginLink>
          <SignupLink to="/">Sign Up</SignupLink>
        </LoginContainer>
      </HeaderContainer>
      <Border />
    </>
  );
}

export default Header;
