/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  // Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.
  minDepth(start = this.root) {
    if (start === null) return 0;
    let depthLeft = 0;
    let depthRight = 0;

    function findMinDepthLeft(start) {
      if (start.val) depthLeft++;
      if (start.left === null || start.right === null) return depthLeft;
      if (start.left) findMinDepthLeft(start.left);
      return depthLeft;
    } findMinDepthLeft(start);

    function findMinDepthRight(start) {
      if (start.val) depthRight++;
      if (start.left === null || start.right === null) return depthRight;
      if (start.right) findMinDepthRight(start.right);
      return depthRight;
    } findMinDepthRight(start);

    return depthLeft < depthRight ? depthLeft : depthRight;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  //  Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree, but no node can be visited more than once.
  maxDepth(start = this.root) {
    if (start === null) return 0;
    let depth = 1;
    let depthLeft = 0;
    let depthRight = 0;
    function findMaxDepth(start) {
      if (start.left) depthLeft++;
      if (start.right) depthRight++;
      if (start.left === null && start.right === null) return;
      if (start.left) findMaxDepth(start.left);
      if (start.right) findMaxDepth(start.right);
    }
    findMaxDepth(start);
    return depthLeft < depthRight ? depthLeft + depth : depthRight + depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  // Given a binary tree, find the maximum path sum. The path may start and end at any 
  // node in the tree, but no node can be visited more than once.

  maxSum() {
    let maxVal = 0;

    function findMaxSum(start) {
      if (start === null) return 0;
      const leftSum = findMaxSum(start.left);
      const rightSum = findMaxSum(start.right);
      maxVal = Math.max(maxVal, leftSum + rightSum + start.val);

      return Math.max(0, leftSum + start.val, rightSum + start.val);


    }
    findMaxSum(this.root);
    return maxVal;
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerbound) {

    let valueLargerThanLowerBound = null;
    const toVisitQueue = [this.root];
    if (!this.root) return null;

    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if (current.val > lowerbound) {
        valueLargerThanLowerBound = current.val;
      }
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return valueLargerThanLowerBound;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
