/**
 * @description 二叉搜索树
 * @author shuibuzhuo
 */

type TreeNode = {
  value: number
  left: TreeNode | null
  right: TreeNode | null
}

const bst: TreeNode = {
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
  console.log(node.value)
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
  console.log(node.value)
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
  console.log(node.value)
}

// 功能测试
// preOrderTraverse(bst)
// inOrderTraverse(bst)
postOrderTraverse(bst)
