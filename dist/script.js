let list = document.getElementById('list');
let exit = document.getElementById('exit');
let menu = document.querySelector('.menu');

list.addEventListener('click', (e) => {
  menu.classList.remove('hiddenlist');
  list.classList.add('hiddenlist');
  exit.classList.remove('hiddenlist');
  list.style.display ="none"
  exit.style.display ="block"
});

exit.addEventListener('click', (e) => {
  menu.classList.add('hiddenlist');
  list.classList.remove('hiddenlist');
  exit.classList.add('hiddenlist');
  exit.style.display ="none"
  list.style.display ="block"
});