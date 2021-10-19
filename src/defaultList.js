// Factory function for list objects
const ListObject = (name) =>{
    return {name}
}

// Elements of default list
const h1 = document.createElement('h1')
h1.textContent = 'Default List'

const inputBox = document.createElement('div')
inputBox.classList.add('inputBox')
const inputBtn = document.createElement('button')
inputBtn.textContent = 'New item'
const input = document.createElement('input')
input.setAttribute('id','newItem')

inputBox.appendChild(input)
inputBox.appendChild(inputBtn)

const div = document.createElement('div')
div.classList.add('listBox')


function defaultList(){
    div.appendChild(h1)
    div.appendChild(inputBox)
    return div
}

// Event listeners
inputBtn.addEventListener('click',()=>{
    if(input.value){
        let newItem = ListObject(input.value) 
        console.log(newItem)
    }else{
        console.log('invalid value')
    }
})

export default defaultList