const body = document.querySelector('body')
import {inboxBtn,weekBtn,todayBtn} from './buttons'

function createContainer(){
    const aside = document.createElement('aside')
    const section = document.createElement('section')
    const container = document.createElement('div')
    container.classList.add('container')

    
    container.appendChild(aside)
    container.appendChild(section)
    body.appendChild(container)
}

function fillAside(){
    const aside = document.querySelector('aside')
    const mainBtns = document.createElement('div')
    mainBtns.classList.add('mainBtns')
    const projects = document.createElement('div')
    projects.classList.add('projectsBox')
    aside.appendChild(mainBtns)
    aside.appendChild(projects)

    mainBtns.appendChild(inboxBtn())
    mainBtns.appendChild(todayBtn())
    mainBtns.appendChild(weekBtn())

    document.addEventListener("DOMContentLoaded", function(event) { 
        document.getElementById("inboxBtn").click();
    });

    projects.innerHTML = `
    <h2>Projects</h2>
    <button>New project</button>
    `
}

function createFooter(){
    const footer = document.createElement('footer')
    body.appendChild(footer)
}

function createHeader(){
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    h1.textContent = 'To-do List'
    header.appendChild(h1)
    body.appendChild(header)
}


function appendDom(){
    createHeader()
    createContainer()
    createFooter()
    fillAside()
}
    

export default appendDom