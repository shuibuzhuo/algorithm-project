/**
 * @description 获取字符串中连续最多的字符和次数
 * @author shuibuzhuo
 */

type ResType = {
  char: string
  len: number
}

/**
 * 嵌套循环
 * @param str 输入的字符串
 */
export function continuousChar(str: string): ResType {
  const res: ResType = {
    char: '',
    len: 0
  }

  const length = str.length
  if (length === 0) return res

  let tempLength = 0 // 临时变量，用于记录连续字符的长度
  
  for (let i = 0; i < length; i++) {
    tempLength = 0 // 重置
    
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++
      }
      if (str[i] !== str[j] || j === length - 1) {
        // i 和 j 指向的数不相等，或者 j 已经指向了最后一个元素，就判断一下当前的值和返回的值的大小
        if (tempLength > res.len) {
          res.char = str[i]
          res.len = tempLength
        }
        
        if (i < length - 1) {
          i = j - 1 // i 还没有走完，那么 i 就跳步
        }

        break;
      }
    }
  }

  return res
}

// 功能测试
const str = 'aaabbccd'
console.log(continuousChar(str))
