import { IErrors } from "./interfaces/interfaces";
import React from "react";
import ListItem from "./components/ListItem";

export const isEmailValid = (email: string | undefined): boolean => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email || "");
};

export const validateInputValue = (target: string, value: string): IErrors => {
  let errors: IErrors = {};
  if (value.indexOf("@") === -1) {
    errors[target] = "Looks like you're missing the @ symbol";
    return errors;
  }
  if (value.slice(-1) === "@") {
    errors[target] = "Don't forget the domain (e.g. gmail.com)";
    return errors;
  }
  // if (!isEmailValid(value.email)) {
  //   errors.email = "Invalid email address.";
  // }
  return errors;
};

export const createDomainRegExpFrom = (term: string): RegExp => {
  const domain = term.split("@").pop() || ""; // e.g. "yahoo.co.uk"
  const domainRegExpFormatted = domain.split(".").join("\\."); // e.g. "yahoo\\.co\\.uk"

  return new RegExp(`${"^" + domainRegExpFormatted}`);
};

export const domainMatchesFromSearch = (regExp: RegExp, list: string[]) =>
  list.filter((listItem: string) => regExp.test(listItem));

export const createEmailAddressSuggestionsFrom = (
  username: string,
  list: string[]
) => list.map(domainMatch => username + "@" + domainMatch);

export const emailAddressSuggestions = (
  term: string,
  list: string[]
): string[] => {
  if (term.indexOf("@") === -1) {
    return [];
  }
  const regExp = createDomainRegExpFrom(term);
  const username = term.split("@").shift() || ""; // e.g. "paul" from "paul@yahoo.co.uk"
  return createEmailAddressSuggestionsFrom(
    username,
    domainMatchesFromSearch(regExp, list)
  );
};

export const generateListItemsFrom = (list: string[]) =>
  list.map(listItem => <ListItem key={listItem} item={listItem} />);
