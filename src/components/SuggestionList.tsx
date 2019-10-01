import React from "react";

interface Props {
  term: string | undefined;
  list: string[];
}

const SuggestionList: React.FC<Props> = ({ term, list }) => {
  const filteredList = list
    .filter((listItem: string) => new RegExp(`${term}`, "gi").test(listItem))
    .map((listItem: string) => <div key={listItem}>{listItem}</div>);
  return <div>{filteredList}</div>;
};

export default SuggestionList;
