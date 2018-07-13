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
    "url('https://gdurl.com/At-Y')",
    "url('https://gdurl.com/gDik')",
    "url('https://gdurl.com/mDXy')"
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
