/* code by webdevtrick ( https://webdevtrick.com ) */
$(".btnx").click(function(){
    $(".inputx").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".inputx").val("");
  });
