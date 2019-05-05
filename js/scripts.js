$(document).ready(function() {
  $("img#icondesign").click(function() {
    $("img#icondesign").hide();
    $(".designdescription").show();
  });
  $(".designdescription").click(function(){
    $("img#icondesign").show();
    $(".designdescription").hide();
  });
});
