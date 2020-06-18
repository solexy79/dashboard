const dropdown = document.querySelector('.fa-sort-desc');

const dropDownList = document.querySelector('.dropdown-list');

const dashdown = document.querySelector('.dashboard');


dropdown.addEventListener('click', () => {
   dropDownList.classList.toggle('drop');
  //  console.log('clicked');
  dashdown.classList.toggle('drop');
})