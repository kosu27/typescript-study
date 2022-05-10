export type Foo<T = string> = {
  value: T;
};

const foo1: Foo = {
  value: "",
};
const foo2: Foo<number> = {
  value: 1,
};
