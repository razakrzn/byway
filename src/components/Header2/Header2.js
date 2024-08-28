import React from "react";
import {
  HeaderContainer,
  LogoWrapper,
  LogoLink,
  Logo,
  AccountContainer,
  Navlink,
  CartIcon,
  Border,
  AccountPannel,
} from "./Header2.style";

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
        <AccountContainer>
          <Navlink>
            <CartIcon
              src={require("../../assets/icons/wishlist.svg").default}
              alt="Cart"
            />
          </Navlink>
          <Navlink>
            <CartIcon
              src={require("../../assets/icons/cart.svg").default}
              alt="Cart"
            />
          </Navlink>
          <Navlink>
            <CartIcon
              src={require("../../assets/icons/bell.svg").default}
              alt="Cart"
            />
          </Navlink>
          <Navlink>
            <AccountPannel>J</AccountPannel>
          </Navlink>
        </AccountContainer>
      </HeaderContainer>
      <Border />
    </>
  );
}

export default Header;
