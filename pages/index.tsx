import type { NextPage } from "next";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  c: boolean;
};
type FooBar = Foo | Bar;

const test: FooBar = {
  a: 1,
  b: "",
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
