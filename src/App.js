import React, { useState } from "react";
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

const Footer = styled.div`
  min-height: 355px;

  background: #123321;
  color: #ffffff;
`;

const InputBox = styled.div`
  margin: 30px;

  label {
    margin-right: 10px;
  }
`;

const cards = [
  { id: 1, title: "企鵝說他不會說話" },
  { id: 2, title: "貓喜歡跟狗睡覺" },
  { id: 3, title: "老虎吃熊掌，實在好吃耶" },
  { id: 4, title: "鯨魚把海豚咬死喂鯊魚" },
  { id: 5, title: "玉蜀黍脫光變成慾叔叔" },
  { id: 11, title: "企鵝說他不會說話-2" },
  { id: 12, title: "貓喜歡跟狗睡覺-2" },
  { id: 13, title: "老虎吃熊掌，實在好吃耶-2" },
  { id: 14, title: "鯨魚把海豚咬死喂鯊魚-2" },
  { id: 15, title: "玉蜀黍脫光變成慾叔叔-2" },
];

const App = () => {
  const [selectedAnchorLink, setAnchorLink, Anchor] = useAnchor(
    cards,
    cards[0].id
  );

  const [cardHeight, setCardHeight] = useState(300);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [anchorOffset, setAnchorOffset] = useState(0);

  return (
    <>
      <Container>
        <Left>
          <Anchor />
        </Left>
        <Right>
          <CardsContainer
            cards={cards}
            selectedAnchorLink={selectedAnchorLink}
            setAnchorLink={setAnchorLink}
            cardHeight={cardHeight}
            scrollOffset={scrollOffset}
            anchorOffset={anchorOffset}
          />
        </Right>
      </Container>
      <Footer>
        <InputBox>
          <label htmlFor="card-height">卡片高度</label>
          <input
            id="card-height"
            value={cardHeight}
            onChange={(e) => setCardHeight(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <label htmlFor="scroll-offset">滑動 Offset</label>
          <input
            id="scroll-offset"
            value={scrollOffset}
            onChange={(e) => setScrollOffset(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <label htmlFor="anchor-offset">錨點 Offset</label>
          <input
            id="anchor-offset"
            value={anchorOffset}
            onChange={(e) => setAnchorOffset(e.target.value)}
          />
        </InputBox>
      </Footer>
    </>
  );
};

export default App;
