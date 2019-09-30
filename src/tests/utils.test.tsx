import { isEmailValid } from "../utils";

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
    validAttempts.forEach(attempt => expect(isEmailValid(attempt)).toBe(true));
    invalidAttempts.forEach(attempt =>
      expect(isEmailValid(attempt)).toBe(false)
    );
  });
});
