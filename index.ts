type User = {
  name: string;
  age: number | null;
  country?: "US" | "KR" | "JP";
};

type PartialUser = Partial<User>;

const user: PartialUser = {
  name: "こす",
};
