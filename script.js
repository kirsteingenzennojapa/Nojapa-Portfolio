function toggleTheme() {
  const body = document.body
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"
  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  document.querySelector(".theme-toggle").textContent = newTheme === "light" ? "🌙" : "☀️"
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark"
document.body.setAttribute("data-theme", savedTheme)
document.querySelector(".theme-toggle").textContent = savedTheme === "light" ? "🌙" : "☀️"
