window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#signupForm");
  const modal = document.querySelector(".modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log(data);
    if (form.checkValidity()) {
      modal.style.display = "block";
    }
  });

  const closeIcon = document.querySelector(".close");
  closeIcon.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
