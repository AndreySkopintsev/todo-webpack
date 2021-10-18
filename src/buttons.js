

function inboxBtn(){
    const section = document.querySelector('section')
    const button = document.createElement('button')
    button.setAttribute('id','inboxBtn')
    button.textContent = 'Inbox'
    button.addEventListener('click',()=>{
        section.style.background = 'red'
    })
    
    return button
}

function todayBtn(){
    const section = document.querySelector('section')
    const button = document.createElement('button')
    button.textContent = 'Today'
    button.addEventListener('click',()=>{
        section.style.background = 'blue'
    })
    
    return button
}

function weekBtn(){
    const section = document.querySelector('section')
    const button = document.createElement('button')
    button.textContent = 'This week'
    button.addEventListener('click',()=>{
        section.style.background = 'green'
    })
    
    return button
}

export {inboxBtn,todayBtn,weekBtn}