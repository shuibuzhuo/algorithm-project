/**
 * @description 判断一个字符串是否括号匹配
 * @author shuibuzhuo
 */

/**
 * @description 判断左右括号是否匹配
 * @param left 左括号
 * @param right 右括号
 */
function isMatch(left: string, right: string): boolean {
  if (left === '(' && right === ')') return true
  if (left === '[' && right === ']') return true
  if (left === '{' && right === '}') return true
  return false
}

/**
 * @description 判断一个字符串是否括号匹配
 * @param str 
 */
export function matchBrackets(str: string): boolean {
  const length = str.length
  if (length === 0) return true

  // 所有括号的可能性
  const leftSymbols = '{(['
  const rightSymbols = '})]'

  // 定义栈
  const stack = []

  for (let i = 0; i < length; i++) {
    const s = str[i]
    if (leftSymbols.includes(s)) {
      // 是左括号，则压栈
      stack.push(s)
    } else if (rightSymbols.includes(s)) {
      // 是右括号，则取出栈顶元素，作比较
      const top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        // 括号匹配，则出栈
        stack.pop()
      } else {
        // 一个括号不匹配，就返回 false
        return false
      }
    }
  } 

  // 等于 0，说明括号都是匹配的
  return stack.length === 0
}

// 功能测试
const str = '(a{b[c]d}e)'
const res = matchBrackets(str)
console.log('res', res)

export {}
