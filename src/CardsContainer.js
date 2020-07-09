import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

// utils

// assets

// actions

// components

// self-defined-components
const Container = styled.div``;
const Card = styled.div`
  min-height: ${(props) => `${props.cardHeight}px`};

  margin: 32px;
  padding: 32px;

  border: 1px solid #000000;
  border-radius: 5px;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: -3px 6px 5px 0px #94aaa0;
  }
`;

const CardContainer = ({
  id,
  title,
  scrollY,
  selectedAnchorLink,
  setAnchorLink,
  cardHeight,
  scrollOffset,
}) => {
  const el = useRef(null);

  useEffect(() => {
    if (
      el &&
      scrollY > el.current.offsetTop - scrollOffset &&
      scrollY < el.current.offsetTop + el.current.offsetHeight - scrollOffset
    ) {
      if (selectedAnchorLink !== id) {
        setAnchorLink(id);
      }
    }
  }, [scrollY, id, title, selectedAnchorLink, setAnchorLink, scrollOffset]);

  return (
    <Card id={`card-${id}`} ref={el} cardHeight={cardHeight}>
      {title}
    </Card>
  );
};

const CardsContainer = ({
  cards,
  selectedAnchorLink,
  setAnchorLink,
  cardHeight,
  scrollOffset,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollYChange = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollYChange);

    return () => {
      window.removeEventListener("scroll", handleScrollYChange);
    };
  }, []);

  return (
    <Container>
      {cards.map(({ id, title }) => (
        <CardContainer
          key={`card-${id}`}
          id={id}
          title={title}
          scrollY={scrollY}
          selectedAnchorLink={selectedAnchorLink}
          setAnchorLink={setAnchorLink}
          cardHeight={cardHeight}
          scrollOffset={scrollOffset}
        />
      ))}
    </Container>
  );
};

export default CardsContainer;
