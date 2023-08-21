/**
 * @description 千分位格式化
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { thousandsFormat1 } from "./thousands-format";

describe('千分位格式化', () => {
  it('正常情况', () => {
    const n = 123456789
    const res = thousandsFormat1(n)
    expect(res).toBe('123,456,789')
  })

  it('小于 1000', () => {
    expect(thousandsFormat1(0)).toBe('0')
    expect(thousandsFormat1(10)).toBe('10')
    expect(thousandsFormat1(100)).toBe('100')
  })
})
