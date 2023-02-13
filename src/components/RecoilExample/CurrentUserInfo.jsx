import axios from "axios";
import React from "react";
import { atom, selector, useRecoilValue } from "recoil";

const currentUserIDState = atom({
  key: "currentUserIDState",
  default: 1,
});

const tableOfUsers = [{ name: "Jimmy" }, { name: "Choi" }];

// const currentUserNameState = selector({
//   key: "currentUserNameState",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selector({
  key: "currentUserNameQuery",
  get: async ({ get }) => {
    const response = await axios.get(
      `/api/user-name?id=${get(currentUserIDState)}`
    );
    return response.data.name;
  },
});

function CurrentUser() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}

export default function CurrentUserInfo() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CurrentUser></CurrentUser>
    </React.Suspense>
  );
}
