$("h1").css("color", "red");

$("h1").innerText = "Hello Ting";

$("a").attr("href", "https://www.baidu.com");


$("h1").click(function(){

  $("h1").css("color", "blue");

});

$("button").click(
function(){
  console.log(event);


}
);
