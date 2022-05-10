type User = {
  name: string;
  // age: number | null;
  country?: "US" | "KR" | "JP";
};

type PickUser = Pick<User, "name" | "country">;

const user: PickUser = {
  name: "こす",
  country: "JP",
};
