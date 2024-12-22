const body = document.body;
const themeSwitchBtn = document.querySelector("#themeSwitchBtn");
let themeIcon = document.querySelector("#themeSwitchBtn i");
let themeIcons={
    "dark":"bi-sun",
    "light":"bi-moon"
}
// Local theme storage
localStorage = window.localStorage;
let currentTheme = localStorage.getItem("theme");
// Make theme as local storage
body.setAttribute('data-bs-theme', currentTheme);
body.classList.add(currentTheme)
// add btn theme icon
themeIcon.classList.add(themeIcons[currentTheme])
// Theme switch button function
function switchTheme() {
    if (body.classList.contains('dark')) {
        //switch to light
        body.classList.remove('dark');
        body.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove(themeIcons["dark"]);
        themeIcon.classList.add(themeIcons["light"]);
        themeIcon.setAttribute('title', 'Switch to dark Theme');
    } else {
        //switch to dark
        body.classList.add('dark');
        body.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.remove(themeIcons["light"]);
        themeIcon.classList.add(themeIcons["dark"]);
        themeIcon.setAttribute('title', 'Switch to light Theme');
    }
}
// Event listener for theme switch button
themeSwitchBtn.addEventListener('click', () => {
    switchTheme()
})