import { resultInput, input, allowedKeys } from "./main.js"

function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value) //se não conseguir avaliar, função finaliza nessa linha
  resultInput.value = result
  resultInput.classList.remove("error")
}

function readClickKeys(charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

function clearResult() {
  input.value = ""
  input.focus()
}

function readKeyboard(ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace" || ev.key === "Delete") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
}

export { calculate, readClickKeys, clearResult, readKeyboard }