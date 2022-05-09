export type User = {
  name: string;
} & OptionalPersonalData;

type PersonalData = {
  height: number;
  weight: number;
  realName: string;
};

type OptionalPersonalData = {
  [K in keyof PersonalData]?: PersonalData[K];
  // height?: number;
  // weight?: number;
};

const user: User = {
  name: "こす",
  height: 170,
  realName: "こす",
};
