const btnTooggle = document.querySelector(".toggle-btn");

btnTooggle.addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});
