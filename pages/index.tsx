import type { NextPage } from "next";

//Array型
const Arr: (number | string | boolean)[] = [1, "2", 3, true];
const arr: Array<number> = [1, 2, 3];

//Tuple型
const tuple: [number, string] = [1, "foo"];
tuple[0].toFixed(2);

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
