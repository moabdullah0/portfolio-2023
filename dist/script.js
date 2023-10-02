let list = document.getElementById('list');
let exit = document.getElementById('exit');
let menu = document.querySelector('.menu');
let reveals =document.querySelectorAll('.reveal')

list.addEventListener('click', (e) => {
  menu.classList.remove('hiddenlist');
  list.classList.add('hiddenlist');
  exit.classList.remove('hiddenlist');
  list.style.display = "none";
  exit.style.visibility = "visible";
});

exit.addEventListener('click', (e) => {
  menu.classList.add('hiddenlist');
  list.classList.remove('hiddenlist');
  exit.classList.add('hiddenlist');
  exit.style.visibility = "hidden";
  list.style.display = "block";
});

//reveal




// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const windowHeight = window.innerHeight;
  const revealTop = el.getBoundingClientRect().top;
  const revealPoint = 150;

  return revealTop < windowHeight - revealPoint;
}

// Function to handle the scroll event
function handleScroll() {
  for (let i = 0; i < reveals.length; i++) {
    if (isElementInViewport(reveals[i])) {
      reveals[i].classList.add('active');
    }
  }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);


handleScroll();
