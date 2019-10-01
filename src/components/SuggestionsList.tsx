import React from "react";
import { emailAddressSuggestions } from "../utils";

interface Props {
  term: string;
  list: string[];
}

const SuggestionsList: React.FC<Props> = ({ term = "", list }) => {
  const filteredList = emailAddressSuggestions(term, list).map(
    (listItem: string) => <div key={listItem}>{listItem}</div>
  );
  return <div>{filteredList}</div>;
};

export default SuggestionsList;
