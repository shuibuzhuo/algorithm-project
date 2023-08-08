/**
 * @description 用两个栈实现一个队列 test
 * @author shuibuzhuo
 */

import { it, describe, expect } from "vitest";
import { MyQueue } from "./two-stacks-one-queue";

describe('两个栈实现一个队列', () => {
  it('往队列里增加元素', () => {
    const q = new MyQueue()
    q.add(100)
    expect(q.length).toBe(1)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })

  it('删除元素', () => {
    const q = new MyQueue()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
    const n1 = q.delete()
    expect(n1).toBe(100)
    expect(q.length).toBe(2)
    const n2 = q.delete()
    expect(n2).toBe(200)
    const n3 = q.delete()
    expect(n3).toBe(300)
    const n4 = q.delete()
    expect(n4).toBeNull()
    expect(q.length).toBe(0)
  })
})
