import saySomething from './test'

const body = document.querySelector('body')
const btn = document.createElement('button')
body.appendChild(btn)
btn.textContent = 'press here'

btn.addEventListener('click',saySomething)