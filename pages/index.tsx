import type { NextPage } from "next";

const boo = "boo" as const;
let bar = boo;

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
