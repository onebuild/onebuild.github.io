$(document).ready(function () {
  $("#indexContainer a").click(function (e) {
    loadInitArticle()
    $(this).addClass("is-active").siblings($(this)).removeClass("is-active")
  })
  loadInitArticle()

});
function loadInitArticle() {
  $("#articlebody").load("tutorials/python/introduction.html", function () {

  })
}