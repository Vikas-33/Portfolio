document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const sections = document.querySelectorAll(".hero-section, .skills, .projects, .contact, .footer, .navbar");

    function applyTheme(theme) {
        document.body.classList.remove("light-theme", "dark-theme");
        sections.forEach(section => section.classList.remove("light-theme", "dark-theme"));

        document.body.classList.add(theme);
        sections.forEach(section => section.classList.add(theme));

        icon.classList.toggle("fa-sun", theme === "light-theme");
        icon.classList.toggle("fa-moon", theme === "dark-theme");

        localStorage.setItem("theme", theme);
    }

    // Default theme is dark if no preference is set
    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    applyTheme(savedTheme);

    toggleButton.addEventListener("click", function () {
        const newTheme = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";
        applyTheme(newTheme);
    });
});
