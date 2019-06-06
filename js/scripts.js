$(function(){
  var height;
  $("#userInput").submit(function(event){
  height = parseInt($("input#height").val());

  if (height < 42 ) {
  // $('#middle').hide();
  // $('#tall').hide();
  // $('#short').show();

  $(".myRides").show();
  $(".tallName").removeClass("rideable");
  $(".middleName").removeClass("rideable");
  $(".shortName").addClass("rideable");
} else if (height >= 54) {
  // $('#middle').show();
  // $('#tall').show();
  // $('#short').hide();

  $(".myRides").show();
  $(".shortName").removeClass("rideable");
  $(".middleName").addClass("rideable");
  $(".tallName").addClass("rideable");
} else {
  // $('#short').show();
  // $('#middle').show();
  // $('#tall').show();

  $(".myRides").show();
  $(".shortName").addClass("rideable");
  $(".middleName").addClass("rideable");
  $(".tallName").removeClass("rideable");
}
event.preventDefault();
})
});
