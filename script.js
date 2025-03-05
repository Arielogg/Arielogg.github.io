window.addEventListener('scroll', function() {
    const navbarName = document.getElementById('navbar-name');
    if (window.scrollY > 100) {
        navbarName.classList.remove('opacity-0');
        navbarName.classList.add('opacity-100');
    } else {
        navbarName.classList.remove('opacity-100');
        navbarName.classList.add('opacity-0');
    }
});

setTimeout(function() {
    document.getElementById('profile-pic').src = 'sus.jpeg';
}, 180000);

function show(id) {
var element = document.getElementById(id);
if (element.style.display === "none") {
    element.style.display = "block";
} else {
    element.style.display = "none";
}
}

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options).replace(/\//g, '/');
    
    const lastUpdatedElement = document.querySelector('footer p:nth-child(2)');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = 'Last updated ' + formattedDate;
    }
});
