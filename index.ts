type Foo = Exclude<"aaa" | 0 | true, string | number>;

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
