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
  $("img#management").click(function() {
    $("img#management").hide();
    $(".managementdescription").show();
  });
  $(".managementdescription").click(function(){
    $("img#management").show();
    $(".managementdescription").hide();
  });
  $("#submitbutton").click(function(){
    var messageHere = (document.getElementById("messagehere").value);
    var name = (document.getElementById("name").value);
    if(messageHere != "") {
    alert(name + " we have received your message. Thank you for reaching out to us.");
    }
  });
});
