import changeTheme from './theme-switcher.js'
import copyToClipboard from './copy-clipboard.js'
import { calculate, readClickKeys, clearResult, readKeyboard } from './all-the-other-functions.js'

//export const main = document.querySelector("main")
//export const root = document.querySelector(":root")
export const input = document.getElementById("input")
export const resultInput = document.getElementById("result")
export const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//botão copiar para área de transferência
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

//botão tema
document.getElementById("themeSwitcher").addEventListener("click", changeTheme)

//ler clique nas teclas
document.querySelectorAll(".charKey").forEach(readClickKeys)

//botão C
document.getElementById("clear").addEventListener("click", clearResult)

//botão =
document.getElementById("equal").addEventListener("click", calculate)

//ler tecla pressionada do teclado
input.addEventListener("keydown", readKeyboard)