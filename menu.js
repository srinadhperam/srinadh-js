
const list = document.querySelectorAll('.list');

function activeLink(event) {
    list.forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));
