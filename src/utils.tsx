import { IErrors, IInputValue } from "./interfaces/interfaces";
import React from "react";
import ListItem from "./components/ListItem";

export const isEmailValid = (email: string | undefined): boolean => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email || "");
};

export const validateInputValue = (value: IInputValue): IErrors => {
  let errors: IErrors = {};
  if (!isEmailValid(value.email)) {
    errors.email = "Invalid email address.";
  }
  return errors;
};

export const createDomainRegExpFrom = (term: string): RegExp => {
  const domain = term.split("@").pop() || ""; // e.g. "yahoo.co.uk"
  const domainRegExpFormatted = domain.split(".").join("\\."); // e.g. "yahoo\\.co\\.uk"

  return new RegExp(`${"^" + domainRegExpFormatted}`);
};

export const domainMatchesFromSearch = (regExp: RegExp, list: string[]) =>
  list.filter((listItem: string) => regExp.test(listItem));

export const emailAddressSuggestions = (
  term: string,
  list: string[]
): string[] => {
  if (term.indexOf("@") === -1) {
    return [];
  }
  const regExp = createDomainRegExpFrom(term);
  const userName = term.split("@").shift() || ""; // e.g. "paul" from "paul@yahoo.co.uk"
  return domainMatchesFromSearch(regExp, list).map(
    domainMatch => userName + "@" + domainMatch
  );
};

export const generateListItemsFrom = (list: string[]) =>
  list.map(listItem => <ListItem key={listItem} item={listItem} />);
