// Manejar el efecto de desplazamiento del encabezado
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efectos de interacción y desplazamiento en los proyectos
document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar más características interactivas aquí si es necesario
    
    // Desplazamiento suave para enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Agrega cualquier funcionalidad adicional de JavaScript que necesite
    console.log('¡Portafolio de ALEXIDEV cargado exitosamente!');
});

// Manejar el efecto de desplazamiento del encabezado
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efectos de interacción y desplazamiento en los proyectos
document.addEventListener('DOMContentLoaded', function() {
    // Desplazamiento suave para enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Agregar funcionalidad para el logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('¡Portafolio de ALEXIDEV cargado exitosamente!');
});