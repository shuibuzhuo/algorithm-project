/**
 * @description 反转数 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { findPalindromeNumber1, findPalindromeNumber2, findPalindromeNumber3 } from "./palindrome-number";

describe('翻转数', () => {
  it('正常情况', () => {
    const res = findPalindromeNumber3(200)
    expect(res.length).toBe(28)
  })
  it('max 小于等于 0', () => {
    const res = findPalindromeNumber3(-1)
    expect(res).toEqual([])
  })
})
