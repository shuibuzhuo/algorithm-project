/**
 * @description 二叉搜索树
 * @author shuibuzhuo
 */

export type TreeNode = {
  value: number
  left: TreeNode | null
  right: TreeNode | null
}

// 保存中序遍历后的数字的一个数组
const arr: number[] = []
export const bst: TreeNode = {
  value: 5,
  left: {
      value: 3,
      left: {
          value: 2,
          left: null,
          right: null
      },
      right: {
          value: 4,
          left: null,
          right: null,
      }
  },
  right: {
      value: 7,
      left: {
          value: 6,
          left: null,
          right: null
      },
      right: {
          value: 8,
          left: null,
          right: null
      }
  }
}

/**
 * 前序遍历 root left right
 * @param node 节点
 */
function preOrderTraverse(node: TreeNode | null) {
  if (node == null) return
  // console.log(node.value)
  arr.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * 中序遍历 left root right
 * @param node 节点 
 */
function inOrderTraverse(node: TreeNode | null) {
  if (node == null) return
  inOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
  inOrderTraverse(node.right)
}

/**
 * 后序遍历 left right root
 * @param node 节点
 */
function postOrderTraverse(node: TreeNode | null) {
  if (node == null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  // console.log(node.value)
  arr.push(node.value)
}

/**
 * 寻找 bst 中第 k 小值
 * @param arr arr
 * @param k 要找的第 k 小值
 */
export function findKthValue(node: TreeNode, k: number): number | null {
  inOrderTraverse(node)
  console.log('arr', arr);
  
  return arr[k - 1] || null
}

// 功能测试
// preOrderTraverse(bst)
// inOrderTraverse(bst)
// postOrderTraverse(bst)
console.log(findKthValue(bst, 3))

export {}
