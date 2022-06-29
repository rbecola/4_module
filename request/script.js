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
  $(".news, .about, .building, .agents, .news, .list, .ver1_1, .ver1_2, .ver1_3, .ver1_4, .ver1_5, .ver1_6, .ver1_7, .ver1_8").mouseover(function() {
    $(".request").removeClass("on");
    $(".request").addClass("add_grey");
  });
  $(".news, .about, .building, .agents, .news, .list, .ver1_1, .ver1_2, .ver1_3, .ver1_4, .ver1_5, .ver1_6, .ver1_7, .ver1_8").mouseout(function() {
    $(".request").addClass("on");
    $(".request").removeClass("add_grey");
  });

  $(".next_button").mouseover(function() {
    $(this).css("background-color","#FF4A4A");
  });
  $(".next_button").mouseout(function() {
    $(this).css("background-color","#DADADA");
  });

  $(".next_button").click(function() {
    $(".control-box").css("display","none");
    $(".agents_1").css("background-color","#FF4A4A");
    $(".services").css("background-color","white");
    $(".choice_a").css("background-color","white");
    $(".choice_s").css("background-color","black");
    $(".text_width").css("color","white");
    $(".next_button").css("display","none");
    $(".prev_button").css("display","block");
    $(".container_request").addClass("new_grid");

  });
  $(".prev_button").click(function() {
    $(".control-box").css("display","block");
    $(".services").css("background-color","#FF4A4A");
    $(".agents_1").css("background-color","white");
    $(".choice_a").css("background-color","black");
    $(".choice_s").css("background-color","white");
    $(".next_button").css("display","block");
    $(".prev_button").css("display","none");
    $(".text_width").css("color","black");
    $(".container_request").removeClass("new_grid");
  });
  // $("posters_show, .cat_grey").mouseover(function() {
  //   $('circle').addClass("display_none");
  // });
  // $(".posters_show, .cat_grey").mouseout(function() {
  //   $('circle').removeClass("display_none");
  // });

  // Carousel Auto-Cycle
      $('.carousel').carousel({
        interval: false
      })
      // $(".choice_s, .carousel, .carousel-inner").mouseover(function() {
      //   $('.carousel').carousel({
      //     interval: false
      //   })
      // });

  $(function() {
    $('.marquee').marquee({
      duration: 10000,
      startVisible: true,
      duplicated: true
    });
  });
});



// function changeItem() {
//   document.getElementById('circle').style.background = '#FFFFFF';
// }// при наведении круг под курсором меняет оттенок красного.
//
// function rechangeItem() {
//   document.getElementById('circle').style.background = '#FF0000';
// }// при отводе круг под курсором возвращает свой цвет.
