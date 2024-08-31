import React from "react";
import {
  Background,
  Container,
  Items,
  Item1,
  Logo,
  Paragraph,
  Items2,
  Ul,
  Li,
  UlTitle,
  TextLink,
  Items3,
  Items4,
  Media,
  Icons,
  Icon,
  MediaLinks,
  Image,
} from "./Footer.styles";
function Footer() {
  return (
    <>
      <Background>
        <Container>
          <Items>
            <Item1 className="item1">
              <Logo to="/">
                <Image
                  src={require("../../assets/icons/logo-big.svg").default}
                  alt="#"
                />
              </Logo>
              <Paragraph>
                Empowering learners through accessible and engaging online
                education. <br /> Byway is a leading online learning platform
                dedicated to providing high-quality, flexible, and affordable
                educational experiences.
              </Paragraph>
            </Item1>

            <Items2 className="item2">
              <Ul>
                <Li>
                  <UlTitle>Get Help</UlTitle>
                </Li>
                <Li>
                  <TextLink to="/">Contact Us</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Latest Articles</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">FAQ</TextLink>
                </Li>
              </Ul>
            </Items2>
            <Items3 className="item3">
              <Ul>
                <Li>
                  <UlTitle>Programs</UlTitle>
                </Li>
                <Li>
                  <TextLink to="/">Art & Design</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Business</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">IT & Software</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Languages</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Programming</TextLink>
                </Li>
              </Ul>
            </Items3>
            <Items4 className="item4">
              <Ul>
                <Li>
                  <UlTitle>Contact Us</UlTitle>
                </Li>
                <Li>
                  <TextLink to="/">
                    Address: 123 Main Street, Anytown, CA 12345
                  </TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Tel: +(123) 456-7890</TextLink>
                </Li>
                <Li>
                  <TextLink to="/">Mail: bywayedu@webkul.in</TextLink>
                </Li>
              </Ul>
              <Media>
                <Icons>
                  <Icon>
                    <MediaLinks
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/icons/facebook.png")}
                        alt="facebook"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/icons/github.png")}
                        alt="github"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/icons/google.png")}
                        alt="google"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/icons/twitter.png")}
                        alt="google"
                      />
                    </MediaLinks>
                  </Icon>
                  <Icon>
                    <MediaLinks
                      href="https://www.microsoft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={require("../../assets/icons/microsoft.png")}
                        alt="microsoft"
                      />
                    </MediaLinks>
                  </Icon>
                </Icons>
              </Media>
            </Items4>
          </Items>
        </Container>
      </Background>
    </>
  );
}

export default Footer;
