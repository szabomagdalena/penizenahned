const translations = {
  cs: {
    heroTitle: "Rychlá a transparentní finanční řešení",
    heroText: "Pomáháme klientům získat přehled o možnostech financování bez skrytých poplatků.",
    heroBtn: "Spočítat splátku",
    calcTitle: "Kalkulačka úvěru",
    calcAmount: "Požadovaná částka",
    calcMonths: "Doba splácení",
    calcResult: "Odhadovaná měsíční splátka",
    calcDisclaimer: "*Tato kalkulace je pouze orientační a nezavazuje k uzavření smlouvy.",
    aboutTitle: "O nás",
    aboutText: "Jsme stabilní lokální partner v oblasti finančních řešení a úvěrů. Naším cílem je pomáháme lidem bezpečně a transparentně překlenout finanční potřeby – ať už jde o bydlení, podnikání nebo nečekané výdaje. Zakládáme si na férovém jednání, diskrétnosti a řešení šitém na míru každému klientovi.",
    reviewsTitle: "Reference našich klientů",
    contactTitle: "Kontakt",
    contactLead: "Máte dotazy k úvěrům nebo chcete probrat své možnosti? Ozvěte se nám.",
    formTitle: "Nezávazná poptávka",
    formName: "Jméno a příjmení",
    formEmail: "E-mailová adresa",
    formPhone: "Telefonní číslo",
    formMsg: "Mám zájem o více informací",
    formBtn: "Odeslat poptávku"
  },
  sk: {
    heroTitle: "Rýchle a transparentné finančné riešenia",
    heroText: "Pomáhame klientom získať prehľad o možnostiach financovania bez skrytých poplatkov.",
    heroBtn: "Spočítať splátku",
    calcTitle: "Kalkulačka úveru",
    calcAmount: "Požadovaná čiastka",
    calcMonths: "Doba splácania",
    calcResult: "Odhadovaná mesačná splátka",
    calcDisclaimer: "*Táto kalkulácia je len orientačná a nezaväzuje k uzatvoreniu zmluvy.",
    aboutTitle: "O nás",
    aboutText: "Sme stabilný lokálny partner v oblasti finančných riešení a úverov. Naším cieľom je pomáháť ľuďom bezpečne a transparentne preklenúť finančné potreby – či už ide o bývanie, podnikanie alebo nečakané výdavky. Zakladáme si na férovom jednaní, diskrétnosti a riešení šitom na mieru každému klientovi.",
    reviewsTitle: "Referencie našich klientov",
    contactTitle: "Kontakt",
    contactLead: "Máte otázky k úverom alebo chcete prebrať svoje možnosti? Ozvite sa nám.",
    formTitle: "Nezáväzný dopyt",
    formName: "Meno a priezvisko",
    formEmail: "E-mailová adresa",
    formPhone: "Telefónne číslo",
    formMsg: "Mám záujem o viac informácií",
    formBtn: "Odoslať dopyt"
  },
  en: {
    heroTitle: "Fast and Transparent Financial Solutions",
    heroText: "We help clients get a clear overview of financing options with zero hidden fees.",
    heroBtn: "Calculate Payment",
    calcTitle: "Loan Calculator",
    calcAmount: "Requested Amount",
    calcMonths: "Repayment Period",
    calcResult: "Estimated Monthly Payment",
    calcDisclaimer: "*This calculation is informative only and does not constitute a binding offer.",
    aboutTitle: "About Us",
    aboutText: "We are a stable local partner in financial solutions and loans. Our goal is to help people safely and transparently bridge their financial needs—whether for housing, business, or unexpected expenses. We pride ourselves on fair dealing, discretion, and tailor-made solutions.",
    reviewsTitle: "Client Testimonials",
    contactTitle: "Contact Us",
    contactLead: "Have questions about loans or want to discuss your options? Get in touch.",
    formTitle: "Non-binding Inquiry",
    formName: "Full Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formMsg: "I am interested in more information",
    formBtn: "Send Inquiry"
  }
};

function setLang(lang) {
  // Update active button styling classes safely
  if (event && event.target) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  // Update DOM text elements safely across languages
  document.getElementById("hero-title").innerText = translations[lang].heroTitle;
  document.getElementById("hero-text").innerText = translations[lang].heroText;
  document.querySelector(".hero .btn-premium").innerText = translations[lang].heroBtn;
  
  // Calculator text transitions
  document.querySelector("#calculator .section-title").innerText = translations[lang].calcTitle;
  document.querySelectorAll(".range-group label")[0].innerText = translations[lang].calcAmount;
  document.querySelectorAll(".range-group label")[1].innerText = translations[lang].calcMonths;
  document.querySelector(".calc-result h3").innerText = translations[lang].calcResult;
  document.querySelector(".calc-disclaimer").innerText = translations[lang].calcDisclaimer;
  
  // About & Section Headings
  document.querySelectorAll(".section-title")[1].innerText = translations[lang].aboutTitle;
  document.querySelector(".about-text").innerText = translations[lang].aboutText;
  document.querySelectorAll(".section-title")[2].innerText = translations[lang].reviewsTitle;
  
  // Contact & Form Containers
  document.querySelectorAll(".section-title")[3].innerText = translations[lang].contactTitle;
  document.querySelector(".contact-lead").innerText = translations[lang].contactLead;
  document.querySelector(".form-title").innerText = translations[lang].formTitle;
  
  // Input Form Label Updates
  const labels = document.querySelectorAll(".premium-form label");
  labels[0].innerText = translations[lang].formName;
  labels[1].innerText = translations[lang].formEmail;
  labels[2].innerText = translations[lang].formPhone;
  labels[3].innerText = translations[lang].formMsg;
  document.querySelector(".premium-form .btn-premium").innerText = translations[lang].formBtn;
  
  // Refresh the calculator to render numbers properly
  calc();
}

// Your Core Interactive Math Calculator
function calc(){
  let a = +amount.value, m = +months.value, r = 0.01;
  amountv.innerText = a.toLocaleString('cs-CZ'); // Nicely formats large numbers (e.g. 50 000)
  monthsv.innerText = m;
  let p = (a * r) / (1 - Math.pow(1 + r, -m));
  monthly.innerText = p.toFixed(2) + ' CZK';
}

// Initial math render on page load
calc();
