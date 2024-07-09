const darkMode = document.getElementById('dark-mode');
const body = document.body;


darkMode.addEventListener('click', function() {
    
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        body.classList.add('dark-mode');
    }
});


const lightMode = document.getElementById('light-mode');
const body2 = document.body;



lightMode.addEventListener('click', function() {
    
    body.classList.toggle('light-mode');


if (body.classList.contains('light-mode')) {
    localStorage.setItem('mode', 'light');
} else {
    localStorage.setItem('mode', 'dark');
}
});


document.addEventListener('DOMContentLoaded', function() {
    const mode = localStorage.getItem('mode');

    if (mode === 'light') {
        body.classList.add('light-mode');
    }
});
