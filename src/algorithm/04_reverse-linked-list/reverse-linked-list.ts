/**
 * @description 反转单向链表
 * @author shuibuzhuo
 */
export type LinkedListNode = {
  value: number,
  next?: LinkedListNode
}

export function reverseLinkedList(head: LinkedListNode): LinkedListNode {
  let prevNode: LinkedListNode | undefined = undefined
  let curNode: LinkedListNode | undefined = undefined
  let nextNode: LinkedListNode | undefined = head

  while(nextNode) {
    // 处理第一个元素，删除 next，避免循环引用
    if (curNode && !prevNode) {
      delete curNode.next
    }

    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode
    }
    
    // 往后移动 3 个指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }

  // 处理最后一个元素
  curNode!.next = prevNode

  return curNode!
} 

/**
 * 根据数组，创建单向链表
 * @param arr 输入的数组
 */
export function createLinkedList(arr: number[]): LinkedListNode {
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
const node = createLinkedList(arr)
const node1 = reverseLinkedList(node)
console.log('node1', node1)

export {}
