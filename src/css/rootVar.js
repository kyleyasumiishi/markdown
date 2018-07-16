import space from "../img/milky-way.jpg";
import dog from "../img/dog.jpg";
import retro from "../img/retro.jpg";

const rootVariables = {
  "--header-background-color": ["#292323", "#292323", "#271b12", "#5a4c50"],
  "--editor-background-color": [
    "#889e86",
    "transparent",
    "transparent",
    "transparent"
  ],
  "--button-hover-color": ["#889e86", "#807ac2", "#f2cca7", "#8bbfb1"],
  "--previewer-background-color": ["white", "white", "white", "white"],
  "--panel-heading-background-color": [
    "#292323",
    "#2e315d",
    "#271b12",
    "#5a4c50"
  ],
  "--header-text-color": ["white", "white", "white", "white"],
  "--editor-text-color": ["black", "white", "white", "black"],
  "--border-color": ["lightgray", "lightgray", "lightgray", "lightgray"],
  "--dropdown-text-color": ["black", "black", "black", "black"],
  "--image-url": [
    "none",
    `url(${space})`,
    `url(${dog})`,
    `url(${retro})`
  ]
};

function updateRootVariables(idx) {
  for (let variable in rootVariables) {
    if (rootVariables.hasOwnProperty(variable)) {
      const value = rootVariables[variable][idx];
      document.documentElement.style.setProperty(variable, value);
    }
  }
}

export function selectDefault() {
  updateRootVariables(0);
}

export function selectSpace() {
  updateRootVariables(1);
}

export function selectDog() {
  updateRootVariables(2);
}
export function selectRetro() {
  updateRootVariables(3);
}
