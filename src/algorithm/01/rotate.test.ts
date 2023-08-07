import { describe, expect, test } from "vitest";
import { rotate2 } from "./rotate";

describe('数组旋转', () => {
  test('正常情况', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  
  test('数组为空', () => {
    // @ts-ignore
    const arr = []
    const k = 3
    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual([])
  })
  
  test('k 为负数', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -3
    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  
  test('k 不是数字', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 'abc'
    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })
  
  test('k 是 undefined', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = undefined
    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })
  
  test('k 是 0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = undefined
    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })
})


