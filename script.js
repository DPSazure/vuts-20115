// script.js - Анимации и функциональность для тактического сайта

document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializePasswordProtection();
});

// Инициализация анимированных частиц
function initializeParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 20 + 10;
    const animationDelay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}vw`;
    particle.style.animationDuration = `${animationDuration}s`;
    particle.style.animationDelay = `${animationDelay}s`;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode === container) {
            particle.remove();
            createParticle(container);
        }
    }, animationDuration * 1000);
}

// Инициализация защиты паролем для страницы сотрудников ВУЦ
function initializePasswordProtection() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const passwordSection = document.getElementById('passwordSection');
    const contentSection = document.getElementById('contentSection');
    
    if (passwordInput) {
        // Обработчик для кнопки
        const checkPasswordButton = document.querySelector('.password-form button');
        if (checkPasswordButton) {
            checkPasswordButton.addEventListener('click', checkPassword);
        }
        
        // Обработчик для клавиши Enter
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
    
    function checkPassword() {
        const password = document.getElementById('passwordInput').value;
        const errorMessage = document.getElementById('errorMessage');
        const passwordSection = document.getElementById('passwordSection');
        const contentSection = document.getElementById('contentSection');
        
        if (password === '!qzwxecrvasdf654!') {
            passwordSection.style.display = 'none';
            contentSection.style.display = 'block';
            
            // Анимация появления контента
            contentSection.style.animation = 'contentReveal 0.8s ease-out';
        } else {
            errorMessage.textContent = 'Неверный пароль! Доступ запрещен.';
            document.getElementById('passwordInput').value = '';
            
            // Анимация ошибки
            errorMessage.style.animation = 'none';
            setTimeout(() => {
                errorMessage.style.animation = 'alertPulse 0.5s ease-in-out';
            }, 10);
        }
    }
}

// Дополнительные анимации для тактического эффекта
function addTacticalEffects() {
    // Добавляем эффект печатающего текста для заголовков
    const tacticalHeadings = document.querySelectorAll('h1, h2');
    tacticalHeadings.forEach(heading => {
        heading.style.overflow = 'hidden';
        heading.style.borderRight = '2px solid var(--accent)';
        heading.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
    });
}

// Анимация для кнопок при наведении
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, .cta-button, .forum-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Если ссылка ведет на якорь на этой же странице
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Анимация появления элементов при скролле
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'panelAppear 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за всеми секциями
    const sections = document.querySelectorAll('.section, .feature-card, .step, .info-card');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Инициализация всех функций при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializePasswordProtection();
    addTacticalEffects();
    initializeScrollAnimations();
});