export const Obj = {
  foo: "foo",
  bar: "bar",
};

// type Obj = typeof Obj;
// type Key = keyof Obj;

type Key = keyof typeof Obj;

// const key: Key = "foo";

function test(x: keyof typeof Obj) {
  return;
}

test("foo");
