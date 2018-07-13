export function setDropdownVisibility(e) {
  const id = e.target.id;
  switch (id) {
    case "options-dropdown":
      toggleVisibility(id);
      hideDropdown("themes-dropdown");
      break;
    case "themes-dropdown":
      toggleVisibility(id);
      hideDropdown("options-dropdown");
      break;
    default:
      hideDropdown("themes-dropdown");
      hideDropdown("options-dropdown");
  }
}

function toggleVisibility(id) {
  const dropdown = document
    .getElementById(id)
    .parentNode.querySelector(".dropdown-content");
  dropdown.style.display =
    dropdown.style.display === "" || dropdown.style.display === "none"
      ? "block"
      : "none";
}

function hideDropdown(id) {
  document
    .getElementById(id)
    .parentNode.querySelector(".dropdown-content").style.display =
    "none";
}
