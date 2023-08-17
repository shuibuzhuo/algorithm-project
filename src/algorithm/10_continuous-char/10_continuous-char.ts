/**
 * @description 获取字符串中连续最多的字符和次数
 * @author shuibuzhuo
 */

type ResType = {
  char: string
  len: number
}

/**
 * @param str 输入的字符串
 */
function continuousChar(str: string): ResType {
  const res: ResType = {
    char: '',
    len: 0
  }

  const length = str.length
  if (length === 0) return res

  
  for (let i = 0; i < length; i++) {
    let tempLength = 0 // 临时变量，用于记录长度
    
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++
      }
      if (str[i] !== str[j] || j === length - 1) {
        if (tempLength > res.len) {
          res.char = str[i]
          res.len = tempLength
        }
        
        i = j - 1
        break;
      }
    }
  }

  return res
}

// 功能测试
const str = 'aaabbccd'
// console.log(continuousChar(str))
