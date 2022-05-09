export type User = {
  name: string;
  age: number;
  [key: string]: string | number | undefined;
};

const user: User = {
  name: "こす",
  age: 20,
  account: "kosu",
  job: "web developer",
};
