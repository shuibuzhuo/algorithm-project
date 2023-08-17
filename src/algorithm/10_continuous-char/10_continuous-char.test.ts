/**
 * @description 获取字符串中连续最多的字符和次数 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { continuousChar } from "./10_continuous-char";

describe('获取字符串中连续最多的字符和次数', () => {
  it('正常情况', () => {
    const str = 'aaabbccd'
    const res = continuousChar(str)
    expect(res).toEqual({ char: 'a', len: 3 })
  })
  it('空字符串', () => {
    const str = ''
    const res = continuousChar(str)
    expect(res).toEqual({ char: '', len: 0 })
  })
  it('没有连续', () => {
    const str = 'abc'
    const res = continuousChar(str)
    expect(res).toEqual({ char: 'a', len: 1 })
  })
  it('全是连续', () => {
    const str = 'aaaaa'
    const res = continuousChar(str)
    expect(res).toEqual({ char: 'a', len: 5 })
  })
})
