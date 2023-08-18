/**
 * @description 对称数
 * @author shuibuzhuo
 */

/**
 * 数组反转方式
 * @param max 最大值
 */
export function findPalindromeNumber1(max: number): number[] {
  const res: number[] = [] 
  if (max <= 0) return res

  for (let i = 1; i <= max; i++) {
    const s = i.toString()
    const rev = i.toString().split('').reverse().join('')
    if (s === rev) {
      res.push(i)
    }
  }

  return res
}

/**
 * 字符串头尾比较方式
 * @param max 最大值
 */
export function findPalindromeNumber2(max: number): number[] {
  const res: number[] = []
  if (max <= 0) return res

  for (let i = 1; i < max; i++) {
    const s = i.toString()
    const length = s.length
    let flag = true
    for (let j = 0; j < length; j++) {
      let startIndex = 0;
      let endIndex = length - 1

      if (s[startIndex] !== s[endIndex]) {
        flag = false
        break;
      } else {
        startIndex++
        endIndex--
      }
    }

    if (flag) res.push(i)
  }

  return res
}

export function findPalindromeNumber3(max: number): number[] {
  const res: number[] = []

  if (max <= 0) return res

  for (let i = 1; i <= max; i++) {
    let n = i
    let rev = 0

    while (n > 0) {
      rev = rev * 10 + n % 10
      n = Math.floor(n / 10)
    }

    if (i === rev) res.push(i)
  }

  return res
}

console.info(findPalindromeNumber3(200))
