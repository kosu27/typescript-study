const foo = (id: string, age: number) => {
  return 0;
};

// type Return<T> = T extends (...args: any[]) => infer U ? U : never;

type Foo = ReturnType<typeof foo>;
