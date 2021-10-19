// Elements of today list
const h1 = document.createElement('h1')
h1.textContent = 'Today\'s List'

const div = document.createElement('div')
div.classList.add('listBox')

function todayList(){
    div.appendChild(h1)
    return div
}

export default todayList