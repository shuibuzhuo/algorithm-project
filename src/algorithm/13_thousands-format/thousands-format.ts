/**
 * @description 千分位格式化
 * @author shuibuzhuo
 */

/**
 * 利用数组方法
 * @param n 数字
 */
export function thousandsFormat1(n: number): string {
  // 处理 n 是小数的情况
  n = Math.floor(n)

  const s = n.toString()
  // 从后往前处理
  const arr = s.split('').reverse()

  let res 

  res = arr.reduce((prev, cur, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return cur + ',' + prev
      } else {
        return cur + prev
      }
    } else {
      return cur + prev
    }
  }, '')

  return res
}

/**
 * 字符串形式
 * @param n 数字
 */
export function thousandsFormat2(n: number): string {
  // 处理 n 是小数的情况
  n = Math.floor(n)

  const s = n.toString()
  const length = s.length

  let res = ''

  for (let i = length - 1; i >= 0; i--) {
    const j = length - i
    const c = s[i]

    if (j % 3 === 0) {
      if (i === 0) {
        res = c + res
      } else {
        res = ','  + c  + res 
      }
    } else {
      res = c + res
    }
  }

  return res
}

// 功能测试
const n = 123456789
const res = thousandsFormat2(n)
console.log('res', res)
