/**
 * @description 用两个栈实现一个队列
 * @author shuibuzhuo
 */

export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  /**
   * 入队
   * @param n 数字
   */
  add(n: number) {
    this.stack1.push(n)
  }

  /**
   * 出队
   */
  delete(): number | null {
    let res

    const stack1 = this.stack1
    const stack2 = this.stack2

    // 将 stack1 的所有元素移动到 stack2 中
    while(stack1.length) {
      const n = stack1.pop()
      if (n != null) {
        stack2.push(n)
      }
    }

    // stack2 出栈，来模拟队列先进先出的特点
    res = stack2.pop()

    // 将在 stack2 的元素，再还给 stack1
    while(stack2.length) {
      const n = stack2.pop()
      if (n != null) {
        stack1.push(n)
      }
    }

    return res || null
  }

  get length(): number {
    return this.stack1.length
  }
}

// // 功能测试
// const q = new MyQueue()
// console.info(q.length)
// q.add(100)
// console.info(q.length)
// q.add(200)
// q.add(300)
// console.info(q.length)
// q.delete()
// console.info(q.length)
// q.delete()
// q.delete()
// console.info(q.length)

export {}
