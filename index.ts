export type User = {
  name: string;
};

declare namespace MyNameSpace {
  interface User {
    name: string;
  }
  type Hoge = string;
}

x;

// namespace MyNameSpace {
//   export interface User {
//     age: number;
//   }
// }

type Foo = MyNameSpace.User;
