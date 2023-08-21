/**
 * @description 切换字母大小写
 * @author shuibuzhuo
 */

export function switchLetterCase1(str: string): string {
  let res = ''
  const length = str.length

  if (length === 0) return res

  const reg1 = /[A-Z]/
  const reg2 = /[a-z]/

  for (let i = 0; i < length; i++) {
    const c = str[i]
    if (reg1.test(c)) {
      res += c.toLowerCase()
    } else if (reg2.test(c)) {
      res += c.toUpperCase()
    } else {
      res += c
    }
  }

  return res
}

export function switchLetterCase2(str: string): string {
  let res = ''
  const length = str.length

  if (length === 0) return res

  for (let i = 0; i < length; i++) {
    const c = str[i]
    const code = c.charCodeAt(0)

    if (code >= 65 && code <= 90) {
      res += c.toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase()
    } else {
      res += c
    }
  }

  return res
}

// // 功能测试
// const s = '123AbCd'
// console.log(switchLetterCase2(s))

// 性能测试
const s = '123AbCd123AbCd123AbCd123AbCd123AbCd123AbCd123AbCd123AbCd123AbCd'
console.time('reg')
for (let i = 0; i <= 10 * 10000; i++) {
  switchLetterCase1(s)
}
console.timeEnd('reg') // 312 ms

console.time('charCodeAt')
for (let i = 0; i <= 10 * 10000; i++) {
  switchLetterCase2(s)
}
console.timeEnd('charCodeAt') // 111 ms
