document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const nextIndex = event.key === "ArrowRight" ? index + 1 : index - 1;
          if (checkboxes[nextIndex]) {
            checkboxes[nextIndex].focus();
          }
        }
      });
    });
  });