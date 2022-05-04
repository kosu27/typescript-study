import type { NextPage } from "next";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  a: string;
  c: boolean;
};
type FooBar = Foo | Bar;

const test: FooBar = {
  a: "1",
  b: "",
  c: true,
};

if ("b" in test) {
  test.a.toFixed();
}

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
