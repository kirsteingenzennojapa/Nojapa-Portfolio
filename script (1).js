function toggleTheme() {
  document.body.classList.toggle("dark")
  const btn = document.querySelector(".theme-toggle")
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light")
}

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("dark")
  document.querySelector(".theme-toggle").textContent = "🌙"
}
