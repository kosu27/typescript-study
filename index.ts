const foo = <T>(arg: T) => {
  return { value: arg };
};

const foo1 = foo<{ foo: number[] }>({ foo: [1, 2, 3] });
