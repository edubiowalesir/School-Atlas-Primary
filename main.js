// ================================================
// SCHOOL ATLAS | विद्यालय एटलस — main.js
// ================================================

const FACTS = [
  { en: "India has the most post offices in the world!", hi: "भारत में दुनिया के सबसे ज़्यादा डाकघर हैं!" },
  { en: "The River Nile is the longest river in the world — 6,650 km!", hi: "नील नदी दुनिया की सबसे लंबी नदी है — 6,650 किमी!" },
  { en: "Antarctica is the largest desert in the world!", hi: "अंटार्कटिका दुनिया का सबसे बड़ा रेगिस्तान है!" },
  { en: "There are 8 planets in our Solar System.", hi: "हमारे सौर मंडल में 8 ग्रह हैं।" },
  { en: "The Amazon Rainforest produces 20% of the world's oxygen!", hi: "अमेज़न वन दुनिया की 20% ऑक्सीजन बनाता है!" },
  { en: "Mount Everest is the highest mountain — 8,848 metres above sea level.", hi: "माउंट एवरेस्ट 8,848 मीटर ऊँचाई पर दुनिया की सबसे ऊंची चोटी है।" },
  { en: "India is the 7th largest country in the world by area.", hi: "भारत क्षेत्रफल में दुनिया का 7वाँ सबसे बड़ा देश है।" },
  { en: "The Pacific Ocean covers 30% of Earth's surface.", hi: "प्रशांत महासागर पृथ्वी की 30% सतह को ढकता है।" },
  { en: "Jupiter is the largest planet in our Solar System.", hi: "बृहस्पति हमारे सौर मंडल का सबसे बड़ा ग्रह है।" },
  { en: "New Delhi is located on the banks of the River Yamuna.", hi: "नई दिल्ली यमुना नदी के तट पर स्थित है।" },
  { en: "Russia is the largest country in the world by area.", hi: "रूस क्षेत्रफल में दुनिया का सबसे बड़ा देश है।" },
  { en: "There are 7 continents on Earth.", hi: "पृथ्वी पर 7 महाद्वीप हैं।" },
  { en: "Vatican City is the smallest country in the world.", hi: "वेटिकन सिटी दुनिया का सबसे छोटा देश है।" },
  { en: "The Ganga is the most sacred river in India.", hi: "गंगा भारत की सबसे पवित्र नदी है।" },
  { en: "Africa has 54 countries — the most of any continent!", hi: "अफ्रीका में 54 देश हैं — किसी भी महाद्वीप से सबसे ज़्यादा!" },
  { en: "The Sahara is the largest hot desert in the world.", hi: "सहारा दुनिया का सबसे बड़ा गर्म रेगिस्तान है।" },
  { en: "India became independent on 15 August 1947.", hi: "भारत 15 अगस्त 1947 को स्वतंत्र हुआ।" },
  { en: "The Indian Ocean is named after India.", hi: "हिंद महासागर का नाम भारत के नाम पर रखा गया है।" },
];

// Rotate fun facts on home page
function startFunFacts() {
  const el = document.getElementById('fact-text');
  if (!el) return;
  let i = Math.floor(Math.random() * FACTS.length);
  function show() {
    const f = FACTS[i % FACTS.length];
    el.innerHTML = `${f.en} <span style="color:#7f5000;font-size:.85em;">• ${f.hi}</span>`;
    i++;
  }
  show();
  setInterval(show, 5500);
}

// Tab switching
function initTabs() {
  document.querySelectorAll('.tbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.tab;
      document.querySelectorAll('.tbtn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tpanel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(t);
      if (panel) panel.classList.add('active');
    });
  });
}

// Table search
function initSearch(inputId, tableId) {
  const inp = document.getElementById(inputId);
  const tbl = document.getElementById(tableId);
  if (!inp || !tbl) return;
  inp.addEventListener('input', () => {
    const q = inp.value.toLowerCase();
    tbl.querySelectorAll('tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// Set active nav link based on current page
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  startFunFacts();
  initTabs();
  setActiveNav();
});
