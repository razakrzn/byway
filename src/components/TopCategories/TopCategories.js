import React, { useEffect, useState } from "react";
import {
  CategoryContainer,
  HeadinWrapper,
  Heading,
  SeeAllButton,
  Widgets,
  Card,
  IconBackround,
  Icon,
  Subheading,
  Info,
} from "./TopCategories.style";

function TopCategories() {
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTopCategories(data.topCategories);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <div>
      <CategoryContainer>
        <HeadinWrapper>
          <Heading>Top Categories</Heading>
          <SeeAllButton>See All</SeeAllButton>
        </HeadinWrapper>
        <Widgets>
          {topCategories.map((category) => (
            <Card key={category.id}>
              <IconBackround>
                <Icon>
                  <img
                    style={{ width: "100%", display: "block" }}
                    src={category.icon}
                    alt="Icon"
                  />
                </Icon>
              </IconBackround>
              <Subheading>{category.categoryName}</Subheading>
              <Info>{category.coursesIncluded} Courses</Info>
            </Card>
          ))}
        </Widgets>
      </CategoryContainer>
    </div>
  );
}

export default TopCategories;
