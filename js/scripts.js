$(document).ready(function() {
  $("img#icondesign").click(function() {
    $("img#icondesign").hide();
    $(".designdescription").show();
  });
  $(".designdescription").click(function(){
    $("img#icondesign").show();
    $(".designdescription").hide();
  });
  $("img#development").click(function() {
    $("img#development").hide();
    $(".developmentdescription").show();
  });
  $(".developmentdescription").click(function(){
    $("img#development").show();
    $(".developmentdescription").hide();  
  });
});
