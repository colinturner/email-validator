import React from "react";
import { emailAddressSuggestions, generateListItemsFrom } from "../utils";

interface Props {
  term: string | undefined;
  list: string[];
}

const SuggestionsList: React.FC<Props> = ({ term = "", list }) => (
  <>{generateListItemsFrom(emailAddressSuggestions(term, list))}</>
);

export default SuggestionsList;
