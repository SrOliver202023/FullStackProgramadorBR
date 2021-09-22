const titleContainer = document.querySelector('.titleContainer');
const modal = document.querySelector('.modal');
const toChange = document.querySelector('.toChange');
const btnSend = document.querySelector('.btnSend');
const btnQuit = document.querySelector('.quit');

toChange.addEventListener('input', (e)=> e.target.value == ""? titleContainer.innerText = `The Container`: titleContainer.innerText = toChange.value);
btnSend.addEventListener('click', ()=> modal.style.display = "initial");
btnQuit.addEventListener('click', ()=> modal.style.display = "none");