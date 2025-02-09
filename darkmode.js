let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
    localStorage.setItem('darkmode', 'active');
    switchTextClass('text-danger', 'text-primary');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    localStorage.setItem('darkmode', 'inactive');
    switchTextClass('text-primary', 'text-danger');
}

const switchTextClass = (addClass, removeClass) => {
    const elements = document.querySelectorAll(`.${removeClass}`);
    elements.forEach(element => {
        element.classList.remove(removeClass);
        element.classList.add(addClass);
    });
}

if (darkmode === 'active') {
    enableDarkmode();
} else {
    disableDarkmode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});