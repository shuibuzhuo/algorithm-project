/**
 * @description 反转单向链表
 * @author shuibuzhuo
 */
type LinkedListNode = {
  value: number,
  next?: LinkedListNode
}

/**
 * 根据数组，创建单向链表
 * @param arr 输入的数组
 */
function createLinkedList(arr: number[]): LinkedListNode {
  const length = arr.length
  if (length === 0) throw new Error('arr is empty')

  // 从后往前遍历数组，类比递归，链表的最后一个节点，没有 next，可以先定义出来
  let curNode: LinkedListNode = {
    value: arr[length - 1]
  }

  // 如果只有一个元素，直接返回
  if (length === 1) return curNode

  // 从后往前遍历数组
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode
}

// 功能测试
const arr = [100, 200, 300, 400, 500]
const res = createLinkedList(arr)
console.log('res', res)

export {}
