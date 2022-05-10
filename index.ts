const foo = <T>(arg: T) => {
  return { value: arg };
};

const foo1 = foo<string | null>("");
const foo2 = foo(1);
const foo3 = foo(true);
