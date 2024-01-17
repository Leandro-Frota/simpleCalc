let themeButton = document.getElementById('themeButton');
let iconTheme = document.getElementById('iconTheme');
let themeButtonRight = document.getElementById('themeButtonRight')
// let iconTheme2 = document.getElementById('iconTheme2')
let selectDarkLight = document.getElementById('selectDarkLight')
let valueSelect = selectDarkLight.options
let sideRigth = document.getElementById('sideRigth')

let body = document.querySelector('body');

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    iconTheme.classList.toggle('fa-moon');
    iconTheme.classList.toggle('fa-sun');
});

selectDarkLight.addEventListener('change',function(){

console.log(selectDarkLight.value)

    if(selectDarkLight.value== 'dark'){
        sideRigth.classList.remove('yellow')
        sideRigth.classList.add('purple')
    }else if(selectDarkLight.value== 'ligth'){
        sideRigth.classList.remove('purple')
        sideRigth.classList.add('yellow')
    }
    // sideRigth.classList.toggle('yelow')
    // sideRigth.classList.toggle('purple')

    // iconTheme2.classList.toggle('fa-moon');
    // iconTheme2.classList.toggle('fa-sun');
})




