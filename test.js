// ---
// TEST No. 1
// ---
function reverseString(str) {
  let numbers = []
  let words = []

  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    let isNumber = parseInt(Number(item))
    if (typeof isNumber === 'number' && !isNaN(isNumber)) {
      numbers.push(`${isNumber}`)
    } else {
      words.push(item)
    }
  }

  const reversedWord = words.reverse().join('')
  const joinedNumber = numbers.join('')
  const result = [...reversedWord, ...joinedNumber].join('')
  return result
}

const originalString = 'NEGIE1'
const reversedString = reverseString(originalString)

console.log('Original string:', originalString, 'Reversed string:', reversedString)

const originalString2 = 'NEGIE1754'
const reversedString2 = reverseString(originalString2)

console.log('Original string2:', originalString2, 'Reversed string2:', reversedString2)

// ---
// TEST No. 2
// ---
function findLongest(sentence) {
  if (!sentence) return
  const words = sentence.split(' ')

  let longest = ''
  let longestLength = 0

  for (let i = 0; i < words.length; i++) {
    const item = words[i]
    if (item.length > longestLength) {
      longestLength = item.length
      longest = item
    }
  }

  return `${longest} : ${longestLength} character`
}

const sentence = findLongest('Saya sangat senang mengerjakan soal algoritma')
const sentence2 = findLongest('Internet cepat akan sangat membantu produktivitas')

console.log(sentence)
console.log(sentence2)

// ---
// TEST No. 3
// ---
let values = ['xc', 'dz', 'bbb', 'dz', 'dz', 'bbb', 'ac']
let arr = ['bbb', 'ac', 'dz']

function arrayFromValues(arr, values) {
  let resultArray = []

  for (let i = 0; i < arr.length; i++) {
    let count = 0
    const item = arr[i]
    for (let j = 0; j < values.length; j++) {
      const val = values[j]
      item === val && count++
    }
    resultArray.push(count)
  }
  return resultArray
}

console.log(arrayFromValues(arr, values), 'result')
