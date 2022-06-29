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
    $(".building").removeClass("on");
    $(".building").addClass("add_grey");
  });
  $(".about, .building, .agents, .news, .list, .request, .ver1_1, .ver1_2, .ver1_3, .ver1_4, .ver1_5, .ver1_6, .ver1_7, .ver1_8").mouseout(function() {
    $(".building").addClass("on");
    $(".building").removeClass("add_grey");
  });

});
// function changeItem() {
//   document.getElementById('circle').style.background = '#FF4A4A';
// }// при наведении круг под курсором меняет оттенок красного.
//
// function rechangeItem() {
//   document.getElementById('circle').style.background = '#FF0000';
// }// при отводе круг под курсором возвращает свой цвет.
