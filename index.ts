export function double(x: number | string) {
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
}
