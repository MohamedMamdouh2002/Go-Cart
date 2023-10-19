
$(document).ready(function() {
  $("#cartList").hide();

  $("#Carticon").click(function(event) {
    $("#cartList").fadeToggle(0);
  });

  $(document).click(function(event) {
    if (!$(event.target).closest("#Carticon").length && !$(event.target).closest("#cartList").length && $("#cartList").is(":visible")) {
      $("#cartList").fadeOut(0);
    }
  });
});
  

