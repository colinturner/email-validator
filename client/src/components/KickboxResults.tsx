import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { isEmailValid } from "../utilities/utils";
import { verifyEmail } from "../utilities/api";
import { KickboxResponse } from "../interfaces/interfaces";
import styled from "styled-components";

interface Props {
  email: string | undefined;
}

const formatKickboxMessage = (kickboxResponse: KickboxResponse) => {
  if (kickboxResponse.result === "deliverable") {
    return "That email address is deliverable. Nice!";
  }
  if (kickboxResponse.did_you_mean) {
    return `Looks like there was a problem. Did you mean to write ${kickboxResponse.did_you_mean}?`;
  }
  if (kickboxResponse.result === "undeliverable") {
    return "Looks like there was a problem. Try a different email address";
  }
  return "";
};

const KickboxResults: React.FC<Props> = ({ email = "" }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [kickboxResults, setKickboxResults] = useState({ result: "" });
  const debouncedSearchTerm = useDebounce(email, 500);

  // Verify email with Kickbox every time the email address changes (with client-side validation and a debounce implemented to prevent multiple rapid-fire API requests)
  useEffect(() => {
    if (isEmailValid(email)) {
      setIsVerifying(true);
      verifyEmail(debouncedSearchTerm).then(results => {
        setIsVerifying(false);
        setKickboxResults(results);
      });
    } else {
      setKickboxResults({ result: "" });
    }
  }, [debouncedSearchTerm]);

  const Green = styled.div`
    cursor: default;
    color: #20631a;
    background: rgb(255, 255, 255, 0.15);
    padding: 3px;
    border-radius: 4px;
  `;

  // Render the response from Kickbox
  return (
    <>
      {isVerifying ? (
        <div>Checking email...</div>
      ) : (
        formatKickboxMessage(kickboxResults) && (
          <Green>{formatKickboxMessage(kickboxResults)}</Green>
        )
      )}
    </>
  );
};

export default KickboxResults;
