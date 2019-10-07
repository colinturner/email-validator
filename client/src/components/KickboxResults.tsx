import React, { useState, useEffect } from "react";
import { KickboxResponse } from "../interfaces/interfaces";
import useDebounce from "../hooks/useDebounce";
import { isEmailValid } from "../utilities/utils";
import { verifyEmail } from "../utilities/api";

interface Props {
  email: string | undefined;
}

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
      <div>{isVerifying && "Checking email..."}</div>
      <div>{!!kickboxResults.result && kickboxResults.result}</div>
    </>
  );
};

export default KickboxResults;
