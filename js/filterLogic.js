  // sidebar functions
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


// Languag Swich
// -------------------------------------------------------------------
//--------------------------------------------------------------------------

function setLanguage(lang) {
  const currentUrl = new URL(window.location.href);
  const currentType = currentUrl.searchParams.get("type");

  if (lang === "ar") {
    document.body.setAttribute("lang", "ar");
    document.body.setAttribute("dir", "rtl");
    localStorage.setItem("lang", "ar");
    document.querySelector(".english").style.display = "none";
    document.querySelector(".arabic").style.display = "block";
  } else {
    document.body.setAttribute("lang", "en");
    document.body.setAttribute("dir", "ltr");
    localStorage.setItem("lang", "en");
    document.querySelector(".english").style.display = "block";
    document.querySelector(".arabic").style.display = "none";
  }

  applyCategoryFilter(currentType);
  initSearchAndSort(); 
}

//----------------------------------------------------
//-------------------------------------------------------
// filter


function applyCategoryFilter(type) {
  const currentLang = document.body.getAttribute("lang") || "en";
  const container = document.querySelector(
    currentLang === "ar" ? ".arabic" : ".english"
  );
  if (!container) return;

  const sections = container.querySelectorAll("section");
  const searchArea = container.querySelector("#search-area");

  sections.forEach((sec) => (sec.style.display = "none"));

  if (type) {
    const targetSection = container.querySelector(`section.${type}`);
    if (targetSection) {
      targetSection.style.display = "block";
    } else {
      container.innerHTML =
        "<h2 style='text-align:center;margin-top:50px;'>لا توجد فعاليات لهذا القسم</h2>";
    }
    if (searchArea) searchArea.style.display = "none";
  } else {
    sections.forEach((sec) => (sec.style.display = "block"));
    if (searchArea) searchArea.style.display = "block";
  }
}

// -----------------------------------------------------------------
// Search & Sort

function initSearchAndSort() {
  const currentLang = document.body.getAttribute("lang") || "en";
  const container = document.querySelector(
    currentLang === "ar" ? ".arabic" : ".english"
  );
  if (!container) return;

  const sections = container.querySelectorAll("section");
  const searchInput = container.querySelector("#search-input");
  const searchBtn = container.querySelector("#search-btn");
  const sortSelect = container.querySelector("#sort-select");

  if (!searchInput || !searchBtn || !sortSelect) return;

  
  const newSearchBtn = searchBtn.cloneNode(true);
  searchBtn.parentNode.replaceChild(newSearchBtn, searchBtn);
  const newSortSelect = sortSelect.cloneNode(true);
  sortSelect.parentNode.replaceChild(newSortSelect, sortSelect);

  // serach
  newSearchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") {
      sections.forEach((sec) => {
        sec.style.display = "block";
        sec
          .querySelectorAll(".card")
          .forEach((card) => (card.style.display = "block"));
      });
      return;
    }

    sections.forEach((section) => {
      let found = false;
      section.querySelectorAll(".card").forEach((card) => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = "block";
          found = true;
        } else {
          card.style.display = "none";
        }
      });
      section.style.display = found ? "block" : "none";
    });
  });

  // months
  const months = {
    JAN: 0,
    FEB: 1,
    MAR: 2,
    APR: 3,
    MAY: 4,
    JUN: 5,
    JUL: 6,
    AUG: 7,
    SEP: 8,
    OCT: 9,
    NOV: 10,
    DEC: 11,
  };

  function parseDate(text) {
    const [day, month] = text.split(" ");
    return new Date(2025, months[month.toUpperCase()], parseInt(day));
  }

  function extractDate(card) {
    const text = card.querySelector("p").textContent;
    const match = text.match(/\b\d{1,2}\s+[A-Z]{3}\b/i);
    return match ? match[0].toUpperCase() : "1 JAN";
  }

  newSortSelect.addEventListener("change", () => {
    const order = newSortSelect.value;
    if (!order) return;

    sections.forEach((section) => {
      const cards = Array.from(section.querySelectorAll(".card"));
      cards.sort((a, b) => {
        const dateA = parseDate(extractDate(a));
        const dateB = parseDate(extractDate(b));
        return order === "asc" ? dateA - dateB : dateB - dateA;
      });
      const row = section.querySelector(".row");
      if (row) cards.forEach((card) => row.appendChild(card));
    });
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  const type = new URL(window.location.href).searchParams.get("type");
  applyCategoryFilter(type);
  initSearchAndSort();
});
