import { atom } from "recoile";

export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
