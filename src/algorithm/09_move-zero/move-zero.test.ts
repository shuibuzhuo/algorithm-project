/**
 * @description 移动 0 到末尾 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { moveZero1, moveZero2 } from "./move-zero";

describe('移动 0 到末尾', () => {
  it('正常情况', () => {
    const arr = [1, 3, 0, 5, 8, 0, 0]
    moveZero2(arr)
    expect(arr).toEqual([1, 3, 5, 8, 0, 0, 0])
  })
  it('没有 0', () => {
    const arr = [1, 2, 3, 4, 5]
    moveZero2(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  it('全是 0', () => {
    const arr = [0, 0, 0, 0, 0]
    moveZero2(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0])
  })
})
