function foo(a: string, b: number[], c: boolean) {
  return;
}

type Foo = Parameters<typeof foo>;

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
