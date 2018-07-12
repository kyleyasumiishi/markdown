/*
 * Hides dropdown content when click event is not triggered by dropdown button.
 */
export function onClick(event) {
  const ddContent = event.target.parentNode.querySelector(".dropdown-content");

  switch (event.target.id) {
    case "options-dropdown":
      ddContent.style.display =
        ddContent.style.display === "" || ddContent.style.display === "none"
          ? "block"
          : "none";
      document
        .getElementById("themes-dropdown")
        .parentNode.querySelector(".dropdown-content").style.display =
        "none";
      break;
    case "themes-dropdown":
      ddContent.style.display =
        ddContent.style.display === "" || ddContent.style.display === "none"
          ? "block"
          : "none";
      document
        .getElementById("options-dropdown")
        .parentNode.querySelector(".dropdown-content").style.display =
        "none";
      break;
    default:
      document
        .getElementById("themes-dropdown")
        .parentNode.querySelector(".dropdown-content").style.display =
        "none";
      document
        .getElementById("options-dropdown")
        .parentNode.querySelector(".dropdown-content").style.display =
        "none";
  }
}
