/**
 * @description 寻找 bst 的第 k 小值 test
 * @author shuibuzhuo
 */

import { describe, expect, it } from "vitest";
import { bst, findKthValue } from "./binary-search-tree";

describe('bst 第 k 小值', () => {
  it('正常情况', () => {
    const res = findKthValue(bst, 3)
    expect(res).toBe(4)
  })

  it('找不到的情况', () => {
    const res1 = findKthValue(bst, 0)
    expect(res1).toBeNull()

    const res2 = findKthValue(bst, 100)
    expect(res2).toBeNull()
  })
})
