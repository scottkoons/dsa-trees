/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  // Given a n-ary tree of integers, return the sum of all the integers.
  sumValues() {
    let total = 0;
    if ([this.root][0] === null) return 0;
    const totalValues = [this.root];
    while (totalValues.length) {
      let current = totalValues.pop();
      total = total + current.val;
      if (current.children) {
        for (let child of current.children) {
          totalValues.push(child);
        }
      }
    } return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  // Given a n-ary tree of integers, return the count of all the even integers.
  countEvens() {
    let count = 0;
    if ([this.root][0] === null) return 0;
    const totalValues = [this.root];
    while (totalValues.length) {
      let current = totalValues.pop();
      if (current.val % 2 === 0) {
        count = count + 1;
      }
      if (current.children) {
        for (let child of current.children) {
          totalValues.push(child);
        }
      }
    } return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  //  Given a n-ary tree and a number x, find and return the number of nodes which are greater than x.
  numGreater(lowerBound) {
    let count = 0;
    if ([this.root][0] === null) return 0;
    const totalValues = [this.root];
    while (totalValues.length) {
      let current = totalValues.pop();
      if (current.val > lowerBound) {
        count = count + 1;
      }
      if (current.children) {
        for (let child of current.children) {
          totalValues.push(child);
        }
      }
    } return count;
  }
}

module.exports = { Tree, TreeNode };
