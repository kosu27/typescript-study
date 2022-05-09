export type User = {
  name: string;
} & PersonalData;

type PersonalData = {
  //   height: number;
  //   weight: number;
  [key in "height" | "weight"]?: number | string;
};

const user: User = {
  name: "こす",
  height: 170,
};
