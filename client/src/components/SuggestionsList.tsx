import React from "react";
import {
  emailAddressSuggestions,
  generateListItemsFrom
} from "../utilities/utils";
import styled from "styled-components";

interface Props {
  term: string | undefined;
  list: string[];
}

const Instructions = styled.div`
  margin-top: 7vh;
  margin-bottom: 1vh;
  cursor: default;
`;

const ListContainer = styled.div`
  max-height: 20vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

const SuggestionsList: React.FC<Props> = ({ term = "", list }) => (
  <>
    {!!emailAddressSuggestions(term, list).length && (
      <Instructions>Scroll down this list for more suggestions</Instructions>
    )}
    <ListContainer>
      {generateListItemsFrom(emailAddressSuggestions(term, list))}
    </ListContainer>
  </>
);

export default SuggestionsList;
