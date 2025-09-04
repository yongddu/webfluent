// common.js
// .btn-menu 클릭 시 .m-menu에 active 클래스 추가
// .btn-close 클릭 시 .m-menu에서 active 클래스 제거
document.addEventListener("DOMContentLoaded", function () {
  var btnMenu = document.querySelector(".btn-menu");
  var btnClose = document.querySelector(".btn-close");
  var mMenu = document.querySelector(".m-menu");

  if (btnMenu && mMenu) {
    btnMenu.addEventListener("click", function () {
      mMenu.classList.add("active");
    });
  }

  if (btnClose && mMenu) {
    btnClose.addEventListener("click", function () {
      mMenu.classList.remove("active");
    });
  }
});
