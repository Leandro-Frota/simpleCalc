const selectedTheme = window.localStorage.getItem('theme')
const selectedThemeRigth = window.localStorage.getItem('themeRigth')
const selectDarkLight = document.getElementById('selectDarkLight')
let body = document.querySelector('body');
let iconTheme = document.getElementById('iconTheme');

console.log(selectedTheme)

if(selectedTheme ==="dark"){
    body.classList.toggle('dark');
    body.classList.toggle('light');

    iconTheme.classList.toggle('fa-sun');
    iconTheme.classList.toggle('fa-moon');
}

if(selectedThemeRigth ==="eachCol right purple"){
    sideRigth.classList.toggle('yellow');
    sideRigth.classList.toggle('purple');


    selectDarkLight.value = "dark"
 
}