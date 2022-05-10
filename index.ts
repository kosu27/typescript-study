type User = {
  name: string;
  age: number | null;
  country?: "US" | "KR" | "JP";
};

type RequiredUser = Required<User>;

const user: RequiredUser = {
  name: "こす",
  age: 20,
  country: "JP",
};
