/**
 * @description 移动 0 到末尾
 * @author shuibuzhuo
 */

/**
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

const arr = [1, 3, 0, 5, 8, 0, 0]
moveZero1(arr)
console.log(arr)
