type UserA = { name: string };
type UserB = { name: string; nickName: string };

export const foo = (value: UserA | UserB) => {
  if ("nickName" in value) {
    return value;
  }
  return value;
};
