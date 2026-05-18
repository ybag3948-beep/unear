// State
let currentLang = 'ko';
let activeCategory = 'all';

// DOM Elements
const categoryContainer = document.getElementById('category-container');
const facilityList = document.getElementById('facility-list');
const langSelector = document.getElementById('lang-selector');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalContentArea = document.getElementById('modal-content-area');

// Translation Dictionary for UI elements
const uiTranslations = {
    appTitle: { ko: "UniNear", en: "UniNear", zh: "UniNear" },
    mentorPick: { ko: "🌟 멘토 추천", en: "🌟 Mentor's Pick", zh: "🌟 导师推荐" },
    navigate: { ko: "길찾기", en: "Navigate", zh: "导航" },
    bookmark: { ko: "저장", en: "Save", zh: "保存" },
    navHome: { ko: "홈", en: "Home", zh: "首页" },
    navMap: { ko: "지도", en: "Map", zh: "地图" },
    navSaved: { ko: "저장됨", en: "Saved", zh: "已保存" },
    navProfile: { ko: "내 정보", en: "Profile", zh: "我的" }
};

// Initialize App
function init() {
    renderCategories();
    renderFacilities();
    updateUIText();

    langSelector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        renderCategories();
        renderFacilities();
        updateUIText();
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if(e.target === modalOverlay) closeModal();
    });
}

// Render Categories
function renderCategories() {
    categoryContainer.innerHTML = '';
    mockData.categories.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = `category-pill ${activeCategory === cat.id ? 'active' : ''}`;
        btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.name[currentLang]}</span>`;
        btn.addEventListener('click', () => {
            activeCategory = cat.id;
            renderCategories(); // Re-render to update active state
            renderFacilities(); // Filter list
        });
        categoryContainer.appendChild(btn);
    });
}

// Render Facility List
function renderFacilities() {
    facilityList.innerHTML = '';
    
    const filtered = activeCategory === 'all' 
        ? mockData.facilities 
        : mockData.facilities.filter(f => f.category === activeCategory);

    filtered.forEach((facility, index) => {
        const card = document.createElement('div');
        card.className = 'facility-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        const categoryName = mockData.categories.find(c => c.id === facility.category)?.name[currentLang];

        let mentorHtml = '';
        if (facility.isMentorRecommended) {
            mentorHtml = `
                <div class="mentor-badge">${uiTranslations.mentorPick[currentLang]}</div>
                <div class="mentor-comment">"${facility.mentorComment[currentLang]}"</div>
            `;
        }

        card.innerHTML = `
            <div class="facility-header">
                <div class="facility-name">${facility.name[currentLang]}</div>
                <div class="facility-category">★ ${facility.rating} | ${categoryName}</div>
            </div>
            <div class="facility-desc">${facility.description[currentLang]}</div>
            ${mentorHtml}
            <div class="card-actions">
                <button class="btn-action btn-nav" onclick="event.stopPropagation(); alert('${uiTranslations.navigate[currentLang]} to ${facility.name[currentLang]}')">
                    📍 ${uiTranslations.navigate[currentLang]}
                </button>
                <button class="btn-action btn-bookmark" onclick="event.stopPropagation(); alert('${uiTranslations.bookmark[currentLang]}d!')">
                    ❤️ ${uiTranslations.bookmark[currentLang]}
                </button>
            </div>
        `;

        card.addEventListener('click', () => openModal(facility));
        facilityList.appendChild(card);
    });
}

function updateUIText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[key]) {
            el.innerText = uiTranslations[key][currentLang];
        }
    });
}

function openModal(facility) {
    const categoryName = mockData.categories.find(c => c.id === facility.category)?.name[currentLang];
    
    modalContentArea.innerHTML = `
        <h2 style="margin-bottom: 10px; color: var(--primary-color)">${facility.name[currentLang]}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${categoryName}</p>
        
        <h4 style="margin-bottom: 8px;">상세 정보 / Details</h4>
        <p style="line-height: 1.6; margin-bottom: 20px;">${facility.description[currentLang]}</p>
        
        ${facility.isMentorRecommended ? `
            <h4 style="margin-bottom: 8px;">멘토의 팁 / Mentor's Tip</h4>
            <div class="mentor-comment" style="margin-bottom: 20px;">
                "${facility.mentorComment[currentLang]}"
            </div>
        ` : ''}
        
        <div style="margin-top: auto; display:flex; gap: 10px;">
            <button class="btn-action btn-nav" style="flex: 2; padding: 15px;">
                ${uiTranslations.navigate[currentLang]} 시작
            </button>
        </div>
    `;
    modalOverlay.classList.add('show');
}

function closeModal() {
    modalOverlay.classList.remove('show');
}

// Run init
window.addEventListener('DOMContentLoaded', init);
