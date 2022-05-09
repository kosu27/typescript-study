export const foo = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value;
  }
  return value;
};
