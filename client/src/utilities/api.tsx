export const verifyEmail = async (email: string) => {
  const api_url = `/verify-email/${email}`;
  const response = await fetch(api_url);
  const json = await response.json();
  console.log(json);
  return json;
};
