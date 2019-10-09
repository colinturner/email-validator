# Email Validator

## Overview

This project consists of an input field where a user can validate that an email address is deliverable. This input field is smart and can nudge the user in the right direction with feedback if the user veers off-track while typing in their email address.

Additionally, the input field provides autocomplete suggestions as the user types. At any point, the user can click on one of those suggestions and the input field will autofill.

Once a valid-format email address has been entered, the web app uses the Kickbox API to verify that the email is in fact deliverable and the web app provides feedback to that effect.

## Getting started

1. Open a Terminal window and navigate to the project's root directory. Run `npm i` and then `npm start`. This will install necessary packages and then kick off a simple server that handles the Kickbox API requests.
2. Open a new Terminal window and navigate to inside the _client/_ folder. This is where the frontend (React) project lives. Again, run `npm i` and then `npm start`.
3. Open a browser and navigate to [http://localhost:3000](http://localhost:3000) to see a fairly swanky email validator.

## Using the email validator

Type an email address into the input field. The validator will hint you towards a valid email format and present clickable suggestions. Once you've entered an email address with a valid format, the web app will verify that email's deliverability with the Kickbox API.

## Tests

This project has plenty of unit tests to verify that everything works as it should. Run `npm test` in the _client_ directory to run those tests. There are 11 tests in two separate test suites - if they don't all immediately run after `npm test`, then press `a` to run all tests again.

## Notes on Kickbox API

The Kickbox API only allows a limited number of email verifications under the free plan (which this project uses). If the web app exceeds the free quota, change the API key to the Sandbox key. In **index.js** (in the project's root) on Lines 6 and 7, comment out the Production API key and uncomment the Sandbox API key. The web app will then still work, but the Kickbox API will return dummy Sandbox results - essentially any email will then be deemed deliverable.

## Other notes

1. This project utilizes only functional components as they are cleaner, lighter, easier to reason about (and are generally the future of React).

2. For state in functional components, custom hooks are employed. See them in the _client/src/hooks_ directory.

3. The styled-components library was used for most styling as it keeps styles within the same component files that they modify, and prevents class name clashes between unrelated components.

4. Re-usable functions are held in the _client/src/utilities_ folder.

## Enjoy validating emails!
