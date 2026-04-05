/**
 * 1. THEME SWITCHER
 */
const toggleSwitch = document.querySelector('#checkbox');
const html = document.documentElement;

function switchTheme(e) {
    if (e.target.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('portfolio-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('portfolio-theme');
if (currentTheme) {
    html.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

/**
 * 2. TYPING EFFECT
 * Updated roles for an Intermediate Developer focus
 */
const typedSpan = document.getElementById('typed');
const roles = ["Web Developer.", "API Integrator.", "Interface Designer.", "Logic Problem Solver."];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
        typedSpan.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typedSpan.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
    }

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIdx === currentRole.length) {
        speed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 500;
    }

    setTimeout(type, speed);
}

window.onload = type;

/**
 * 3. PROJECT FILTERING
 */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const target = button.getAttribute('data-target');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (target === 'all' || target === category) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
}); 
