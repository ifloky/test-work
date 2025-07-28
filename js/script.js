document.addEventListener("DOMContentLoaded", () => {
  const range = document.querySelector("input[type='range']");
  const label = range?.nextElementSibling;

  if (range && label) {
    label.textContent = `${range.value} %`;

    range.addEventListener("input", () => {
      label.textContent = `${range.value} %`;
    });
  }
});
