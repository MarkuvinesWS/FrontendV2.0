function nNodeTreeSearchRecursion (tree, value) {
  if (tree.node === value) return tree;
  for (const child of tree.children) {
    const obj = nNodeTreeSearchRecursion(child, value)
    if (obj) return obj;
  }
}

function nNodeTreeSearchNotRecursion(tree, value) {

  if (tree.node === value) return tree
  const array = [...tree.children]


  function checkNode(node) {
    if (node.node === value) return node
    for (const child of node.children) {
      array.push(child);
    }
    return false;
  }


  for (const child of array) {
    let node = checkNode(child);
    if (node) return node;
  }
}

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
console.log(nNodeTreeSearchNotRecursion(tree, 11));
