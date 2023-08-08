/**
 * @description 判断一个字符串是否括号匹配 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { matchBrackets } from "./match-brackets";

describe('判断一个字符串是否括号匹配', () => {
  it('正常情况', () => {
    const str = '(a{b[c]d}e)'
    const res = matchBrackets(str)
    expect(res).toBe(true)
  })
  it('空字符串', () => {
    const str = ''
    const res = matchBrackets(str)
    expect(res).toBe(true)
  })
  it('左括号多了一个', () => {
    const str = '(a({b[c]d}e)'
    const res = matchBrackets(str)
    expect(res).toBe(false)
  })
  it('右括号多了一个', () => {
    const str = '(a{b[c]d})e)'
    const res = matchBrackets(str)
    expect(res).toBe(false)
  })
  it('括号数量相等，但不匹配', () => {
    const str = '(a(b[c]d}e)'
    const res = matchBrackets(str)
    expect(res).toBe(false)
  })
})
