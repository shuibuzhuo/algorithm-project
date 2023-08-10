/**
 * @description 用链表实现队列
 * @author shuibuzhuo
 */
export type LinkedListNode = {
  value: number,
  next: LinkedListNode | null
}

export class MyQueue {
  // 因为队列有出队和入队，所以要定义两个指针
  private head: LinkedListNode | null = null
  private tail: LinkedListNode | null = null

  // 单独记录 length，而不是遍历链表，遍历的时间复杂度是 O(n)
  private len: number = 0

  /**
   * 入队
   * @param n 数字
   */
  add(n: number) {
    // 创建要入队的节点，从 tail 入队，所以 next 是 null
    const newNode: LinkedListNode = {
      value: n,
      next: null
    }

    // 获取当前 tail 节点
    const tailNode = this.tail

    // 如果当前 tail 节点为 null，则说明当前链表是空的
    if (tailNode == null) {
      // 链表为空的情况，this.head 和 this.tail 同时指向新元素
      this.head = newNode
    } else {
      // 链表不为空的情况，【1】当前 tail 节点的 next 要指向新元素
      tailNode.next = newNode
    }
    
    // 链表为空的情况，this.head 和 this.tail 同时指向新元素
    // 链表不为空的情况，【2】this.tail 要指向新元素
    this.tail = newNode

    // 记录长度
    this.len++
  }

  /**
   * 出队
   */
  delete(): number | null {
    let res

    // 获取此时的 head 节点
    const headNode = this.head
    // 判断链表为空的情况
    if (headNode == null) return null
    if (this.len == null) return null

    // 需要返回出队的元素
    res = headNode.value

    // 将 this.head 指针指向当前的 head 节点的 next 元素
    this.head = headNode.next

    // 记录长度
    this.len--

    return res
  }

  get length(): number {
    // 返回队列的长度，这里单独记录 length，而不是遍历链表，遍历的时间复杂度是 O(n)
    return this.len
  }
}

// 功能测试
// const q = new MyQueue()
// q.add(100)
// console.log('length', q.length)
// q.add(200)
// q.add(300)
// console.log('length', q.length)
// console.log('q', q)

export {}
