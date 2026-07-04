// Products Database & Dynamic Catalog Logic for Aone Company

// Localized product catalog dataset
const PRODUCTS_DATA = [
  // 1. Connectors
  {
    id: "conn-te-superseal",
    category: "connectors",
    brand: "TE Connectivity",
    model: "AMP Superseal 1.5 Series",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="20" y="25" width="60" height="40" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/><rect x="35" y="15" width="30" height="10" rx="2" fill="#334155" stroke="#3b82f6" stroke-width="2"/><line x1="30" y1="65" x2="30" y2="85" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="65" x2="50" y2="85" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><line x1="70" y1="65" x2="70" y2="85" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><rect x="25" y="32" width="50" height="8" rx="2" fill="#ef4444"/><circle cx="50" cy="48" r="4" fill="#06b6d4"/></svg>`,
    title: {
      ko: "AMP 슈퍼실 1.5 방수 커넥터",
      en: "AMP Superseal 1.5 Waterproof Connector"
    },
    desc: {
      ko: "자동차 및 산업용 엔진 장비에 적합한 IP67 등급의 검증된 고성능 방수 커넥터 세트입니다.",
      en: "IP67 rated waterproof connector series designed for automotive, marine and harsh industrial environments."
    },
    specs: [
      { label: { ko: "핀 수", en: "Pin Count" }, value: "1P / 2P / 3P / 4P / 5P / 6P" },
      { label: { ko: "방수등급", en: "Waterproof" }, value: "IP67 / IP69K" },
      { label: { ko: "정격전류", en: "Rated Current" }, value: "14A Max" }
    ]
  },
  {
    id: "conn-ket-mg64",
    category: "connectors",
    brand: "KET",
    model: "MG64 Series (090)",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="15" y="25" width="70" height="50" rx="8" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/><rect x="30" y="25" width="40" height="15" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/><line x1="28" y1="52" x2="38" y2="52" stroke="#e2e8f0" stroke-width="2"/><line x1="45" y1="52" x2="55" y2="52" stroke="#e2e8f0" stroke-width="2"/><line x1="62" y1="52" x2="72" y2="52" stroke="#e2e8f0" stroke-width="2"/><line x1="28" y1="62" x2="38" y2="62" stroke="#e2e8f0" stroke-width="2"/><line x1="45" y1="62" x2="55" y2="62" stroke="#e2e8f0" stroke-width="2"/><line x1="62" y1="62" x2="72" y2="62" stroke="#e2e8f0" stroke-width="2"/></svg>`,
    title: {
      ko: "KET MG64 시리즈 자동차 하우징",
      en: "KET MG64 Automotive Housing Series"
    },
    desc: {
      ko: "국내 완성차 규격에 최적화된 와이어 투 보드(Wire-to-board) 비방수 전장 하우징 부품입니다.",
      en: "Standard non-waterproof wire-to-board automotive connector housing, optimized for passenger vehicles."
    },
    specs: [
      { label: { ko: "극 수", en: "Position" }, value: "8P / 12P / 16P / 24P" },
      { label: { ko: "핀 피치", en: "Pin Pitch" }, value: "2.3mm (090)" },
      { label: { ko: "주요 용도", en: "Application" }, value: "BCM / Dashboard / Switches" }
    ]
  },
  {
    id: "conn-molex-minifit",
    category: "connectors",
    brand: "Molex",
    model: "Mini-Fit Jr. 5557 / 5559",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="25" y="20" width="50" height="60" rx="4" fill="#334155" stroke="#e2e8f0" stroke-width="2"/><rect x="33" y="12" width="34" height="8" fill="#1e293b" stroke="#e2e8f0" stroke-width="2"/><circle cx="37" cy="30" r="3" fill="#64748b"/><circle cx="47" cy="30" r="3" fill="#64748b"/><circle cx="57" cy="30" r="3" fill="#64748b"/><circle cx="67" cy="30" r="3" fill="#64748b"/><circle cx="37" cy="45" r="3" fill="#64748b"/><circle cx="47" cy="45" r="3" fill="#64748b"/><circle cx="57" cy="45" r="3" fill="#64748b"/><circle cx="67" cy="45" r="3" fill="#64748b"/></svg>`,
    title: {
      ko: "모렉스 미니핏 주니어 커넥터",
      en: "Molex Mini-Fit Jr. Connector"
    },
    desc: {
      ko: "컴퓨터 전원공급장치 및 가전기기, 통신 기기에 광범위하게 쓰이는 4.2mm 피치 파워 커넥터입니다.",
      en: "4.2mm pitch power connector system supporting up to 9.0A current, widely used in computing and appliances."
    },
    specs: [
      { label: { ko: "핀 피치", en: "Pitch" }, value: "4.20mm" },
      { label: { ko: "정격전압", en: "Voltage" }, value: "600V AC/DC" },
      { label: { ko: "재질", en: "Material" }, value: "Nylon UL94V-2 / UL94V-0" }
    ]
  },
  {
    id: "conn-yazaki-064",
    category: "connectors",
    brand: "Yazaki",
    model: "0.64 II Series",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="20" y="20" width="60" height="60" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/><circle cx="40" cy="40" r="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/><circle cx="60" cy="40" r="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/><circle cx="40" cy="60" r="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/><circle cx="60" cy="60" r="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/><rect x="42" y="12" width="16" height="8" fill="#f59e0b"/></svg>`,
    title: {
      ko: "야자키 0.64 II 초소형 자동차 하우징",
      en: "Yazaki 0.64 II Micro Connector"
    },
    desc: {
      ko: "경량화 및 소형화가 요구되는 현대 자동차 ECU, 센서 및 실내 장치 배선에 쓰이는 고밀도 커넥터입니다.",
      en: "High-density micro connector system, ideal for space-saving automotive sensors, ECUs, and wire-harnesses."
    },
    specs: [
      { label: { ko: "단자 폭", en: "Tab Size" }, value: "0.64mm (Micro)" },
      { label: { ko: "접점 수", en: "Positions" }, value: "4P - 40P" },
      { label: { ko: "방수 여부", en: "Sealed" }, value: "Unsealed / Sealed option" }
    ]
  },

  // 2. Wires & Cables
  {
    id: "cable-flry",
    category: "wires",
    brand: "Aone Sourced",
    model: "FLRY-B ISO Automotive Wire",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><circle cx="50" cy="50" r="30" fill="none" stroke="#2563eb" stroke-width="12"/><circle cx="50" cy="50" r="18" fill="none" stroke="#f59e0b" stroke-width="6"/><circle cx="50" cy="50" r="6" fill="#f8fafc"/><path d="M 50 12 L 50 3 Q 50 0 53 0" fill="none" stroke="#2563eb" stroke-width="4"/><path d="M 12 50 L 3 50 Q 0 50 0 47" fill="none" stroke="#2563eb" stroke-width="4"/></svg>`,
    title: {
      ko: "FLRY-B 차량용 박육 저압 전선",
      en: "FLRY-B Automotive Low-Voltage Wire"
    },
    desc: {
      ko: "PVC 절연 피복의 두께를 줄여 공간과 무게를 획기적으로 차단하는 현대 모비스/글로벌 규격 차량용 단선입니다.",
      en: "Thin-wall PVC insulated single-core wire designed for automotive cabling where weight reduction is critical."
    },
    specs: [
      { label: { ko: "표준 규격", en: "Standard" }, value: "ISO 6722 Class B" },
      { label: { ko: "동선 규격", en: "Conductor Size" }, value: "0.35mm² ~ 2.5mm²" },
      { label: { ko: "작업 온도", en: "Temp Range" }, value: "-40°C to +105°C" }
    ]
  },
  {
    id: "cable-harness",
    category: "wires",
    brand: "Aone Assembly",
    model: "Custom Engine Wire Harness",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><path d="M 15 50 Q 35 25 50 50 T 85 50" fill="none" stroke="#1e293b" stroke-width="12" stroke-linecap="round"/><path d="M 15 50 Q 35 25 50 50 T 85 50" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/><path d="M 30 40 L 30 70" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/><path d="M 65 60 L 65 80" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round"/><rect x="8" y="42" width="10" height="16" rx="2" fill="#f59e0b"/><rect x="80" y="42" width="12" height="16" rx="2" fill="#f59e0b"/></svg>`,
    title: {
      ko: "차량 엔진룸용 맞춤형 와이어 하네스",
      en: "Custom Automotive Engine Wire Harness"
    },
    desc: {
      ko: "고온, 진동 및 수분이 많은 극한 조건의 가솔린/디젤 엔진룸에 적용되는 커스텀 튜브/테이프식 전선 하네스 어셈블리입니다.",
      en: "Engineered wire harness assembly bundled with corrugated tubes and heat-resistant tape, customized to client drawing specifications."
    },
    specs: [
      { label: { ko: "커넥터 브랜드", en: "Connector Brands" }, value: "TE Connectivity, KET, Yazaki" },
      { label: { ko: "보호재", en: "Protection" }, value: "Corrugated Conduit / Heat-shrink tube" },
      { label: { ko: "테스트", en: "Testing" }, value: "100% Electrical Continuity & Pull Force Tested" }
    ]
  },

  // 3. Home Appliances
  {
    id: "appl-purifier",
    category: "appliances",
    brand: "Aone OEM/Rental",
    model: "Smart Air Purifier AP-15",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="30" y="15" width="40" height="70" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="3"/><rect x="36" y="25" width="28" height="20" rx="3" fill="#0f172a"/><circle cx="50" cy="35" r="5" fill="#06b6d4"/><circle cx="50" cy="65" r="10" fill="none" stroke="#cbd5e1" stroke-width="2"/><circle cx="50" cy="65" r="5" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="38" y1="80" x2="62" y2="80" stroke="#cbd5e1" stroke-width="2"/></svg>`,
    title: {
      ko: "H13등급 헤파 필터 스마트 공기청정기",
      en: "H13 HEPA Smart Air Purifier AP-15"
    },
    desc: {
      ko: "미세먼지 및 바이러스를 99.9% 차단하는 고성능 H13 헤파 필터 및 모바일 IoT 연동이 지원되는 컴팩트 공기청정기입니다.",
      en: "IoT-enabled smart room air purifier featuring medical-grade H13 HEPA filtration and PM2.5 real-time monitoring."
    },
    specs: [
      { label: { ko: "필터 종류", en: "Filter" }, value: "HEPA H13 + Carbon pre-filter" },
      { label: { ko: "사용 면적", en: "Coverage" }, value: "48 m² (approx. 15 Pyung)" },
      { label: { ko: "스마트 제어", en: "IoT Smart Control" }, value: "App (Tuya / Alexa Compatible)" }
    ]
  },
  {
    id: "appl-induction",
    category: "appliances",
    brand: "Aone Premium",
    model: "Built-in 3-Burner Induction Cooktop",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="15" y="20" width="70" height="60" rx="4" fill="#0f172a" stroke="#e2e8f0" stroke-width="3"/><circle cx="35" cy="45" r="15" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/><circle cx="65" cy="40" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><circle cx="65" cy="62" r="8" fill="none" stroke="#ef4444" stroke-width="2"/><rect x="25" y="70" width="50" height="4" fill="#334155"/></svg>`,
    title: {
      ko: "빌트인 3구 세라믹 글라스 인덕션 쿡탑",
      en: "Built-in 3-Burner Induction Cooktop"
    },
    desc: {
      ko: "고급 독일제 쇼트세란(Schott Ceran) 세라믹 글라스를 장착하고 터치식 정밀 터보 부스터 화력이 지원되는 인덕션 전기레인지입니다.",
      en: "Premium built-in induction stove featuring German Schott Ceran glass, slide touch control, and high-power booster cycles."
    },
    specs: [
      { label: { ko: "유리 종류", en: "Glass Type" }, value: "Schott Ceran Ceramic Glass" },
      { label: { ko: "최대 출력", en: "Total Power" }, value: "3400W (Max)" },
      { label: { ko: "안전 기능", en: "Safety Features" }, value: "Auto-Off / Child Lock / Residual Heat Indicator" }
    ]
  },

  // 4. Electronic Components
  {
    id: "comp-relay",
    category: "components",
    brand: "Aone Components",
    model: "Automotive Power Relay (12V 40A)",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="25" y="25" width="50" height="50" rx="6" fill="#1e293b" stroke="#e2e8f0" stroke-width="2"/><line x1="35" y1="75" x2="35" y2="88" stroke="#cbd5e1" stroke-width="3"/><line x1="45" y1="75" x2="45" y2="88" stroke="#cbd5e1" stroke-width="3"/><line x1="55" y1="75" x2="55" y2="88" stroke="#cbd5e1" stroke-width="3"/><line x1="65" y1="75" x2="65" y2="88" stroke="#cbd5e1" stroke-width="3"/><path d="M 35 40 Q 50 20 65 40" fill="none" stroke="#2563eb" stroke-width="2"/><rect x="42" y="45" width="16" height="20" fill="none" stroke="#f59e0b" stroke-width="1.5"/></svg>`,
    title: {
      ko: "차량용 12V 40A 파워 릴레이",
      en: "Automotive 12V 40A Power Relay"
    },
    desc: {
      ko: "차량의 전조등, 라디에이터 팬, 전동 윈도우 등 대용량 전기 제어에 신뢰성이 우수한 5핀 타입 SPDT 밀폐형 릴레이입니다.",
      en: "Heavy-duty 5-pin SPDT sealed automotive relay designed for controlling headlights, fans, and high-load components."
    },
    specs: [
      { label: { ko: "정격 부하", en: "Contact Rating" }, value: "40A @ 14VDC" },
      { label: { ko: "코일 전압", en: "Coil Voltage" }, value: "12V DC (24V optional)" },
      { label: { ko: "접점 배열", en: "Contact Form" }, value: "1 Form C (SPDT)" }
    ]
  },
  {
    id: "comp-switch",
    category: "components",
    brand: "Aone Components",
    model: "Waterproof Rocker Switch (LED)",
    image: `<svg viewBox="0 0 100 100" class="prod-svg"><rect x="30" y="20" width="40" height="60" rx="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/><path d="M 35 30 L 65 70" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="6" fill="#10b981"/><line x1="50" y1="80" x2="50" y2="90" stroke="#cbd5e1" stroke-width="2"/><line x1="38" y1="80" x2="38" y2="90" stroke="#cbd5e1" stroke-width="2"/><line x1="62" y1="80" x2="62" y2="90" stroke="#cbd5e1" stroke-width="2"/></svg>`,
    title: {
      ko: "LED 조명 내장형 방수 로커 스위치",
      en: "Waterproof LED Rocker Switch"
    },
    desc: {
      ko: "IP65 방수 디자인과 야간 식별용 LED 표시등이 결합되어 해양 및 야외 선박, 대형 중장비 콕핏에 적용되는 스위치입니다.",
      en: "IP65 sealed rocker switch with integrated LED illumination, widely used in marine control panels and heavy machinery cabins."
    },
    specs: [
      { label: { ko: "방수 등급", en: "Ingress Protection" }, value: "IP65 Waterproof" },
      { label: { ko: "정격 부하", en: "Contact Rating" }, value: "20A 12V DC / 16A 250V AC" },
      { label: { ko: "동작 방식", en: "Switch Action" }, value: "ON-OFF (SPST)" }
    ]
  }
];

