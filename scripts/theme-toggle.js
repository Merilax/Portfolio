let theme = localStorage.getItem('theme');
console.log(theme);

if (theme == null) {
    localStorage.setItem('theme', 'dark');
}

setTheme(theme);

function setTheme(th) {
    if (th == "light") {
        //console.log("light")
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-css').href = "styles/light.css";
    } else {
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-css').href = "styles/dark.css";
    }
}

function swapTheme() {
    theme = localStorage.getItem('theme');
    theme == "light" ?
        setTheme("dark") : setTheme("light");
}