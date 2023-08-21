/**
 * @description 大小写转换 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { switchLetterCase1, switchLetterCase2 } from "./switch-letter-case";

describe('大小写转换', () => {
  it('正常情况', () => {
    const s = '123AbCd'
    const res = switchLetterCase2(s)
    expect(res).toBe('123aBcD')
  })
  it('没有字母', () => {
    const s = '100你好……'
    const res = switchLetterCase2(s)
    expect(res).toBe('100你好……')
  })
  it('空字符串', () => {
    const s = ''
    const res = switchLetterCase2(s)
    expect(res).toBe('')
  })
})
