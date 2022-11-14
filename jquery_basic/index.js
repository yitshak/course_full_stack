// $(document).ready(function() {
//   $("h1").css("color","red")
// })
//
// $("button").css("color","blue")
// $("h1").text("googbye")
// $("button").text("our buttons")
//
// $("button").html("<em>Goodbye for good</em>")
//console.log($("img").attr("src"))

// $("h1").click(function(){
//   $("h1").css("color","purple");
// })

// $("button").click(function() {
//   $("h1").css("color","green");
// })

$("input").keydown(function(event){
  console.log(event.key);
  $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
  $("h1").css("color","purple")
})

$("button").click(function() {
  // $("h1").toggle();
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
