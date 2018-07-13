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

function setProperty(idx) {
  for (let property in rootVariables) {
    if (rootVariables.hasOwnProperty(property)) {
      const value = rootVariables[property][idx];
      document.documentElement.style.setProperty(property, value);
    }
  }
}

export function selectDefault() {
  setProperty(0);
}

export function selectSpace() {
  setProperty(1);
}

export function selectDog() {
  setProperty(2);
}
export function selectRetro() {
  setProperty(3);
}
