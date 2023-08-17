/**
 * @description 快速排序 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { quickSort1, quickSort2 } from "./quick-sort";

describe('快速排序', () => {
  it('正常情况', () => {
    const arr = [1, 3, 2, 5, 4, 9, 7, 8]
    const res = quickSort2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 7, 8, 9])
  })
  it('空数组', () => {
    const arr: number[] = []
    const res = quickSort2(arr)
    expect(res).toEqual([])
  })
  it('存在负数', () => {
    const arr = [-2, -5, 3, 2]
    const res = quickSort2(arr)
    expect(res).toEqual([-5, -2, 2, 3])
  })
  it('数组元素都一样', () => {
    const arr = [2, 2, 2, 2]
    const res = quickSort2(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })
})
