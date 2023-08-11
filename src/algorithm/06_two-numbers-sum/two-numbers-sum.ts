/**
 * @description 两数之和
 * @author shuibuzhuo
 */

/**
 * @description 寻找和为 n 的两个数
 * @param arr 输入的数组
 * @param n 和
 * @returns 找出来的两个数
 */
export function findTwoNumbers(arr: number[], n: number): number[] {
  const res: number[] = []
  
  const length = arr.length
  if (length === 0) return res

  for (let i = 0; i < length; i++) {
    const n1 = arr[i]
    let flag = false

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j]
      if (n1 + n2 === n) {
        flag = true
        res.push(n1)
        res.push(n2)
        break
      }
    }

    if (flag) break
  }

  return res
}

// 功能测试
const arr = [10, 30, 50, 70, 80]
const res = findTwoNumbers(arr, 100)
console.log('res', res)

export {}
