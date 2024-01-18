let themeButton = document.getElementById('themeButton');
let selectDarkLight = document.getElementById('selectDarkLight')
let sideRigth = document.getElementById('sideRigth')

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    window.localStorage.setItem("theme", body.classList.value)

    iconTheme.classList.toggle('fa-moon');
    iconTheme.classList.toggle('fa-sun');

});

selectDarkLight.addEventListener('change', function () {

    console.log(selectDarkLight.value)

    if (selectDarkLight.value == 'dark') {
        sideRigth.classList.remove('yellow')
        sideRigth.classList.add('purple')
    } else if (selectDarkLight.value == 'ligth') {
        sideRigth.classList.remove('purple')
        sideRigth.classList.add('yellow')
    }
})





