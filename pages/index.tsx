import type { NextPage } from "next";

type Animals = "dog" | "cat";

type Ani = {
  [key in Animals]: number;
};

//type
// type Foo = {
//   a: number;
// };

// type Bar = Foo & {
//   a: string;
// };

//interface
interface Foo {
  a: number;
}

const foo: Ani = {
  dog: 1,
  cat: 2,
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
