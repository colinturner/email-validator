import React from "react";

interface Props {
  item: string;
}

const ListItem: React.FC<Props> = ({ item }) => {
  return <div>{item}</div>;
};

export default ListItem;
