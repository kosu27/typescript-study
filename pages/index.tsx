import type { NextPage } from "next";

//標準ライブラリ
let obj3: Record<string, unknown> = {
  a: 1,
  b: "foo",
};

//Index Signature
let obj4: { a: number; b: string; foo: string } = {
  a: 1,
  b: "foo",
  foo: "bar",
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
