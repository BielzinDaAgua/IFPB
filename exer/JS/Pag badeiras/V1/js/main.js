import flags from './model/flags.js';

function getProjectFlag ({name, image}){
    return `<div class="flag col-2 my-2 text-center">
    <img src=${image} alt="${name}">
    <p>${name}</p>
  </div>`
}

const projectContent = flags.map((f) => getProjectFlag(f)).join('')
const projectContainer = document.querySelector('.row')
projectContainer.innerHTML = projectContent

