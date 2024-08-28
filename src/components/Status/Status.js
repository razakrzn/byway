import React from "react";
import {
  StatusContainer,
  Wrapper,
  Items,
  Item,
  Number,
  Info,
} from "./Status.style";

import { useEffect, useState } from "react";

function Status() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      <StatusContainer>
        <Wrapper>
          <Items>
            {status.map((item) => (
              <Item key={item.id}>
                <Number>{item.count}+</Number>
                <Info>{item.info}</Info>
              </Item>
            ))}
          </Items>
        </Wrapper>
      </StatusContainer>
    </>
  );
}

export default Status;
