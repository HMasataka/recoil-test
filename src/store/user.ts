import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: typeof window === "undefined" ? undefined : localStorage,
});

export const userState = atom({
  key: "user",
  default: {
    id: null,
    name: "name",
    email: "email",
  },
  effects_UNSTABLE: [persistAtom],
});
