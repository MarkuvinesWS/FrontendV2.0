import shallowEquals from "./shallowEquals/shallowEquals.js";
import pathGen from "./pathGen/pathGen.js";
import customMap from "./customMap/customMap.js";
import pipe from "./pipe/pipe.js";
import { nNodeTreeSearchRecursion, nNodeTreeSearchNotRecursion } from "./nNodeTreeSearch/nNodeTreeSearch.js"


console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }))
; // true
console.log(shallowEquals({ a: 0 }, { a: undefined }))
; // false
console.log(shallowEquals({ a: {} }, { a: {} }))
; // false
console.log(shallowEquals({ a: [] }, { a: [] }))
; // false\
console.log(shallowEquals({ a: () => {} }, { a: () => {} }))
; // false
console.log(shallowEquals({ a: 5 }, { a: 5} ))


console.log(pathGen(['user', 'name'], 'Sam', {}));

console.log(customMap([1, 2, 3, 4, 5],(item) => item + 2 ))

const fillUser = pipe (
  (user) => ({ ...user, lastName: "Pass" }),
  (user) => ({ ...user, age: 29 }),
  (user) => ({ ...user, city: "Boston" }),
);

console.log(fillUser({ name: 'Sam' }))

const tree = {
  node: 1,
  children: [
    {
      node: 2,
      children: [
        {
          node: 3,
          children: [
            {
              node: 4,
              children: [
                {
                  node: 5,
                  children: [],
                },
                {
                  node: 6,
                  children: [],
                },
                {
                  node: 7,
                  children: [],
                },
                {
                  node: 8,
                  children: [],
                },
              ],
            },
            {
              node: 9,
              children: [],
            },
          ],
        },
      ],
    },
    {
      node: 10,
      children: [
        {
          node: 11,
          children: [
            {
              node: 12,
              children: [],
            },
          ],
        },
        {
          node: 13,
          children: [],
        },
        {
          node: 14,
          children: [],
        },
      ],
    },
  ],
};

console.log(nNodeTreeSearchRecursion(tree, 11));
console.log(nNodeTreeSearchNotRecursion(tree, 10)) ;




// const mySet = new MySet([1, 2, 3, 4, 4, 5, 5])
// console.log(mySet);
//
// mySet.add(6);
// console.log(mySet);
//
// mySet.add(1);
// console.log(mySet);

