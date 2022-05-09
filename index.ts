export type User = {
  name: string;
} & RequiredPersonalData;

type PersonalData = {
  height?: number;
  weight?: number;
  realName?: string;
};

type RequiredPersonalData = {
  [K in keyof PersonalData]-?: PersonalData[K];
  // height?: number;
  // weight?: number;
};

const user: User = {
  name: "こす",
  height: 170,
  realName: "こす",
};
