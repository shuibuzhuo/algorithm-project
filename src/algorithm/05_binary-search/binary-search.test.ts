/**
 * @description 二分查找 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { binarySearch1, binarySearch2 } from "./binary-search";

describe('二分查找', () => {
  it('正常情况', () => {
    const arr = [10, 20, 30, 40, 50]
    const target = 20
    expect(binarySearch2(arr, target)).toBe(1)
  })
  it('数组为空', () => {
    expect(binarySearch2([], 100)).toBe(-1)
  })
  it('找不到 target', () => {
    const arr = [10, 20, 30, 40, 50]
    const target = 100
    expect(binarySearch2(arr, target)).toBe(-1)
  })
})
