/**
 * @description 用链表实现队列 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { MyQueue } from "./queue-using-linked-list";

describe('用链表实现队列', () => {
  it('增加元素', () => {
    const q = new MyQueue()
    expect(q.length).toBe(0)
    q.add(100)
    expect(q.length).toBe(1)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })
  it ('删除元素', () => {
    const q = new MyQueue()
    expect(q.delete()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
    expect(q.delete()).toBe(100)
    expect(q.delete()).toBe(200)
    expect(q.delete()).toBe(300)
    expect(q.delete()).toBeNull()
  })
})
