const selectedTheme = window.localStorage.getItem('theme')
let body = document.querySelector('body');
let iconTheme = document.getElementById('iconTheme');

console.log(selectedTheme)

if(selectedTheme ==="dark"){
    body.classList.add('dark');
    body.classList.remove('light');

    iconTheme.classList.add('fa-sun');
    iconTheme.classList.remove('fa-moon');
}