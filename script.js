const toggleNumbers = document.querySelector("#numbers-checkbox")
const toggleUpperCase = document.querySelector("#uppercase-checkbox")
const toggleSymbols = document.querySelector("#symbols-checkbox")
const pwdSize = document.querySelector("#rangenum")
const container = document.querySelector(".generated-pwd")
const generateButton = document.querySelector(".btn")


function generate(length) {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z"]
  const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  container.textContent = ""
  if (toggleNumbers.checked) letters = letters.concat(numbers)
  if (toggleUpperCase.checked) letters = letters.concat(upperCase)
  if (toggleSymbols.checked) letters = letters.concat(symbols.split(""))

  randomize(letters, length)

  function randomize(letters, length) {
    for (let index = 0; index < length; index++) {
      const pwd = letters[Math.floor(Math.random() * letters.length)]
      container.textContent += pwd

    }
  }
}



generateButton.addEventListener("click", () => { generate(pwdSize.value) })
