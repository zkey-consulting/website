const form = document.getElementById("contactform");
const result = document.getElementById("contactformResult");

form.addEventListener("submit", function (e) {
  const customErrorMsg = "Etwas ist fehlgeschlagen! Bitte kontaktieren Sie mich via Email: " + atob("aW5mb0B6a2V5LmRl");
  const customSuccessMsg = "Vielen Dank!";

  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Bitte warten ...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = customSuccessMsg;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = customErrorMsg;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = customErrorMsg;
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
