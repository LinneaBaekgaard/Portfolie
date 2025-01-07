// Find knappen
const darkModeToggle = document.getElementById("darkModeToggle");

// Check om dark-mode er aktiveret i localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.classList.add("dark-mode");
  darkModeToggle.textContent = "Skift til Lys Tilstand";
}

// Få funktion til at skifte til mørk/løs tilstand
darkModeToggle.addEventListener("click", function () {
  // Skift dark mode tilstand
  document.body.classList.toggle("dark-mode");
  darkModeToggle.classList.toggle("dark-mode");

  // Skift tekst på knappen
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Skift til Lys Tilstand";
    localStorage.setItem("dark-mode", "enabled"); // Gem indstillingen i localStorage
  } else {
    darkModeToggle.textContent = "Skift til Mørk Tilstand";
    localStorage.removeItem("dark-mode"); // Fjern indstillingen i localStorage
  }
});
