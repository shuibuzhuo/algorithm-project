/**
 * @description 二分查找
 * @author shuibuzhuo
 */

/**
 * 二分查找（循环）
 */
export function binarySearch1(arr: number[], target: number): number {
  const length = arr.length

  if (length === 0) return -1

  // 定义初始值，最开始查找的范围是整个数组
  let startIndex = 0
  let endIndex = length - 1

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (midValue > target) {
      // 目标数较小，继续在左边查找
      endIndex = midIndex - 1
    } else if (midValue < target) {
      // 目标数较大，继续在右边查找
      startIndex = midIndex + 1
    } else {
      return midIndex
    }
  }

  return -1
}

/**
 * 二分查找（递归）
 * @param arr arr
 * @param target target
 * @param startIndex start index
 * @param endIndex end index
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
  const length = arr.length
  if (length === 0) return -1

  // 定义初始值，最开始查找的范围是整个数组
  if (startIndex == null) startIndex = 0
  if (endIndex == null) endIndex = length - 1

  if (startIndex > endIndex) return -1

  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]

  if (midValue > target) {
    // 目标数较小，继续在左边查找
    return binarySearch2(arr, target, startIndex, midIndex - 1)
  } else if (midValue < target) {
    // 目标数较大，继续在右边查找
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  } else {
    return midIndex
  }
}

// 功能测试
// const arr = [10, 20, 30, 40, 50]
// const target = 30
// const index = binarySearch2(arr, target)
// console.log('index', index)

// 性能测试
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const target = 90
console.time('binarySearch1')
for (let i = 0; i < 100 * 10000; i++) {
  binarySearch1(arr, target)
}
console.timeEnd('binarySearch1') // 15ms 循环比递归略快一点，但不是数量级的差别
console.time('binarySearch2')
for (let i = 0; i < 100 * 10000; i++) {
  binarySearch2(arr, target)
}
console.timeEnd('binarySearch2') // 24ms

export {}
