// ======= Theme Toggle =======
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const themeIcon = document.querySelector(".theme-icon");
  themeIcon.textContent = newTheme === "dark" ? "☀" : "☾";
}

document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);

  const themeIcon = document.querySelector(".theme-icon");
  themeIcon.textContent = savedTheme === "dark" ? "☀" : "☾";

  // ======= Editable Section Feature =======
  document.querySelectorAll(".section").forEach((section, sectionIndex) => {
    const editBtn = section.querySelector(".editBtn");
    const editableTexts = section.querySelectorAll(".editable");

    // Restore saved edits for this section
    editableTexts.forEach((el, textIndex) => {
      const savedText = localStorage.getItem(`section_${sectionIndex}_text_${textIndex}`);
      if (savedText) el.textContent = savedText;
    });

    let editing = false;

    if (editBtn) {
      editBtn.addEventListener("click", () => {
        editing = !editing;
        if (editing) {
          // Enable editing
          editableTexts.forEach(el => el.setAttribute("contenteditable", "true"));
          editBtn.textContent = "Save";
          editBtn.classList.add("save-mode");
        } else {
          // Save edits
          editableTexts.forEach((el, textIndex) => {
            el.setAttribute("contenteditable", "false");
            localStorage.setItem(`section_${sectionIndex}_text_${textIndex}`, el.textContent);
          });
          editBtn.textContent = "Edit";
          editBtn.classList.remove("save-mode");
        }
      });
    }
  });
});
