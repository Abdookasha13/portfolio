// =============typing=====================
var typed = new Typed('.typing', {
    strings: ['Web Designer', 'Web Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// =============aside=================
const nav = document.getElementsByClassName('nav')[0];
const navList = nav.getElementsByTagName('li');
const sections = document.getElementsByClassName('section');

for (const e of navList) {
    const a = e.querySelector('a');
    a.addEventListener('click', function () {
        for (const element of navList) {
            element.querySelector('a').classList.remove('active')
        }
        this.classList.add('active');

        const target = this.href.split('#')[1];
        for (const section of sections) {
            if (section.classList.contains('active')) {
                section.classList.add('back-section');
            }
            else {
                section.classList.remove('back-section');
            }
            section.classList.remove('active')

        }
        document.querySelector('#' + target).classList.add('active');

    })
}


// ===============togler btn aside=============
const asideTogglerBtn = document.getElementsByClassName('nav-toggler')[0];
const aside = document.getElementsByClassName('aside')[0];

asideTogglerBtn.addEventListener('click', function () {
    aside.classList.toggle('open');
    asideTogglerBtn.classList.toggle('open');
    for (const s of sections) {
        s.classList.toggle('open');
    }
})




