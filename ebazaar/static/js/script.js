const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-menu');


const navDialog = document.getElementById('nav-dialog')

function handleMenu() {
    navDialog.classList.toggle('hidden');
}

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// const button = document.getElementById('dropdownButton');
// const menu = document.getElementById('myDropdown');

// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });


// // Optional: Close the menu when clicking outside
// window.addEventListener('click', (e) => {
//   if (!button.contains(e.target) && !menu.contains(e.target)) {
//     menu.classList.add('hidden');
//   }
// });


/* When the user clicks on the button, toggle between hiding and showing the content */
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
