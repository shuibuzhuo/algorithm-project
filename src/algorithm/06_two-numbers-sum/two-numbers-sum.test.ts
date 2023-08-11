/**
 * @description 两数之和 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { findTwoNumbers1, findTwoNumbers2 } from "./two-numbers-sum";

describe('两数之和', () => {
  it('正常情况', () => {
    const arr = [10, 30, 50, 70, 80]
    const n = 100
    const res = findTwoNumbers2(arr, n)
    expect(res).toEqual([30, 70])
  })

  it('空数组', () => {
    const n = 100
    const res = findTwoNumbers2([], n)
    expect(res).toEqual([])
  })

  it('找不到和等于 n 的两个数', () => {
    const arr = [10, 30, 50, 70, 90]
    const n = 700
    const res = findTwoNumbers2(arr, n)
    expect(res).toEqual([])
  })
})
