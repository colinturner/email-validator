import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { isEmailValid } from "../utilities/utils";
import { verifyEmail } from "../utilities/api";
import { KickboxResponse } from "../interfaces/interfaces";

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
  return (
    <>
      <div>
        {isVerifying
          ? "Checking email..."
          : formatKickboxMessage(kickboxResults)}
      </div>
    </>
  );
};

export default KickboxResults;
