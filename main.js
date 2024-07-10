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


function submitForm(event)  {
    event.preventDefault();

// let submission = document.getElementById('Disc');
// submission.innerHTML = darkMode
// } else {

//     alert("REERI you done");

// });

let formData = new FormData(event.target);
let submitForm = formData.get('');
alert(`Thank You, ${''}! Form submitted.`);
    

}
