// Elements of week list
const h1 = document.createElement('h1')
h1.textContent = 'Week\'s List'

const div = document.createElement('div')
div.classList.add('listBox')

function weekList(){
    div.appendChild(h1)
    return div
}

export default weekList