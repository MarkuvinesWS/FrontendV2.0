export function nNodeTreeSearchRecursion (tree, node) {
  if (tree.node === node) return tree;
  for (const child of tree.children) {
    const obj = nNodeTreeSearchRecursion(child, node)
    if (obj) return obj;
  }
}

export function nNodeTreeSearchNotRecursion(tree, value) {

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
