import type { NextPage } from "next";

const boo: false = false;
const str: "bar" = "bar";
const num: 1 = 1;

function double(x: 5): number {
  return x * 2;
}

double(5);

const Home: NextPage = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

const Component = (props: { foo?: true }) => {
  if (props.foo) {
    return <div>a</div>;
  }
  return <div>test</div>;
};

export default Home;
