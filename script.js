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
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.src = 'sus.jpeg';
    }
}, 180000);

function show(id) {
    var element = document.getElementById(id);
    if (element && element.style) {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function updateLastModified() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    const lastUpdatedElement = document.querySelector('footer p:nth-child(2)');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = 'Last updated: ' + formattedDate;
        console.log('Date updated to: ' + formattedDate); 
    }
}

document.addEventListener('DOMContentLoaded', updateLastModified);

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(updateLastModified, 100);
}
