export type Foo<T extends string | number> = {
  value: T;
};

const foo1: Foo<string> = {
  value: "",
};
const foo2: Foo<number> = {
  value: 111,
};
