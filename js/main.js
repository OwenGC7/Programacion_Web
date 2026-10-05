
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const PLAN = [
    // Semestre 1
    [
        { name: "Comunicación", cr: 2, type: "Teórica" },
        { name: "Deporte y cultura", cr: 1, type: "Práctica" },
        { name: "Matemáticas I", cr: 4, type: "Teórica" },
        { name: "Física I", cr: 3, type: "Teórico-Práctica" },
        { name: "Biología general", cr: 3, type: "Teórico-Práctica" },
        { name: "Introducción a la Ingeniería", cr: 2, type: "Teórico-Práctica" },
        { name: "Lógica y algoritmos I", cr: 3, type: "Teórico-Práctica" }
    ],
    // Semestre 2
    [
        { name: "Constitución y democracia", cr: 2, type: "Teórica" },
        { name: "Matemáticas II", cr: 4, type: "Teórica" },
        { name: "Física II", cr: 3, type: "Teórico-Práctica" },
        { name: "Química I", cr: 3, type: "Teórico-Práctica" },
        { name: "Lógica y algoritmos II", cr: 3, type: "Teórico-Práctica" },
        { name: "Teoría general de sistemas", cr: 2, type: "Teórico-Práctica" }
    ],
    // Semestre 3
    [
        { name: "Idioma extranjero I", cr: 2, type: "Teórico-Práctica" },
        { name: "Álgebra lineal", cr: 3, type: "Teórica" },
        { name: "Matemáticas discreta", cr: 4, type: "Teórico-Práctica" },
        { name: "Análisis de sistemas", cr: 4, type: "Teórico-Práctica" },
        { name: "Estructuras de datos I", cr: 4, type: "Teórico-Práctica" }
    ],
    // Semestre 4
    [
        { name: "Ecuaciones diferenciales", cr: 3, type: "Teórico-Práctica" },
        { name: "Estadística para ingeniería", cr: 4, type: "Teórico-Práctica" },
        { name: "Ingeniería de software I", cr: 4, type: "Teórico-Práctica" },
        { name: "Sistemas operativos", cr: 3, type: "Teórico-Práctica" },
        { name: "Estructuras de datos II", cr: 4, type: "Teórico-Práctica" }
    ],
    // Semestre 5
    [
        { name: "Idioma extranjero II", cr: 2, type: "Teórico-Práctica" },
        { name: "Métodos numéricos", cr: 3, type: "Teórico-Práctica" },
        { name: "Ingeniería de software II", cr: 4, type: "Teórico-Práctica" },
        { name: "Programación web", cr: 4, type: "Teórico-Práctica" },
        { name: "Diseño de base de datos", cr: 4, type: "Teórico-Práctica" }
    ],
    // Semestre 6
    [
        { name: "Filosofía e historia de la ciencia", cr: 2, type: "Teórica" },
        { name: "Modelos determinísticos", cr: 4, type: "Teórico-Práctica" },
        { name: "Ingeniería de software III", cr: 4, type: "Teórico-Práctica" },
        { name: "Programación móvil", cr: 4, type: "Teórico-Práctica" },
        { name: "Redes informáticas I", cr: 4, type: "Teórico-Práctica" }
    ],
    // Semestre 7
    [
        { name: "Metodología de la investigación I", cr: 2, type: "Teórica" },
        { name: "Proyectos software", cr: 4, type: "Teórico-Práctica" },
        { name: "Inteligencia computacional I", cr: 4, type: "Teórico-Práctica" },
        { name: "Redes informáticas II", cr: 4, type: "Teórico-Práctica" },
        { name: "Administración de base de datos", cr: 4, type: "Teórico-Práctica" }
    ],
    // Semestre 8
    [
        { name: "Desarrollo humano", cr: 2, type: "Teórica" },
        { name: "Metodología de la investigación II", cr: 2, type: "Teórica" },
        { name: "Planeación estratégica de SI", cr: 3, type: "Teórico-Práctica" },
        { name: "Inteligencia computacional II", cr: 4, type: "Teórico-Práctica" },
        { name: "Taller de emprendimiento e innovación", cr: 3, type: "Teórico-Práctica" },
        { name: "Ética", cr: 2, type: "Teórica" }
    ],
    // Semestre 9
    [
        { name: "Universidad, región y medio ambiente", cr: 2, type: "Teórica" },
        { name: "Gestión tecnológica", cr: 3, type: "Teórico-Práctica" },
        { name: "Taller de escritura científica", cr: 2, type: "Teórico-Práctica" },
        { name: "Electiva I", cr: 4, type: "Teórico-Práctica" },
        { name: "Electiva II", cr: 4, type: "Teórico-Práctica" }
    ],
    // Semestre 10
    [
        { name: "Electiva III", cr: 4, type: "Teórico-Práctica" },
        { name: "Electiva IV", cr: 4, type: "Teórico-Práctica" },
        { name: "Opción de grado", cr: 10, type: "Práctica" }
    ]
];


const tabs = document.getElementById('semTabs');
const cont = document.getElementById('semContent');

if (tabs && cont) {
    PLAN.forEach((cs, i) => {
        
        tabs.insertAdjacentHTML('beforeend', 
            `<li class="nav-item">
                <button class="nav-link ${i === 0 ? 'active' : ''}" data-bs-toggle="tab" data-bs-target="#s${i}" type="button">Sem ${i + 1}</button>
            </li>`
        );
        
        
        let cardsHTML = cs.map(c => `
            <div class="course">
                <div class="course-icon"><i class="bi bi-journal-code"></i></div>
                <div class="course-info">
                    <span class="course-title">${c.name}</span>
                    <div class="course-badges">
                        <span class="badge bg-success-subtle text-success border border-success-subtle">${c.cr} Créditos</span>
                        <span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle">${c.type}</span>
                    </div>
                </div>
            </div>
        `).join('');

        cont.insertAdjacentHTML('beforeend', 
            `<div class="tab-pane fade ${i === 0 ? 'show active' : ''}" id="s${i}">
                <div class="course-list">
                    ${cardsHTML}
                </div>
            </div>`
        );
    });
}


const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; 
    io.unobserve(e.target);
    if (e.target.dataset.count) { 
        const t = +e.target.dataset.count, s = performance.now(); 
        (function f(n) { 
            const p = Math.min((n - s) / 1200, 1); 
            e.target.textContent = Math.round(t * p); 
            if (p < 1) requestAnimationFrame(f) 
        })(s) 
    } else {
        e.target.classList.add('in')
    }
}), { threshold: .2 });

document.querySelectorAll('[data-count],.reveal').forEach(el => io.observe(el));


const msg = '> compilando futuro...'; 
let k = 0; 
const tp = document.getElementById('typed');
if (tp) {
    (function t() { 
        if (k <= msg.length) { 
            tp.textContent = msg.slice(0, k++); 
            setTimeout(t, 70) 
        } 
    })();
}


const b = document.getElementById('top');
if (b) {
    window.addEventListener('scroll', () => b.style.display = scrollY > 400 ? 'block' : 'none');
    b.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
}


document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => { 
    const menuEl = document.getElementById('menu');
    
    if (menuEl && typeof bootstrap !== 'undefined') {
        const m = bootstrap.Collapse.getInstance(menuEl); 
        if (m) m.hide();
    }
}));