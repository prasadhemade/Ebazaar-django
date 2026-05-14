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


// Used in Javascript for category view 
function filterProducts() {
            // Get the value selected in the dropdown
            const selectedValue = document.getElementById('category').value;
            // Select all product elements
            const products = document.querySelectorAll('.product');

            products.forEach(product => {
                // If "all" is selected or the product matches the category, show it
                if (selectedValue === 'all' || product.getAttribute('data-category') === selectedValue) {
                    product.classList.remove('hidden');
                } else {
                    // Otherwise, hide it
                    product.classList.add('hidden');
                }
            });
        }


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
