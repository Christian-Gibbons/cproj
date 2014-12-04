$(document).ready(function(){
  $('iframe').addClass('hidden');
  $('span').hover(function(){
    $('span').css('cursor','pointer');
  })
  $('#p1').click(function(){ 
    $('.link').removeClass('selected');
    $('#p1').addClass('selected');
    $('#youtube').html('<iframe class=link id=y1 width="560" height="315" src="//www.youtube.com/embed/nhqRLap_4WM?list=PLvqIVBTCo849kgCyR8zemiXRb8CfdfAbw" frameborder="0" allowfullscreen></iframe>');
  });
  $('#p2').click(function(){  
    $('.link').removeClass('selected');
    $('#p2').addClass('selected');
    $('#youtube').html('<iframe class=link id=y2 width="560" height="315" src="//www.youtube.com/embed/h1Lod6cMFxQ" frameborder="0" allowfullscreen></iframe>');   
  });
  $('#p3').click(function(){
    $('.link').removeClass('selected');
    $('#p3').addClass('selected');
    $('#youtube').html('<iframe class=link id=y3 width="560" height="315" src="//www.youtube.com/embed/lQXAJN5cMKA" frameborder="0" allowfullscreen></iframe>');    
  });
  $('#p4').click(function(){
    $('.link').removeClass('selected');
    $('#p4').addClass('selected');
    $('#youtube').html('<iframe class=link id=y4 width="560" height="315" src="//www.youtube.com/embed/Uv4L4l66KSc" frameborder="0" allowfullscreen></iframe>');
  });
  $('#p5').click(function(){
    $('.link').removeClass('selected');
    $('#p5').addClass('selected');
    $('#youtube').html('<iframe class=link id=y5 width="420" height="315" src="//www.youtube.com/embed/_FCQ29Vmt1k" frameborder="0" allowfullscreen></iframe>');
  });
  $('#p6').click(function(){
    $('.link').removeClass('selected');
    $('#p6').addClass('selected');
    $('#youtube').html('<iframe class=link id=y6 width="560" height="315" src="//www.youtube.com/embed/_mF5lkQzP-U" frameborder="0" allowfullscreen></iframe>');
  });
  $('#p7').click(function(){
    $('.link').removeClass('selected');
    $('#p7').addClass('selected');
    $('#youtube').html('<iframe class=link id=y7 width="560" height="315" src="//www.youtube.com/embed/OC6003MjYR8" frameborder="0" allowfullscreen></iframe>');
  });
  $('#p8').click(function(){
    $('.link').removeClass('selected');
    $('#p8').addClass('selected');
    $('#youtube').html('<iframe class=link id=y8 width="420" height="315" src="//www.youtube.com/embed/yzE0b2JnTo0" frameborder="0" allowfullscreen></iframe>');
  });
  $('#p9').click(function(){
    $('.link').removeClass('selected');
    $('#p9').addClass('selected');
    $('#youtube').html('<iframe class=link id=y9 width="560" height="315" src="//www.youtube.com/embed/HKiCIN4nW_c" frameborder="0" allowfullscreen></iframe>');
  });
});