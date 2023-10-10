const toggleSwitch = document.getElementById("switcher");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.documentElement.style.setProperty("--color-title", "#CCCCCC");
    document.documentElement.style.setProperty("--dark-content", "#A7A7A7");
    document.documentElement.style.setProperty("--light-content", "#A7A7A7");
    document.documentElement.style.setProperty("--bg", "#191919");
    document.documentElement.style.setProperty("--card-container", "#363636");
    document.documentElement.style.setProperty(
      "--project-card-bottom",
      "#FFFFFF"
    );
    document.documentElement.style.setProperty("--icon-fill", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--project-card-title",
      "#CCCCCC"
    );
    document.documentElement.style.setProperty(
      "--hamburger-shadow",
      "rgba(255, 255, 255, 0.3)"
    );
  } else {
    document.documentElement.style.setProperty("--color-title", "#42446e");
    document.documentElement.style.setProperty("--dark-content", "#666666");
    document.documentElement.style.setProperty("--light-content", "#a7a7a7");
    document.documentElement.style.setProperty("--bg", "white");
    document.documentElement.style.setProperty("--card-container", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--project-card-bottom",
      "#000000"
    );
    document.documentElement.style.setProperty("--icon-fill", "#000000");
    document.documentElement.style.setProperty(
      "--project-card-title",
      "#000000"
    );
    document.documentElement.style.setProperty(
      "--hamburger-shadow",
      "rgba(0, 0, 0, 0.3)"
    );
  }
});
