import React from "react";
import styled from "styled-components";

interface Props {
  item: string;
}

const Item = styled.div`
  font-family: Raleway;
  cursor: pointer;
`;

const ListItem: React.FC<Props> = ({ item }) => {
  return <Item>{item}</Item>;
};

export default ListItem;
