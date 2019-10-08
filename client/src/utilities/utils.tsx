import { IErrors } from "../interfaces/interfaces";

export const isEmailValid = (email: string | undefined = ""): boolean => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

export const doesNotContainCharacter = (
  str: string | undefined = "",
  char: string
) => str.indexOf(char) === -1;

export const lastCharacterIs = (str: string, char: string) =>
  str.slice(-1) === char;

export const getDomainString = (str: string | undefined = "") =>
  str.split("@").pop();

export const validateInputValue = (
  target: string,
  value: string = ""
): IErrors => {
  let errors: IErrors = {};
  if (doesNotContainCharacter(value, "@")) {
    errors[target] = "Looks like you're missing the @ symbol";
    return errors;
  }
  if (lastCharacterIs(value, "@")) {
    errors[target] = "Don't forget the domain (e.g. gmail.com)";
    return errors;
  }
  if (doesNotContainCharacter(getDomainString(value), ".")) {
    errors[target] =
      'Just missing the last part now (e.g. something like ".com")';
    return errors;
  }
  if (!isEmailValid(value)) {
    errors.email =
      'This last part needs to be at least two characters long (e.g. ".ca")';
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

export const createEmailAddressSuggestionsFrom = (
  username: string | undefined = "",
  list: string[]
) => {
  if (list.length === 1) {
    return [];
  }
  return list.map(domainMatch => username + "@" + domainMatch);
};

export const emailAddressSuggestions = (
  term: string,
  list: string[]
): string[] => {
  if (doesNotContainCharacter(term, "@")) {
    return [];
  }
  const regExp = createDomainRegExpFrom(term);
  const username = term.split("@").shift(); // e.g. "paul" from "paul@yahoo.co.uk"
  return createEmailAddressSuggestionsFrom(
    username,
    domainMatchesFromSearch(regExp, list)
  );
};
