const signinBtn = document.querySelector('#signin-btn');
const signinTable = document.querySelector('#signin-table');

signinBtn.addEventListener('click', () => {
  signinTable.style.display = 'block';
});
const navLinks = document.querySelectorAll('.nav-link'); // get all the links in the navbar

function handleClick(event) {
    event.preventDefault(); 
    const targetId = event.target.getAttribute('href').slice(1); 
    const targetElement = document.getElementById(targetId); 
    targetElement.scrollIntoView({ behavior: 'smooth' }); 
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', handleClick);
  });
