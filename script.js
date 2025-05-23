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

async function fetchLastCommitDate() {
    const owner = 'Arielogg';
    const repo = 'Arielogg.github.io';
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const commits = await response.json();
        if (commits && commits.length > 0) {
            const lastCommitDateStr = commits[0].commit.committer.date;
            const lastCommitDate = new Date(lastCommitDateStr);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = lastCommitDate.toLocaleDateString('en-US', options);
            
            const lastUpdatedElement = document.getElementById('lastUpdated');
            if (lastUpdatedElement) {
                lastUpdatedElement.textContent = 'Last updated: ' + formattedDate;
            }
        } else {
            const lastUpdatedElement = document.getElementById('lastUpdated');
            if (lastUpdatedElement) {
                lastUpdatedElement.textContent = 'Last updated: N/A';
            }
        }
    } catch (error) {
        console.error('Failed to fetch last commit date:', error);
        const lastUpdatedElement = document.getElementById('lastUpdated');
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = 'Last updated: Error fetching date';
        }
    }
}

// Theme management
function initTheme() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    }
}

function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcon(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon(true);
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.classList.add('dark');
                updateThemeIcon(true);
            } else {
                document.documentElement.classList.remove('dark');
                updateThemeIcon(false);
            }
        }
    });
    
    fetchLastCommitDate();
});
