const encEmail = "aW5mb0B6a2V5LmRl";
const element = document.getElementById("contactEmail");
element.setAttribute("href", "mailto:".concat(atob(encEmail)));
