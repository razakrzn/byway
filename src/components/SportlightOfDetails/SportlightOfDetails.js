import React from "react";
import {
  Bg,
  Container,
  NavContainer,
  Ul,
  List,
  Navlink,
  Arrow,
  Icon,
  Contents,
  Heading,
  Paragraph,
  InfoWrapper,
  Rating,
  Star,
  RatingCounts,
  Duration,
  FounderWrapper,
  Founder,
  FounderPic,
  SmallText,
  LanguageWrapper,
  LanguageIcon,
  Languages,
  PurchaseDetailsBox,
  TopSection,
  ImageWrapper,
  Image,
  PriceSection,
  SpecialPrice,
  OldRate,
  Offer,
  CartButton,
  BuyButton,
  MediaSection,
  SubTitle,
  MeadiaIcons,
  IconList,
  IconLink,
} from "./SportlightOfDetails.styles";
import SmallStarRating from "../SmallStarRating/SmallStarRating";
import { useCourseDetails } from "../../Hooks/useCourseDetails";

function SportlightOfDetails() {
  const courseDetails = useCourseDetails();

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Bg>
      <Container key={courseDetails.id}>
        <div>
          <NavContainer>
            <Ul>
              <List>
                <Navlink to="/">Home</Navlink>
                <Arrow>
                  <Icon
                    src={
                      require("../../assets/icons/short-arrow-right-black.svg")
                        .default
                    }
                    alt="arrow-right"
                  />
                </Arrow>
              </List>
              <List>
                <Navlink to="/">{courseDetails.category}</Navlink>
                <Arrow>
                  <Icon
                    src={
                      require("../../assets/icons/short-arrow-right-black.svg")
                        .default
                    }
                    alt="arrow-right"
                  />
                </Arrow>
              </List>
              <List>
                <Navlink to={`/details/${courseDetails.id}`}>
                  {courseDetails.subject}
                </Navlink>
              </List>
            </Ul>
          </NavContainer>
          <Contents>
            <Heading>{courseDetails.title}</Heading>
            <Paragraph>{courseDetails.description}</Paragraph>
            <InfoWrapper>
              <Rating>{courseDetails.rating}</Rating>
              <Star>
                <SmallStarRating rating={5} />
              </Star>
              <RatingCounts>({courseDetails.ratingCounts} rating)</RatingCounts>
              <Duration>{courseDetails.duration}</Duration>
            </InfoWrapper>
            <FounderWrapper>
              <Founder>
                <FounderPic
                  src={courseDetails.instructorImage}
                  alt="Founder Pic"
                />
              </Founder>
              <SmallText>
                Created by{" "}
                <span style={{ color: " #2563EB" }}>
                  {courseDetails.instructor}
                </span>
              </SmallText>
            </FounderWrapper>
            <LanguageWrapper>
              <LanguageIcon>
                <Icon
                  src={require("../../assets/icons/language.svg").default}
                  alt="worldwide"
                />
              </LanguageIcon>
              <Languages>{courseDetails.language}</Languages>
            </LanguageWrapper>
          </Contents>
        </div>
        <PurchaseDetailsBox>
          <TopSection>
            <ImageWrapper>
              <Image src={courseDetails.image2} alt="Image" />
            </ImageWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <PriceSection>
                <SpecialPrice>${courseDetails.offerRate}</SpecialPrice>
                <OldRate style={{ textDecoration: "line-through" }}>
                  ${courseDetails.oldRate}
                </OldRate>
                <Offer>{courseDetails.offer}% Off</Offer>
              </PriceSection>
              <CartButton>Add To Cart</CartButton>
              <BuyButton>Buy Now</BuyButton>
            </div>
          </TopSection>
          <MediaSection>
            <SubTitle>Share</SubTitle>
            <MeadiaIcons>
              <IconList>
                <IconLink
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/icons/facebook.png")}
                    alt="facebook"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/icons/github.png")}
                    alt="twitter"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/icons/google.png")}
                    alt="linkedin"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/icons/twitter.png")}
                    alt="linkedin"
                  />
                </IconLink>
              </IconList>
              <IconList>
                <IconLink
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={require("../../assets/icons/microsoft.png")}
                    alt="linkedin"
                  />
                </IconLink>
              </IconList>
            </MeadiaIcons>
          </MediaSection>
        </PurchaseDetailsBox>
      </Container>
    </Bg>
  );
}

export default SportlightOfDetails;