// Initialize Catalog UI
function initCatalog() {
  const gridContainer = document.getElementById('products-grid');
  if (!gridContainer) return; // Exit if not on products page

  const searchInput = document.getElementById('catalog-search');
  const categoryFilters = document.querySelectorAll('.category-filter');
  const brandFilters = document.querySelectorAll('.brand-filter');
  const statsCount = document.getElementById('stats-count');

  // Track active state
  let filters = {
    search: '',
    categories: [],
    brands: []
  };

  // Render function
  function renderProducts() {
    const currentLang = localStorage.getItem('aone_lang') || 'ko';
    const cart = window.getAoneCart();
    
    // Filter data
    const filtered = PRODUCTS_DATA.filter(item => {
      // 1. Search Query Match
      const matchesSearch = 
        item.model.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.title[currentLang].toLowerCase().includes(filters.search.toLowerCase()) ||
        item.desc[currentLang].toLowerCase().includes(filters.search.toLowerCase());

      // 2. Category Match
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(item.category);

      // 3. Brand Match
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(item.brand);

      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Update count stats
    if (statsCount) {
      statsCount.textContent = filtered.length;
    }

    // Generate HTML
    if (filtered.length === 0) {
      const emptyMsgKo = `<div class="rfq-empty-msg" style="grid-column: 1/-1;">
        <i class="fas fa-search"></i>
        <p>검색 조건에 맞는 제품이 없습니다. 철자 또는 필터를 확인해 주세요.</p>
      </div>`;
      const emptyMsgEn = `<div class="rfq-empty-msg" style="grid-column: 1/-1;">
        <i class="fas fa-search"></i>
        <p>No products found matching your search. Please check spelling or active filters.</p>
      </div>`;
      gridContainer.innerHTML = currentLang === 'ko' ? emptyMsgKo : emptyMsgEn;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => {
      const isInCart = cart.some(c => c.id === item.id);
      
      const btnClass = isInCart ? 'add-rfq-btn in-cart' : 'add-rfq-btn';
      
      const btnTextKo = isInCart ? '<i class="fas fa-check"></i> RFQ 추가됨' : '<i class="fas fa-plus"></i> RFQ 추가';
      const btnTextEn = isInCart ? '<i class="fas fa-check"></i> Added to RFQ' : '<i class="fas fa-plus"></i> Add to RFQ';
      const btnText = currentLang === 'ko' ? btnTextKo : btnTextEn;

      const categoryNameMap = {
        connectors: { ko: "커넥터", en: "Connector" },
        wires: { ko: "전선 & 하네스", en: "Wires & Cable" },
        appliances: { ko: "생활 가전", en: "Home Appliance" },
        components: { ko: "전자부품", en: "Electronic Comp" }
      };

      const categoryLabel = categoryNameMap[item.category][currentLang];

      const specLines = item.specs.map(s => `
        <div class="spec-line">
          <span class="spec-label">${s.label[currentLang]}</span>
          <span class="spec-val">${s.value}</span>
        </div>
      `).join('');

      return `
        <article class="product-card" data-id="${item.id}">
          <div class="product-image-container">
            ${item.image}
            <span class="product-category-badge">${categoryLabel}</span>
            <span class="product-brand-badge">${item.brand}</span>
          </div>
          <div class="product-info">
            <h3 class="product-model">${item.model}</h3>
            <p class="product-desc" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.4;">
              ${item.title[currentLang]} - ${item.desc[currentLang]}
            </p>
            <div class="product-specs">
              ${specLines}
            </div>
            <button class="${btnClass}" onclick="handleRfqClick('${item.id}')">
              ${btnText}
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // Handle click on Add/Remove to RFQ
  window.handleRfqClick = function(id) {
    const item = PRODUCTS_DATA.find(p => p.id === id);
    if (!item) return;

    const cart = window.getAoneCart();
    const isInCart = cart.some(c => c.id === id);

    if (isInCart) {
      window.removeAoneCartItem(id);
    } else {
      window.addAoneCartItem({
        id: item.id,
        model: item.model,
        brand: item.brand,
        category: item.category,
        qty: 1,
        image: item.image
      });
    }
    
    renderProducts();
  };

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filters.search = e.target.value;
      renderProducts();
    });
  }

  categoryFilters.forEach(cb => {
    cb.addEventListener('change', () => {
      const active = Array.from(categoryFilters)
        .filter(c => c.checked)
        .map(c => c.value);
      filters.categories = active;
      renderProducts();
    });
  });

  brandFilters.forEach(cb => {
    cb.addEventListener('change', () => {
      const active = Array.from(brandFilters)
        .filter(c => c.checked)
        .map(c => c.value);
      filters.brands = active;
      renderProducts();
    });
  });

  // Re-render when language changes
  document.addEventListener('languageChanged', () => {
    renderProducts();
  });

  // Re-render when cart updates elsewhere
  document.addEventListener('cartUpdated', () => {
    renderProducts();
  });

  // Initial render
  renderProducts();
}

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
});
