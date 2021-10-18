
function appendDom(){
    const body = document.querySelector('body')
    const header = document.createElement('header')
    const footer = document.createElement('footer')
    const aside = document.createElement('aside')
    const section = document.createElement('section')
    const container = document.createElement('div')
    container.classList.add('container')

    body.appendChild(header)
    container.appendChild(aside)
    container.appendChild(section)
    body.appendChild(container)
    body.appendChild(footer)
    
}

export default appendDom