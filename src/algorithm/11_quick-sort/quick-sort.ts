/**
 * @description 快速排序
 * @author shuibuzhuo
 */

/**
 * splice
 */
export function quickSort1(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = Math.floor(length / 2)
  const midValue = arr.splice(midIndex, 1)[0]

  const left: number[] = []
  const right: number[] = []

  // 要取 arr.length，因为 splice 修改了原数组
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i] 
    if (n < midValue) {
      // 当前的值小于 midValue
      left.push(n)
    } else {
      // 当前的值大于 midValue
      right.push(n)
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right))
}

/**
 * slice
 */
export function quickSort2(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = Math.floor(length / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]

  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < length; i++) {
    // 要排除 midIndex
    if (i !== midIndex) {
      const n = arr[i]
      if (n < midValue) {
        left.push(n)
      } else {
        right.push(n)
      }
    }
  }

  return quickSort2(left).concat([midValue], quickSort2(right))
}

// 功能测试
const arr = [1, 3, 2, 5, 4, 9, 7, 8]
console.log(quickSort2(arr))
