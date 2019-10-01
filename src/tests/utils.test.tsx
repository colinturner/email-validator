import { isEmailValid, emailAddressSuggestions } from "../utils";
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
        "voldy@needsattention",
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
          "paul@ygm.com",
          "paul@gmx.fr",
          "paul@gmx.de"
        ].sort()
      );

      const searchTerm2 = "";
      const suggestionsArray2 = emailAddressSuggestions(searchTerm2, domains);
      expect(suggestionsArray2).toEqual([]);

      const searchTerm3 = "p";
      const suggestionsArray3 = emailAddressSuggestions(searchTerm3, domains);
      const expectedArray3 = emailDomains.map(val => "p@" + val);
      expect(suggestionsArray3.sort()).toEqual(expectedArray3.sort());
    });
  });
});
