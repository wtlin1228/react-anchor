import React, { useState } from "react";
import styled from "styled-components";

// utils

// assets

// actions

// components

// self-defined-components
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
const AnchorLink = styled.div`
  margin: 10px;
  padding: 20px;

  cursor: pointer;
  &:hover {
    font-weight: 900;
  }

  color: ${(props) => (props.selected ? "#ffffff" : "inherit")};
  background: ${(props) => (props.selected ? "#114d97" : "inherit")};

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const useAnchor = (anchorLinks, defaultAnchorLink) => {
  const [selectedId, setSelectedId] = useState(defaultAnchorLink);

  const Anchor = () => {
    return (
      <Container>
        {anchorLinks.map(({ id, title }) => (
          <AnchorLink key={`anchor-link-${id}`} selected={selectedId === id}>
            <a href={`#card-${id}`}>{title}</a>
          </AnchorLink>
        ))}
      </Container>
    );
  };

  return [selectedId, setSelectedId, Anchor];
};

export default useAnchor;
