export interface IErrors {
  [email: string]: string;
}
export interface IInputValue {
  email?: string;
}
export interface KickboxResponse {
  result?: string | null | false;
  reason?: string | null | false;
  did_you_mean?: string | null | false;
}
