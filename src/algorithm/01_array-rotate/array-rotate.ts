/**
 * @description 把一个数组旋转 k 步
 * @author shuibuzhuo
 */

/**
 * pop unshift
 * @param arr arr
 * @param k k 步
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  // 取绝对值，以防 k 是负数
  // 取余，以防 k 大于 length
  const step = Math.abs(k % length)

  // O(n^2)
  for (let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n != null) {
      arr.unshift(n)
    }
  }

  return arr
}

/**
 * concat
 * @param arr arr
 * @param k k 步
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length)

  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  const part3 = part1.concat(part2)

  return part3
}

// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const res = rotate2(arr, 3)
// console.log('res', res)

// 性能测试
// rotate1 1002ms
const k = 90000
const arr1 = []
for (let i = 0; i < 10 * 10000; i++) {
  arr1.push(i)
}
console.time('rotate1')
rotate1(arr1, k)
console.timeEnd('rotate1')

// rotate2 0.47ms
const arr2 = []
for (let i = 0; i < 10 * 10000; i++) {
  arr2.push(i)
}
console.time('rotate2')
rotate2(arr2, k)
console.timeEnd('rotate2')
