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

// type Foo = MyNameSpace.User["age"];
