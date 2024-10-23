function toggleTab(e) {
  var hrefVal = $(e).attr("href");
  $(".nav-tabs li").removeClass("active");
  $('.nav-tabs li[data-active="' + hrefVal + '"]').addClass("active");
}

document.querySelectorAll(".nav.nav-tabs>li").forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.href.slice(-5) === "menu3")
      document.getElementById("leaveComment").classList.remove("hidden");
    else document.getElementById("leaveComment").classList.add("hidden");
  });
});
