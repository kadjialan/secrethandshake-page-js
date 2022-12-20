const holder = document.querySelector('.content')
const input = document.querySelector('.binary')
const done = document.querySelector('.button')

function binary () {
  const numb = input.value
  let result = parseInt(numb).toString(2)
  console.log(result)

  const range = [1000, 100, 10, 1]
  const text = ['jump', 'close your eyes', 'double blink', 'wink']

  const valid = result - 10000 > 0

  if (valid) {
    result -= 10000
  }
  const ans = []

  for (let i = 0; i < range.length; i++) {
    if (result - range[i] >= 0) {
      result -= range[i]
      ans.push(text[i])
    }
  }
  if (!valid) {
    ans.reverse()
  }
  return ans.join(', ')
}

done.addEventListener('click', () => {
  holder.innerHTML = binary(input.value)
})
