$(function(){
  var height;
  $("#userInput").submit(function(event){
  height = parseInt($("input#height").val());
  if (height < 42 ) {
  $('#middle').hide();
  $('#tall').hide();
  $('#short').show();
} else if (height >= 54) {
  $('#middle').show();
  $('#tall').show();
  $('#short').hide();
} else {
  $('#short').show();
  $('#middle').show();
  $('#tall').show();
}
event.preventDefault();
})
});
