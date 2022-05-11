import { PartialDeep } from "type-fest";

type User = {
  name: string;
  age: number | null;
  address: {
    country: "US" | "KR" | "JP";
  };
};

type PartialUser = PartialDeep<User>;

const user: PartialUser = {
  name: "こす",
  address: {},
};
