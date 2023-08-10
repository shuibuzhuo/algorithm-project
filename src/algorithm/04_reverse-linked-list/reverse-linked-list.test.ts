/**
 * @description 反转单向链表
 * @author shuibuzhuo
 */

import { it, describe, expect } from "vitest";
import { createLinkedList, reverseLinkedList } from './reverse-linked-list'

describe('反转单向链表', () => {
  it('单个元素', () => {
    const node = createLinkedList([100])
    expect(reverseLinkedList(node)).toEqual({ value: 100 })
  })

  it('多个元素', () => {
    const node = createLinkedList([100, 200, 300])
    expect(reverseLinkedList(node)).toEqual({
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100
        }
      }
    })
  })
})
