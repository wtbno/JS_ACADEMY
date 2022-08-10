const form = document.querySelector("#submit");   



form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Previnido");
});
