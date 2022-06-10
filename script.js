$(document).ready(function(){
  $(".back").mouseover(function() { $(this).addClass("tr-over"); });
  $(".back").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".about").mouseover(function() { $(this).addClass("tr-over"); });
  $(".about").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".building").mouseover(function() { $(this).addClass("tr-over"); });
  $(".building").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".agents").mouseover(function() { $(this).addClass("tr-over"); });
  $(".agents").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".news").mouseover(function() { $(this).addClass("tr-over"); });
  $(".news").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".list").mouseover(function() { $(this).addClass("tr-over"); });
  $(".list").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".request").mouseover(function() { $(this).addClass("tr-over"); });
  $(".request").mouseout(function() { $(this).removeClass("tr-over"); });
  $(".bigtext").mouseover(function() { $(".white_back").addClass("tr-over"); });
  $(".bigtext").mouseout(function() { $(".white_back").removeClass("tr-over"); });

});
function changeItem() {
  document.getElementById('circle').style.background = '#FF4A4A';
}// при наведении круг под курсором меняет оттенок красного.

function rechangeItem() {
  document.getElementById('circle').style.background = '#FF0000';
}// при отводе круг под курсором возвращает свой цвет.

document.addEventListener('mousemove', e => {
    circle.style.left = e.pageX -125 + "px";
    circle.style.top = e.pageY -125 + "px";
});
