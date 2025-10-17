 function showsidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hidesidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Add event listeners
document.querySelector('.menu-toggle').addEventListener('click', showsidebar);
document.querySelector('.sidebar .close').addEventListener('click', hidesidebar);

    function showsidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'flex';
    }

    function hidesidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';
    }
    // ------------------------------------------------------------------
      // sidebar functions
function showsidebarar() {
  const sidebarar = document.querySelector('.arabic .sidebar');
  sidebarar.style.display = 'flex';
}

function hidesidebarar() {
  const sidebarar = document.querySelector('.arabic .sidebar');
  sidebarar.style.display = 'none';
}

// Add event listeners
document.querySelector('.arabic .menu-toggle').addEventListener('click', showsidebarar);
document.querySelector('.arabic .sidebar .close').addEventListener('click', hidesidebarar);

    function showsidebarar() {
      const sidebarar = document.querySelector('.arabic .sidebar');
      sidebarar.style.display = 'flex';
    }

    function hidesidebarar() {
      const sidebarar = document.querySelector('.arabic .sidebar');
      sidebarar.style.display = 'none';
    }





// slider cards

const slide = document.getElementById('slider');
const cards = slide.querySelectorAll('.card');
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

// لحساب المسافة التي ينزلق بها السلايدر كل مرة
function getScrollAmount() {
  const card = cards[0];
  const style = getComputedStyle(card);
  const gap = parseInt(style.marginRight) || 20;
  return card.offsetWidth + gap;
}

// التحقق هل السلايدر فعلاً قابل للتمرير
function isScrollable() {
  return slide.scrollWidth > slide.clientWidth;
}

// التحكم بالأزرار (إظهار دائم بس مع سلوك ذكي)
nextBtn.addEventListener('click', () => {
  if (!isScrollable()) return; // لا يعمل شيء لو ما في تمرير
  const maxScrollLeft = slide.scrollWidth - slide.clientWidth;
  if (slide.scrollLeft >= maxScrollLeft - 1) {
    slide.scrollLeft = 0; // ارجع للبداية (دائري)
  } else {
    slide.scrollLeft += getScrollAmount();
  }
});

prevBtn.addEventListener('click', () => {
  if (!isScrollable()) return;
  if (slide.scrollLeft <= 0) {
    slide.scrollLeft = slide.scrollWidth; // ارجع للنهاية (دائري)
  } else {
    slide.scrollLeft -= getScrollAmount();
  }
});
// ----------------------------------------------------------------------------

// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || params.get("catrgor");
  const eventName = params.get("event");

  // اللغة الحالية
  const lang = document.body.getAttribute("lang") || "en";

  // إظهار القسم الصحيح (english أو arabic)
  const englishRoot = document.querySelector(".english");
  const arabicRoot = document.querySelector(".arabic");
  englishRoot.style.display = (lang === "en") ? "block" : "none";
  arabicRoot.style.display = (lang === "ar") ? "block" : "none";

  // نحدد الجذر النشط حسب اللغة
  const activeRoot = (lang === "ar") ? arabicRoot : englishRoot;
  if (!activeRoot) return;

  // نخفي كل الأقسام الفرعية (entertainment, sport, ...)
  activeRoot.querySelectorAll("section.entertainment, section.sport, section.culture, section.education")
    .forEach(sec => sec.style.display = "none");

  // نعرض القسم المطلوب فقط
  const activeCategory = activeRoot.querySelector(`section.${category}`);
  if (!activeCategory) return;
  activeCategory.style.display = "block";

  // نخفي جميع الفعاليات داخل القسم
  const allEvents = activeCategory.querySelectorAll(".event_detailes > div");
  allEvents.forEach(div => div.style.display = "none");

  // نعرض الفعالية المطلوبة فقط
  const currentEvent = activeCategory.querySelector(`.event_detailes .${eventName}`);
  if (currentEvent) {
    currentEvent.style.display = "block";
  }

  // نعرض قسم فعاليات ذات صلة
  const related = activeCategory.querySelector(".related, .slider-container");
  if (related) related.style.display = "block";
});

function setLanguage(lang) {
  // نحفظ اللغة الجديدة في body
  document.body.setAttribute("lang", lang);
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // إظهار القسم الصحيح فقط
  document.querySelector(".english").style.display = (lang === "en") ? "block" : "none";
  document.querySelector(".arabic").style.display = (lang === "ar") ? "block" : "none";

  // إعادة تحميل تفاصيل الفعالية المناسبة بدون refresh
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || params.get("catrgor");
  const eventName = params.get("event");

  const activeRoot = (lang === "ar")
    ? document.querySelector(".arabic")
    : document.querySelector(".english");

  if (!activeRoot) return;

  // نخفي كل الأقسام الفرعية
  activeRoot.querySelectorAll("section.entertainment, section.sport, section.culture, section.education")
    .forEach(sec => sec.style.display = "none");

  // نعرض القسم المطلوب فقط
  const activeCategory = activeRoot.querySelector(`section.${category}`);
  if (!activeCategory) return;
  activeCategory.style.display = "block";

  // نخفي جميع الفعاليات ضمن التفاصيل
  const allEvents = activeCategory.querySelectorAll(".event_detailes > div");
  allEvents.forEach(div => div.style.display = "none");

  // نعرض الفعالية المطلوبة فقط
  const currentEvent = activeCategory.querySelector(`.event_detailes .${eventName}`);
  if (currentEvent) currentEvent.style.display = "block";

  // نعرض قسم فعاليات ذات صلة
  const related = activeCategory.querySelector(".related, .slider-container");
  if (related) related.style.display = "block";
}

// ---------------------------------------------------------------------------
// booking
 document.querySelectorAll(".event_detailes > div").forEach(section => {

  const openBtn = section.querySelector(".openModal");
  const modal = section.querySelector(".modal");
  const closeBtn = section.querySelector(".close");
  const form = section.querySelector(".bookingForm");

  if (!openBtn || !modal || !closeBtn || !form) return;

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = form.querySelector("input[type='email']");
    const phoneInput = form.querySelector(".phone");

   
    const emailValue = emailInput.value.trim();
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      alert("please enter a valid email!");
      return;
    }

   
    const phoneValue = phoneInput.value.trim();
    if (phoneValue.length !== 10 || !phoneValue.startsWith("09") || isNaN(phoneValue)) {
      alert("please enter a valid phone number!");
      return;
    }

    alert("Registration was seccessful! you will receive a replay soon");
    modal.style.display = "none";
    form.reset();
  });
});