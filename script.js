// --------------------------------------------------------------
// 5TO PRE-UNI VERANO 2027 - TOMOS I & II
// --------------------------------------------------------------

// Definición de cursos (6 materias)
const coursesData = {
    courses: [
        { id: 1, name: "Aritmética", description: "Números, operaciones, razones y proporciones.", icon: "fas fa-calculator", color: "#F47C3C" },
        { id: 2, name: "Álgebra", description: "Polinomios, ecuaciones, inecuaciones y funciones.", icon: "fas fa-square-root-alt", color: "#E65C1E" },
        { id: 3, name: "Física", description: "Mecánica, cinemática, dinámica y energía.", icon: "fas fa-atom", color: "#1E6091" },
        { id: 4, name: "Geometría", description: "Figuras planas, sólidos y transformaciones.", icon: "fas fa-draw-polygon", color: "#2A9D8F" },
        { id: 5, name: "Química", description: "Estructura atómica, tabla periódica y reacciones.", icon: "fas fa-flask", color: "#E9C46A" },
        { id: 6, name: "Trigonometría", description: "Razones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#F4A261" }
    ],

    // SOLO TOMOS I y II
    selectors: {
        tomos: [
            { id: "tomo-i", name: "Tomo I", icon: "fas fa-book", color: "#F47C3C" },
            { id: "tomo-ii", name: "Tomo II", icon: "fas fa-layer-group", color: "#F47C3C" }
        ]
    },

    // ENLACES DE DRIVE (SOLO Tomo I y Tomo II, años 2025 y 2026)
    driveLinks: {
        "tomo-i": {
            2025: {
                1: "https://drive.google.com/drive/folders/1e0gBwQRykpWCy1hwIw1kvjEXEAMe9bn0?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1oFDbb__eXfVyymq4UMNk5_yv2IUc--Ht?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1agUNTEY5rnoRkfWULcXYnwFIzYjhW6Sl?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1HQwnftELk-yJlPrthsPKH70rW6qjr8kW?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1AN-MNy24FABQnZLAGcjKdD6KaSZTx7L_?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1m5MODKqWjQ222RT6nVcitTC2cghSwAfz?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1dPswEwKlhV0zZU14rkHGfCzfPYsBXRg2?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1-0HQ_jw8PgM5FfgUsur-F4vl_-35LWpK?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1xZAUObRcbKPOmb_OtnGiitfu-ALaPUHC?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1yHLB9rEPikwQ8j8Pv-btNKbokk-DKxFH?usp=drive_link",
                5: "https://drive.google.com/drive/folders/11kknpoHk00wm9yR0ZPb9deg76U252sFT?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1_LtodzAa13HO89rvOoCNybkKYcqhBoZX?usp=drive_link"
            }
        },
        "tomo-ii": {
            2025: {
                1: "https://drive.google.com/drive/folders/15uSKARXt0InsFFNZdxguVDuRhnI_kTqD?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1S_BaHNKiKpCM5Cojv8AX2FibCB41-aoN?usp=drive_link",
                3: "https://drive.google.com/drive/folders/17A60LOGgzszmrKk6X7r2Zvw5plFEbfHn?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1J0G4ycm4ALEnFWkQ4BSuOv0bm9-AFm-N?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1dy8WvJFL2i1qZ9n0pi4Q7ipNT3Bpb2uT?usp=drive_link",
                6: "https://drive.google.com/drive/folders/12OqtrdyJ7jZ_1u0c6Y6JtWXX4leWiHws?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1QGI3gDc5X_MkM_MmN-WI_wA2ckhot3P-?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1lDhJVIliUjW5RcBmi6eTb8TSZSivEkVt?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1DC1yTAEUGPfQhEljkS2tQm1Va5Jy2MGE?usp=drive_link",
                4: "https://drive.google.com/drive/folders/16hj2fE3fmQ65TofeSvDXr30jbwKyABiW?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1LRKd1aPAKaQBAbsYHULOTdgUnii9TCu-?usp=drive_link",
                6: "https://drive.google.com/drive/folders/15T82bHMuGhNpEomQe2Stcaurr8DN8mdu?usp=drive_link"
            }
        }
    }
};

// Estado global
let currentYear = 2025;
let currentSelector = "tomo-i";

// Helper: nombre amigable del tomo
function getTomoDisplayName(selectorId) {
    const tomo = coursesData.selectors.tomos.find(t => t.id === selectorId);
    return tomo ? tomo.name : "Tomo I";
}

// Renderizar botones de Tomos (I y II)
function renderTomoButtons() {
    const container = document.getElementById('tomo-buttons');
    if (!container) return;
    container.innerHTML = '';
    
    coursesData.selectors.tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${tomo.id === currentSelector ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.innerHTML = `<i class="${tomo.icon}"></i> <span>${tomo.name}</span>`;
        btn.addEventListener('click', () => {
            currentSelector = tomo.id;
            renderTomoButtons();
            renderCourses();
            updateInfoBar();
        });
        container.appendChild(btn);
    });
}

// Actualizar barra superior con selector y año
function updateInfoBar() {
    const currentSelectorSpan = document.getElementById('current-selector');
    const yearSpan = document.getElementById('current-year');
    if (currentSelectorSpan) {
        const tomoName = getTomoDisplayName(currentSelector);
        currentSelectorSpan.innerHTML = `<i class="fas fa-book-open"></i> <span>${tomoName} · Edición ${currentYear}</span>`;
    }
    if (yearSpan) yearSpan.textContent = currentYear;
    const coursesCountSpan = document.getElementById('courses-count');
    if (coursesCountSpan) coursesCountSpan.textContent = coursesData.courses.length;
}

// Renderizar tarjetas de cursos
function renderCourses() {
    const container = document.getElementById('courses-container');
    if (!container) return;
    container.innerHTML = '';
    
    const linksForTomo = coursesData.driveLinks[currentSelector];
    const linksForYear = linksForTomo ? linksForTomo[currentYear] : null;
    const tomoDisplay = getTomoDisplayName(currentSelector);
    
    coursesData.courses.forEach(course => {
        const driveUrl = (linksForYear && linksForYear[course.id]) ? linksForYear[course.id] : "#";
        const card = document.createElement('div');
        card.className = 'course-card';
        
        card.innerHTML = `
            <div class="selector-tag">${tomoDisplay}</div>
            <div class="year-tag">${currentYear}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color};"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${driveUrl}" target="_blank" class="drive-link" rel="noopener noreferrer">
                    <i class="fab fa-google-drive"></i> Acceder al material
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Cambiar año (2025 / 2026)
function setActiveYear(year) {
    currentYear = year;
    // Actualizar pestañas visuales
    document.querySelectorAll('.tab').forEach(tab => {
        const tabYear = parseInt(tab.dataset.year);
        if (tabYear === year) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    renderCourses();
    updateInfoBar();
}

// Inicializar eventos y data
function initApp() {
    renderTomoButtons();
    renderCourses();
    updateInfoBar();
    
    // Eventos para tabs de año
    const yearTabs = document.querySelectorAll('.tab');
    yearTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const yearVal = parseInt(tab.dataset.year);
            if (!isNaN(yearVal)) setActiveYear(yearVal);
        });
    });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);