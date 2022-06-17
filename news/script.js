$(document).ready(function(){

  document.addEventListener('mousemove', e => {
      circle.style.left = e.pageX -125 + "px";
      circle.style.top = e.pageY -125 + "px";
  });

  // $(".back").mouseover(function() {
  //   $(this).addClass("tr-over");
  //   $(".news").addClass("add_white");
  // });
  // $(".back").mouseout(function() {
  //   $(this).removeClass("tr-over");
  //   $(".news").removeClass("add_white"); });
  //
  $(".about, .building, .agents, .news, .list, .request, .ver1_1, .ver1_2, .ver1_3, .ver1_4, .ver1_5, .ver1_6, .ver1_7, .ver1_8").mouseover(function() {
    $(".news").addClass("add_grey");
  });
  $(".about, .building, .agents, .news, .list, .request, .ver1_1, .ver1_2, .ver1_3, .ver1_4, .ver1_5, .ver1_6, .ver1_7, .ver1_8").mouseout(function() {
    $(".news").removeClass("add_grey");
  });


  $(".right, .right1").click(function () {
    $(".circle2, .left1").addClass("add_black");
    $(".left").addClass("add_black1");
    $(".circle1, .circle3").addClass("add_grey1");
    $(".photo1").css("background-image","url(images/poster3.png)");
    $(".april_30").css("display","none");
    $(".new_txt").css("display","block");
  });

  $(".left, .left1").click(function () {
    $(".circle2, .left1").removeClass("add_black");
    $(".left").removeClass("add_black1");
    $(".circle1").removeClass("add_grey1");
    $(".photo1").css("background-image","url(images/posters1.png)");
    $(".april_30").css("display","block");
    $(".new_txt").css("display","none");
  });

});

  // $(".right, .right1").click(function () {
  //   $(".circle3, .left1").addClass("add_black");
  //   $(".left").addClass("add_black1");
  //   $(".circle1, .circle2").addClass("add_grey1");
  // });
  // $(".right, .right1").click(function two() {
  //   $(".circle3, .left1").addClass("add_black");
  //   $(".left").addClass("add_black1");
  //   $(".circle1, .circle2, .right1").addClass("add_grey1");
  // });
// function changeItem() {
//   document.getElementById('circle').style.background = '#FF4A4A';
// }// при наведении круг под курсором меняет оттенок красного.
//
// function rechangeItem() {
//   document.getElementById('circle').style.background = '#FF0000';
// }// при отводе круг под курсором возвращает свой цвет.
