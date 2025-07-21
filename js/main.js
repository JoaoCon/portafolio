document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const scrollThreshold = 50;

    function updateHeaderTransparency() {
        if (!header) return;
        const currentScrollY = window.scrollY;
        if (currentScrollY > scrollThreshold) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.boxShadow = '0 2px 10px rgba(255, 0, 0, 0.11)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            header.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateHeaderTransparency);

    header.addEventListener('mouseenter', () => {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        header.style.boxShadow = '0 2px 10px rgba(255, 0, 0, 0.11)';
    });

    header.addEventListener('mouseleave', () => {
        updateHeaderTransparency();
    });
    updateHeaderTransparency();

    const scrollDownBtn = document.getElementById('scroll-down-btn');
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');

    function toggleScrollButtonsVisibility() {
        if (!scrollDownBtn || !scrollUpBtn || !homeSection || !aboutSection) {
            console.warn('Alguno de los elementos de scroll no fue encontrado.');
            return; 
        }

        const currentScrollY = window.scrollY;

        const headerHeight = header ? header.offsetHeight : 0; 

        if (currentScrollY > window.innerHeight * 0.8) {
            scrollUpBtn.classList.remove('hidden');
        } else {
            scrollUpBtn.classList.add('hidden');
        }

        const nearBottom = (currentScrollY + window.innerHeight) >= (document.body.scrollHeight - 100);

        // if (currentScrollY < (homeSection.offsetHeight / 2) && !nearBottom) {
        //     scrollDownBtn.classList.remove('hidden');
        // } else {
        //     scrollDownBtn.classList.add('hidden');
        // }
    }

    window.addEventListener('scroll', toggleScrollButtonsVisibility);

    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const headerOffset = header.offsetHeight;
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            console.log(`Scrolling to ${elementId}, offset: ${offsetPosition}`);
        } else {
            console.error(`Element with ID ${elementId} not found for scroll.`);
        }
    }

    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            scrollToElement('contact');
        });
    }

    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', () => {
            console.log('Click en scrollUpBtn');
            scrollToElement('home');
        });
    }

    toggleScrollButtonsVisibility();
    
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (document.getElementById('typed-output')) {
        new Typed('#typed-output', {
            strings: [
                "&lt;/ Hola, soy Cristian Contreras &gt;", 
                "&lt;/ Desarrollador Full Stack &gt;", 
                "&lt;/ Analista de Datos &gt;", 
                "&lt;/ ¡Bienvenido a mi Portafolio! &gt;"
            ], 
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            loopCount: Infinity,
        });
    }
    
