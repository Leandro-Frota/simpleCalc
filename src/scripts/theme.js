let themeButton = document.getElementById('themeButton');
let iconTheme = document.getElementById('iconTheme');
let themeButtonRight = document.getElementById('themeButtonRight')
let iconTheme2 = document.getElementById('iconTheme2')
let sideRigth = document.getElementById('sideRigth')

let body = document.querySelector('body');

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    iconTheme.classList.toggle('fa-moon');
    iconTheme.classList.toggle('fa-sun');
});

themeButtonRight.addEventListener('click',function(){
    sideRigth.classList.toggle('yelow')
    sideRigth.classList.toggle('purple')

    iconTheme2.classList.toggle('fa-moon');
    iconTheme2.classList.toggle('fa-sun');
})



