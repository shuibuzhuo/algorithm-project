/**
 * @description 斐波那契数列 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { fibonacci1, fibonacci2 } from "./fibonacci";

describe('斐波那契数列', () => {
  it('n 等于 0', () => {
    const res = fibonacci2(0)
    expect(res).toBe(0)
  })

  it('n 小于 0', () => {
    const res = fibonacci2(-1)
    expect(res).toBe(0)
  })

  it('n 是 1', () => {
    const res = fibonacci2(1)
    expect(res).toBe(1)
  })

  it('n 是 9', () => {
    const res = fibonacci2(9)
    expect(res).toBe(34)
  })
})