const projectsData = {
    "reloj-control": {
        title: "Sistema de Gestión Horaria: Reloj Control",
        image: "img/proyectos/reloj-control-full.png",
        description: "Desarrollé un sistema crucial para la gestión del registro horario digital en el área de Recursos Humanos de la universidad. La plataforma permitía la activación o desactivación personalizada del marcaje para empleados específicos, así como la gestión masiva por áreas de teletrabajo, con funcionalidades para manejar excepciones y beneficios permanentes. Mi trabajo incluyó el backend robusto con Python (Django) y su ORM, una API REST con JavaScript para peticiones AJAX, y la creación de procedimientos almacenados, vistas y triggers en la base de datos para asegurar la integridad y eficiencia de los datos. La interfaz de usuario fue construida con HTML, CSS, Bootstrap y jQueryUI."
    },
    "postulacion-teletrabajo": {
        title: "Flujo Digital de Postulación al Teletrabajo",
        image: "img/proyectos/postulacion-teletrabajo-full.png",
        description: "Implementé la digitalización integral del proceso de postulación al beneficio de teletrabajo, transformando un flujo manual en una plataforma eficiente. Los funcionarios podían completar un formulario web detallado, adjuntar documentación y describir su caso. El sistema orquestaba un complejo flujo de visación secuencial (jefe directo, RRHH, Prevención de Riesgos, con opciones de apelación). El desarrollo incluyó Python (Django), su ORM, y la creación de procedimientos almacenados para la lógica de negocio. La interfaz se construyó con HTML, CSS, Bootstrap y jQueryUI. El proceso culminaba con la generación y firma digital de un convenio en PDF, y la activación automática del marcaje digital en el sistema correspondiente."
    },
    "postulacion-casino": {
        title: "Gestión de Postulaciones: Beneficio Casino",
        image: "img/proyectos/postulacion-casino-full.png",
        description: "Diseñé y desarrollé un módulo para la postulación al beneficio de almuerzo gratuito en el casino universitario. Este sistema digitalizó la solicitud y el flujo de visaciones, que comprendía la aprobación del jefe directo y la unidad de Recursos Humanos. La lógica de negocio fue implementada usando Python (Django) y su ORM, complementado con procedimientos almacenados para la gestión de estados y aprobaciones. La experiencia de usuario fue creada con HTML, CSS, Bootstrap y jQueryUI, garantizando un proceso ágil y transparente para los funcionarios hasta la activación final del beneficio."
    },
    "cupones-casino": {
        title: "Módulo de Cupones QR para Beneficio Casino",
        image: "img/proyectos/cupones-casino-full.png",
        description: "Creé el módulo 'Beneficio Casino' que permite a los funcionarios generar y gestionar cupones QR para acceder al servicio de almuerzo. El principal reto de este proyecto fue la integración bidireccional con 'HADES', un sistema de validación de cupones (estudiantes y funcionarios) desarrollado en PHP. Desarrollé este módulo utilizando Python (Django) y su ORM para la lógica de negocio y la generación de los códigos QR. La interacción frontend se manejó con JavaScript, HTML, CSS, Bootstrap y jQueryUI, asegurando una comunicación fluida y segura entre ambos sistemas a través de API REST y procedimientos almacenados."
    },
    "reportes-matricula": {
        title: "Dashboard de Reportes de Matrícula",
        image: "img/proyectos/reportes-matricula-full.png",
        description: "Durante el crucial proceso de matrícula, fui el principal encargado del desarrollo y mantenimiento de los reportes visuales accesibles en el sitio web institucional. Generé un dashboard completo que proporcionaba a las autoridades universitarias un conteo exacto y preciso del estado actual de la matrícula en tiempo real. Utilicé Python para el procesamiento de datos y la generación de informes (con librerías como ReportLab para PDFs si aplica, o para otras exportaciones), y JavaScript en el frontend para la interactividad. La presentación visual se logró con HTML, CSS, Bootstrap y jQueryUI. Mi rol también incluyó la resolución de incidencias de primera línea, proporcionando soluciones rápidas a estudiantes con procesos erróneos o fallidos."
    },
    "formulacion-presupuestaria": {
        title: "Soporte y Carga: Formulación Presupuestaria",
        image: "img/proyectos/formulacion-presupuestaria-full.png",
        description: "Contribuí significativamente al vital proceso de Formulación Presupuestaria, donde cada unidad universitaria define sus requerimientos de capital para el siguiente año fiscal (proyectos, personal, honorarios, etc.). Mi participación abarcó la carga masiva de propuestas iniciales utilizando scripts en Python y manipulación directa en base de datos mediante procedimientos almacenados y triggers. También brindé soporte técnico continuo durante el desarrollo del módulo principal y fui responsable de crear contenido audiovisual (guías) para capacitar a los usuarios en el proceso. La interacción con la plataforma se basó en HTML, CSS, Bootstrap y jQueryUI."
    },
    "sistema-eventos": {
        title: "Sistema de Gestión de Eventos y Control de Acceso",
        image: "img/proyectos/sistema-eventos-full.jpeg",
        description: "En colaboración con un talentoso practicante llamado Martin Orlando Calquín Marambio, diseñé y desarrollé un sistema integral de eventos para la universidad. La plataforma permitía a los administradores crear y gestionar eventos, generar invitaciones individuales con códigos QR para cada estudiante, y controlar el acceso mediante el escaneo de dichos códigos. La lógica de backend fue implementada con Python (Django) y su ORM, utilizando procedimientos almacenados para optimizar la gestión de datos. La interfaz se construyó con HTML, CSS, Bootstrap y jQueryUI, y el sistema generaba reportes precisos en formato Excel para el análisis de asistencia y toma de decisiones, mejorando la logística de los eventos masivos."
    },
    "transparencia-activa": {
        title: "Contenido y Propuesta: Portal de Transparencia Activa",
        image: "img/proyectos/transparencia-activa-full.png",
        description: "Durante un mes, fui el principal responsable de la actualización y carga de toda la información y contenidos en el portal 'transparencia.utem.cl', asegurando el cumplimiento de las normativas de transparencia para instituciones públicas. Este rol implicó la carga manual de documentos (PDF, Excel), la actualización constante de datos sensibles y la edición directa de secciones en HTML dentro del entorno WordPress. Realicé un manejo experto de plugins como TablePress para la gestión de datos tabulares y Pretty Links para la administración de URL. Adicionalmente, participé en la formulación de una nueva propuesta para el futuro portal de transparencia, identificando mejoras de usabilidad y eficiencia para las áreas involucradas en la provisión de información."
    },
    "portafolio-personal": {
        title: "Portafolio Personal",
        image: "img/proyectos/portafolio-personal-full.png",
        description: "Este es mi portafolio personal, una plataforma completamente diseñada y desarrollada por mí para presentar mis habilidades de desarrollo Full-Stack y los proyectos clave en los que he trabajado. Construido con HTML5, CSS3, JavaScript puro (Vanilla JS) y un diseño responsivo, este sitio incorpora elementos interactivos como modales para los detalles de los proyectos y una estructura de grid adaptable. El objetivo principal fue crear una experiencia de usuario limpia y efectiva, demostrando mi capacidad para desarrollar soluciones desde cero, así como mi atención al detalle en la interfaz de usuario y la experiencia general del sitio. Se utilizaron técnicas de optimización para asegurar una carga rápida y buena performance."
    }
};

const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const closeButton = document.querySelector('.close-button');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

function openModal(projectId) {
    const project = projectsData[projectId];
    if (project) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        modal.classList.remove('fade-out');
        modal.classList.add('fade-in');
    }
}

function closeModal() {
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');

    modal.addEventListener('animationend', function handler() {
        if (modal.classList.contains('fade-out')) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            modal.removeEventListener('animationend', handler);
        }
    });
}

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        openModal(projectId);
    });
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

});