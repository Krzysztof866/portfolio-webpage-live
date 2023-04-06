const footerYear = document.querySelector('.footer__year');
const nav = document.querySelector('nav');
const but = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item')



const addNav = () => {
    nav.classList.toggle('nav--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        });
    });
}


but.addEventListener('click', addNav);


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();


// constact email


window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");


    function success() {
        form.reset();
        status.innerHTML = "Twoja wiadomość została wysłana.";
    }


    function error() {
        status.innerHTML = "Ups! Coś poszło nie tak. Sprawdź pola.";
    }


    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
};



