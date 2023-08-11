/**
 * @description 两数之和
 * @author shuibuzhuo
 */

/**
 * @description 寻找和为 n 的两个数（嵌套循环）
 * @param arr 输入的数组
 * @param n 和
 * @returns 找出来的两个数
 */
export function findTwoNumbers1(arr: number[], n: number): number[] {
  const res: number[] = []
  
  const length = arr.length
  if (length === 0) return res

  for (let i = 0; i < length; i++) {
    // 先取出一个数
    const n1 = arr[i]

    // 定义一个标记，标记是否已经找到了另一个数
    let flag = false

    for (let j = i + 1; j < length; j++) {
      // 从第一个数的后一位开始找第二个数，即 i + 1
      const n2 = arr[j]

      if (n1 + n2 === n) {
        // 如果找到了
        flag = true
        res.push(n1)
        res.push(n2)
        // 提前终止循环，避免不必要的循环
        break
      }
    }

    // 如果找到了那两个数，提前终止循环，避免不必要的循环
    if (flag) break
  }

  return res
}

/**
 * @description 寻找和为 n 的两个数（双指针）
 * @param arr 输入的数组
 * @param n 和
 * @returns 找出来的两个数
 */
export function findTwoNumbers2(arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  // 利用双指针
  let i = 0
  let j = length - 1

  // 两个指针还没相遇的时候，进行循环
  while(i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1 + n2
    if (sum < n) {
      // 如果两数的和较小，则 i 向后移动
      i++
    } else if (sum > n) {
      // 如果两数的和较大，则 j 向前移动
      j--
    } else {
      res.push(n1)
      res.push(n2)
      break;
    }
  }

  return res
}

// 功能测试
const arr = [5, 10, 5, 10,5, 10,5, 10,5, 10,5, 10,5, 10,5, 10,5, 10,5, 10,5, 10, 30, 50, 70, 80]
// const res = findTwoNumbers2(arr, 100)
// console.log('res', res)

// 性能测试
console.time('嵌套循环')
for (let i = 0; i < 100 * 10000; i++) {
  findTwoNumbers1(arr, 100)
}
console.timeEnd('嵌套循环') // 399ms

console.time('双指针')
for (let i = 0; i < 100 * 10000; i++) {
  findTwoNumbers2(arr, 100)
}
console.timeEnd('双指针') // 49ms
export {}
