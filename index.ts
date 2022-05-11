export type User = {
  name: string;
};

namespace MyNameSpace {
  export interface User {
    name: string;
  }
}

// namespace MyNameSpace {
//   export interface User {
//     age: number;
//   }
// }

declare var x: number;

x = 0;

type Foo = MyNameSpace.User;
