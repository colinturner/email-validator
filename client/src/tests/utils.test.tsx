import {
  isEmailValid,
  emailAddressSuggestions,
  createDomainRegExpFrom,
  domainMatchesFromSearch,
  createEmailAddressSuggestionsFrom,
  validateInputValue
} from "../utilities/utils";
import { emailDomains } from "../constants";

describe("utility methods", () => {
  describe("isEmailValid", () => {
    it("checks that a string is in valid email format", () => {
      const validAttempts = [
        "hermione_granger@gmail.com",
        "dobby@yahoo.co.uk",
        "ARGUS_filch12@squibsingles.ca"
      ];
      const invalidAttempts = [
        "albus",
        "voldemort@needsattention",
        "crookshanks123@petshop."
      ];
      validAttempts.forEach(attempt =>
        expect(isEmailValid(attempt)).toBe(true)
      );
      invalidAttempts.forEach(attempt =>
        expect(isEmailValid(attempt)).toBe(false)
      );
    });
  });

  describe("validateInputValue", () => {
    it("sets email error message to 'Looks like you're missing the @ symbol' when missing '@'", () => {
      const value = "paul";
      const errors = validateInputValue("email", value);
      expect(errors.email).toEqual("Looks like you're missing the @ symbol");
    });
    it(`sets email error message to "Don't forget the domain (e.g. gmail.com)"`, () => {
      const value = "paul@";
      const errors = validateInputValue("email", value);
      expect(errors.email).toEqual("Don't forget the domain (e.g. gmail.com)");
    });
    it(`sets email error message to 'Just missing the last part now (e.g. something like ".com")'`, () => {
      const value = "paul@g";
      const errors = validateInputValue("email", value);
      expect(errors.email).toEqual(
        'Just missing the last part now (e.g. something like ".com")'
      );
    });
    it(`sets email error message to 'This last part needs to be at least two characters long (e.g. ".ca")'`, () => {
      const value = "paul@gmail.c";
      const errors = validateInputValue("email", value);
      expect(errors.email).toEqual(
        'This last part needs to be at least two characters long (e.g. ".ca")'
      );

      const value1 = "paul@gmail.c";
      const errors2 = validateInputValue("email", value1);
      expect(errors2.email).toEqual(
        'This last part needs to be at least two characters long (e.g. ".ca")'
      );
    });
  });

  describe("domainMatchesFromSearch", () => {
    it("creates new array with only the domains that match the search term", () => {
      const list = emailDomains;
      const regExp = /^yahoo\.co\./;
      const filteredArray = domainMatchesFromSearch(regExp, list);
      expect(filteredArray.sort()).toEqual(
        [
          "yahoo.co.uk",
          "yahoo.co.jp",
          "yahoo.co.kr",
          "yahoo.co.id",
          "yahoo.co.in"
        ].sort()
      );
    });
  });

  describe("createEmailAddressSuggestionsFrom", () => {
    it("creates array of suggested email addresses", () => {
      const username = "paul";
      const list = [
        "yahoo.co.uk",
        "yahoo.co.jp",
        "yahoo.co.kr",
        "yahoo.co.id",
        "yahoo.co.in"
      ];
      const suggestedEmails = createEmailAddressSuggestionsFrom(username, list);
      expect(suggestedEmails.sort()).toEqual(
        [
          "paul@yahoo.co.uk",
          "paul@yahoo.co.jp",
          "paul@yahoo.co.kr",
          "paul@yahoo.co.id",
          "paul@yahoo.co.in"
        ].sort()
      );
    });
    it("returns an empty array if only one domainMatch in given list", () => {
      const username = "paul@gmail.com";
      const list = ["gmail.com"];
      const suggestedEmails = createEmailAddressSuggestionsFrom(username, list);
      expect(suggestedEmails).toEqual([]);
    });
  });

  describe("createDomainRegExpFrom", () => {
    it("generates a RegExp that matches the domain section from an email address", () => {
      const emailAddress = "paul@yahoo.co.";
      const regExp = createDomainRegExpFrom(emailAddress);
      expect(regExp).toEqual(new RegExp("^yahoo\\.co\\."));
    });
  });

  describe("emailAddressSuggestions", () => {
    it("returns an array suggesting possible email addresses", () => {
      const searchTerm = "paul@gm";
      const domains = emailDomains;
      const suggestionsArray = emailAddressSuggestions(searchTerm, domains);
      expect(suggestionsArray.sort()).toEqual(
        [
          "paul@gmail.com",
          "paul@gmx.com",
          "paul@gmx.net",
          "paul@gmx.fr",
          "paul@gmx.de"
        ].sort()
      );

      const searchTerm2 = "";
      const suggestionsArray2 = emailAddressSuggestions(searchTerm2, domains);
      expect(suggestionsArray2).toEqual([]);

      const searchTerm3 = "p";
      const suggestionsArray3 = emailAddressSuggestions(searchTerm3, domains);
      expect(suggestionsArray3.sort()).toEqual([]);

      const searchTerm4 = "paul@yahoo.co.";
      const suggestionsArray4 = emailAddressSuggestions(searchTerm4, domains);
      expect(suggestionsArray4.sort()).toEqual(
        [
          "paul@yahoo.co.uk",
          "paul@yahoo.co.jp",
          "paul@yahoo.co.kr",
          "paul@yahoo.co.id",
          "paul@yahoo.co.in"
        ].sort()
      );
    });
  });
});
