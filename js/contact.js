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




document.querySelectorAll(".massegeForm").forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = form.querySelector("input[type='email']");
    const phoneInput = form.querySelector(".phone");

    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

   
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      alert("Please enter a valid email!");
      return;
    }

    
    if (phoneValue.length !== 10 || !phoneValue.startsWith("09") || isNaN(phoneValue)) {
      alert("Please enter a valid phone number!");
      return;
    }

    alert("Your message has been sent successfully! you wil receive a reply soon");
    form.reset();
  });
});
// =======================================================

function setLanguage(lang){
  if(lang=='ar'){
    document.body.setAttribute('lang','ar');
  document.body.setAttribute('dir', 'rtl');

  }
  
  else{
     document.body.setAttribute('lang','en');
  document.body.setAttribute('dir', 'ltr');
  }
}
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
