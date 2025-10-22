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


function getScrollAmount() {
  const card = cards[0];
  const style = getComputedStyle(card);
  const gap = parseInt(style.marginRight) || 20;
  return card.offsetWidth + gap;
}


function isScrollable() {
  return slide.scrollWidth > slide.clientWidth;
}


nextBtn.addEventListener('click', () => {
  if (!isScrollable()) return; 
  const maxScrollLeft = slide.scrollWidth - slide.clientWidth;
  if (slide.scrollLeft >= maxScrollLeft - 1) {
    slide.scrollLeft = 0; 
  } else {
    slide.scrollLeft += getScrollAmount();
  }
});

prevBtn.addEventListener('click', () => {
  if (!isScrollable()) return;
  if (slide.scrollLeft <= 0) {
    slide.scrollLeft = slide.scrollWidth; 
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

  const activeRoot = (lang === "ar") ? arabicRoot : englishRoot;
  if (!activeRoot) return;

  // نخفي كل الأقسام الفرعية (entertainment, sport, ...)
  activeRoot.querySelectorAll("section.entertainment, section.sport, section.culture, section.education")
    .forEach(sec => sec.style.display = "none");

  // نعرض القسم المطلوب فقط
  const activeCategory = activeRoot.querySelector(`section.${category}`);
  if (!activeCategory) return;
  activeCategory.style.display = "block";

  
  const allEvents = activeCategory.querySelectorAll(".event_detailes > div");
  allEvents.forEach(div => div.style.display = "none");

  
  const currentEvent = activeCategory.querySelector(`.event_detailes .${eventName}`);
  if (currentEvent) {
    currentEvent.style.display = "block";
  }

 
  const related = activeCategory.querySelector(".related, .slider-container");
  if (related) related.style.display = "block";
});

function setLanguage(lang) {
  
  document.body.setAttribute("lang", lang);
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelector(".english").style.display = (lang === "en") ? "block" : "none";
  document.querySelector(".arabic").style.display = (lang === "ar") ? "block" : "none";

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || params.get("catrgor");
  const eventName = params.get("event");

  const activeRoot = (lang === "ar")
    ? document.querySelector(".arabic")
    : document.querySelector(".english");

  if (!activeRoot) return;

  activeRoot.querySelectorAll("section.entertainment, section.sport, section.culture, section.education")
    .forEach(sec => sec.style.display = "none");

  const activeCategory = activeRoot.querySelector(`section.${category}`);
  if (!activeCategory) return;
  activeCategory.style.display = "block";

  const allEvents = activeCategory.querySelectorAll(".event_detailes > div");
  allEvents.forEach(div => div.style.display = "none");

  const currentEvent = activeCategory.querySelector(`.event_detailes .${eventName}`);
  if (currentEvent) currentEvent.style.display = "block";

  
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
// =================================================
// share and plus to calendar
 document.querySelectorAll(".event_detailes > div").forEach(section => {

  const shareBtn = section.querySelector(".share");
  const calendarBtn = section.querySelector(".calendar");

  shareBtn.addEventListener('click', function() {
            alert('A widow will open to share on Facebook');
            
            const url = encodeURIComponent(window.location.href);
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');

       
        });
        calendarBtn.addEventListener('click', function() {
    const event = {
        title: 'عنوان الحدث',
        start: '2023-12-25T10:00:00',
        end: '2023-12-25T12:00:00',
        details: 'تفاصيل الحدث',
        location: 'موقع الحدث'
    };
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/-|:|\.\d+/g, '')}/${event.end.replace(/-|:|\.\d+/g, '')}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleUrl, '_blank');
});

  
  });
// dark mode

  const toggles = document.querySelectorAll('.theme-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

    });
  });

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});
