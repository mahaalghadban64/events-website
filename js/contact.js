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
