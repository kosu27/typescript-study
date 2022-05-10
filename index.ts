type User = {
  name: string;
  age: number | null;
  country?: "US" | "KR" | "JP";
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "こす",
  age: 24,
};
