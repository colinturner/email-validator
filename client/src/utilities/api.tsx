// Make request to node.js server. Send email param.
export const verifyEmail = async (email: string) => {
  const api_url = `api/verify-email/${email}`;
  const response = await fetch(api_url);
  const json = await response.json();
  return json;
};
