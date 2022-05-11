type Foo = Record<"hoge" | "fuga", 1 | 3>;

const obj: Foo = {
  hoge: 1,
  fuga: 3,
};

// type User = {
//   name: string;
//   age: number | null;
//   country?: "US" | "KR" | "JP";
// };

// type OmitUser = Omit<User, "age">;

// const user: OmitUser = {
//   name: "こす",
//   country: "JP",
// };
