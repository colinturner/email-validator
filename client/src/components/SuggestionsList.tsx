import React from "react";
import { emailAddressSuggestions } from "../utilities/utils";
import styled from "styled-components";

interface Props {
  term: string | undefined;
  list: string[];
  handleClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
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

const Item = styled.div`
  font-family: Raleway;
  cursor: pointer;
`;

// Generate email address suggestions. Each suggestion is called an 'Item',
const SuggestionsList: React.FC<Props> = ({ term = "", list, handleClick }) => (
  <>
    {!!emailAddressSuggestions(term, list).length && (
      <Instructions>Scroll down this list for more suggestions</Instructions>
    )}
    <ListContainer>
      {emailAddressSuggestions(term, list).map(listItem => (
        <Item key={listItem} onClick={handleClick}>
          {listItem}
        </Item>
      ))}
    </ListContainer>
  </>
);

export default SuggestionsList;
