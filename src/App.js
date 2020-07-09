import React from "react";
import styled from "styled-components";
import CardsContainer from "./CardsContainer";
import useAnchor from "./useAnchor";

// utils

// assets

// actions

// components

// self-defined-components
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 100px;
`;

const Left = styled.div`
  width: 30%;
`;

const Right = styled.div`
  width: 60%;
`;

const cards = [
  { id: 1, title: "企鵝說他不會說話" },
  { id: 2, title: "貓喜歡跟狗睡覺" },
  { id: 3, title: "老虎吃熊掌，實在好吃耶" },
  { id: 4, title: "鯨魚把海豚咬死喂鯊魚" },
  { id: 5, title: "玉蜀黍脫光變成慾叔叔" },
];

const App = () => {
  const [selectedAnchorLink, setAnchorLink, Anchor] = useAnchor(
    cards,
    cards[0].id
  );
  return (
    <Container>
      <Left>
        <Anchor />
      </Left>
      <Right>
        <CardsContainer
          cards={cards}
          selectedAnchorLink={selectedAnchorLink}
          setAnchorLink={setAnchorLink}
        />
      </Right>
    </Container>
  );
};

export default App;
