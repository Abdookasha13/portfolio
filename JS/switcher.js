// ============customize==============

const switcherToggler = document.getElementsByClassName('style-switcher-toggler')[0];
const switcher = document.getElementsByClassName('style-switcher')[0];


switcherToggler.addEventListener('click', function () {
    switcher.classList.toggle('open');
})

window.addEventListener('scroll', function () {
    if (switcher.classList.contains('open')) {
        switcher.classList.remove('open');
    }
})

const alternate = document.getElementsByClassName('alternate-style');

function setActiveStyle(color) {
    localStorage.setItem('color', color);
    changColor();
}

function changColor() {
    for (const item of alternate) {
        if (localStorage.getItem('color') === item.getAttribute('title')) {
            item.removeAttribute('disabled')
        }
        else {
            item.setAttribute('disabled', 'true')
        }
    }
}



// ================dark and light mode================
const dayNight = document.getElementsByClassName('day-night')[0];

dayNight.addEventListener('click', function () {
    dayNight.getElementsByTagName('i')[0].classList.toggle('fa-sun')
    dayNight.getElementsByTagName('i')[0].classList.toggle('fa-moon')
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})

window.addEventListener('load', function () {
    const icon = dayNight.getElementsByTagName('i')[0];
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    } else {
        document.body.classList.remove('dark');
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
})