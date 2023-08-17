/**
 * @description 移动 0 到末尾
 * @author shuibuzhuo
 */

/**
 * 嵌套循环
 * @param arr 需要操作的数组
 */
export function moveZero1(arr: number[]): void {
  const length = arr.length

  if (length === 0) return

  // 记录 0 的长度
  let zeroLength = 0
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      // 末尾添加个 0
      arr.push(0)
      // 删除当前元素
      arr.splice(i, 1)
      // 如果当前是 0，要回退到前一个元素，继续往后处理，防止连续 0 的情况
      i--
      // 记录 0 的长度
      zeroLength++
    }
  }
}

export function moveZero2(arr: number[]): void {
  const length = arr.length

  if (length === 0) return

  let i
  let j = -1 // 始终指向第一个 0

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // 出现了第一个 0，此时如果 j 还没有指向，就把 j 指向 i，也就时第一个 0
      if (j < 0) {
        j = i
      }
    } 

    if (arr[i] !== 0 && j >= 0) {
      // 交换
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n
      
      j++
    }
  }
}

const arr = [1, 3, 0, 5, 8, 0, 0]
moveZero2(arr)
console.log(arr)
