$(document).ready(function(){
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
  $('#p10').click(function(){  
    $('.link').removeClass('selected');
    $('#p10').addClass('selected');
    $('#youtube').html('<iframe class=link id=y10 width="420" height="315" src="//www.youtube.com/embed/ajcVPo01ozA" frameborder="0" allowfullscreen></iframe><div style="height:300px;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;"><p>Project Goal: To interface the Hubo robot with an android smartphone.<br><br>Low Level control: To control the joints, there we created a function that takes in an array that contains joint IDs and positions to set them at, and the number of steps to interpolate the movement in order to allow us to move the joints fluidly and concurrently.<br><br>High Level Control: Balance is kept through static stability, keeping the center of mass over the support polygon of the robot.  The walking algorithm was designed by carefully looking at a human\'s walking pattern and identify keyframes that can be used in a statically stable manner.  This algorithm consists of shifting weight over one foot and lifting up the other foot and extending it forward.  The foot bearing weight then bends down to put the other foot on the ground, and then the body leans forward and centers the hips to put weight back on both feet.  Then the back leg straightens while the front leg bends at the knee shifting the center of mass towards the front.  The hips then move into position over the front foot which then straightens allowing the back leg to swing forward and set back down on the ground.<br><br>Android control: The Android phone interfaces with the robot with UDP packets sent over wifi.  The packet is received selects a function to run that will move the Hubo robot.<br><br>To run project: Start up the hubo simulator:<br>$ hubo-ach sim openhubo physics<br><br>Then start the server:<br>$ ./hubo-walk<br><br>Finally, run the android app "test.apk".<br><br>One thing we would have done differently if we had more time in the integration process was was separate the UDP server from the controller into separate processes so that the server did not have to wait on the walking algorithm to complete in order to send or receive packets, which would allow the transmission of sensor data to the android in real-time.r</p></div>');   
  });
  $('#g1').click(function(){
    $('.link').removeClass('selected');
    $('#g1').addClass('selected');
    $('#youtube').html('<a href="http://taroomiya.com/games/susies-summer-home/webplayer/" target="_blank"><img src="/assets/susie.png"></a>');
  })
  $('#g2').click(function(){ 
    $('.link').removeClass('selected');
    $('#g2').addClass('selected');
    $('#youtube').html('<a href="http://christian-gibbons.github.io/digital-template/" target="_blank"><img src="/assets/dog_catcher.png"></a>');
  });
  $('#g3').click(function(){ 
    $('.link').removeClass('selected');
    $('#g3').addClass('selected');
    $('#youtube').html('<a href="http://christian-gibbons.github.io/box-o-kittens/" target="_blank"><img src="/assets/cat_lady.png" alt="click to play"></a>');
  });
  $('#g4').click(function(){ 
    $('.link').removeClass('selected');
    $('#g4').addClass('selected');
    $('#youtube').html('<a href="http://christian-gibbons.github.io/reluctant-protagonist/" target="_blank"><img src="/assets/reluctant_protagonist.png"></a>');
  });
  $('#g5').click(function(){
    $('.link').removeClass('selected');
    $('#g5').addClass('selected');
    $('#youtube').html('<a href="http://christian-gibbons.github.io/platformer-V2/" target="_blank"><img src="/assets/platformer.png"></a>');
  });
  $('#g6').click(function(){
    $('.link').removeClass('selected');
    $('#g6').addClass('selected');
    $('#youtube').html('<a href="http://christian-gibbons.github.io/crazy-cat-lady-V2/" target="_blank"><img src="/assets/cat_lady_2.png"></a>');
  });
  $('#m2').click(function(){
    $('.link').removeClass('selected');
    $('#m2').addClass('selected');
    $('#youtube').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/d83I6kwt27M" frameborder="0" allowfullscreen></iframe>');
  });
  $('#m3').click(function(){
    $('.link').removeClass('selected');
    $('#m3').addClass('selected');
    $('#youtube').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/5lXmQ04Dw4M" frameborder="0" allowfullscreen></iframe>');
  });
  $('#m4').click(function(){
    $('.link').removeClass('selected');
    $('#m4').addClass('selected');
    $('#youtube').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/gkbI7YhZw30" frameborder="0" allowfullscreen></iframe>');
  });
  $('#f1').click(function(){
    $('.link').removeClass('selected');
    $('#f1').addClass('selected');
    $('#youtube').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/89exmi1MgUg" frameborder="0" allowfullscreen></iframe><div style="height:300px;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;"><p>This is a dumbed down Pacman clone I wrote for the Xilinx Spartan-6 FPGA running on the Nexys3 board.  Programmed in VHDL.</p></div>');
  });
  $('#p1').mouseenter(function(){
    $('#p1').addClass('hover');
  });
  $('#p1').mouseout(function(){
    $('#p1').removeClass('hover');
  });
  $('#p2').mouseenter(function(){
    $('#p2').addClass('hover')
  });
  $('#p2').mouseout(function(){
    $('#p2').removeClass('hover');
  });
  $('#p3').mouseenter(function(){
    $('#p3').addClass('hover')
  });
  $('#p3').mouseout(function(){
    $('#p3').removeClass('hover');
  });
  $('#p4').mouseenter(function(){
    $('#p4').addClass('hover')
  });
  $('#p4').mouseout(function(){
    $('#p4').removeClass('hover');
  });
  $('#p5').mouseenter(function(){
    $('#p5').addClass('hover')
  });
  $('#p5').mouseout(function(){
    $('#p5').removeClass('hover');
  });
  $('#p6').mouseenter(function(){
    $('#p6').addClass('hover')
  });
  $('#p6').mouseout(function(){
    $('#p6').removeClass('hover');
  });
  $('#p7').mouseenter(function(){
    $('#p7').addClass('hover')
  });
  $('#p7').mouseout(function(){
    $('#p7').removeClass('hover');
  });
  $('#p8').mouseenter(function(){
    $('#p8').addClass('hover')
  });
  $('#p8').mouseout(function(){
    $('#p8').removeClass('hover');
  });
  $('#p9').mouseenter(function(){
    $('#p9').addClass('hover')
  });
  $('#p9').mouseout(function(){
    $('#p9').removeClass('hover');
  });
  $('#p10').mouseenter(function(){
    $('#p10').addClass('hover');
  });
  $('#p10').mouseout(function(){
    $('#p10').removeClass('hover');
  });
  $('#g1').mouseenter(function(){
    $('#g1').addClass('hover');
  });
  $('#g1').mouseout(function(){
    $('#g1').removeClass('hover');
  });
  $('#g2').mouseenter(function(){
    $('#g2').addClass('hover');
  });
  $('#g2').mouseout(function(){
    $('#g2').removeClass('hover');
  });
  $('#g3').mouseenter(function(){
    $('#g3').addClass('hover');
  });
  $('#g3').mouseout(function(){
    $('#g3').removeClass('hover');
  });
  $('#g4').mouseenter(function(){
    $('#g4').addClass('hover');
  });
  $('#g4').mouseout(function(){
    $('#g4').removeClass('hover');
  });
  $('#g5').mouseenter(function(){
    $('#g5').addClass('hover');
  });
  $('#g5').mouseout(function(){
    $('#g5').removeClass('hover');
  });
  $('#g6').mouseenter(function(){
    $('#g6').addClass('hover');
  });
  $('#g6').mouseout(function(){
    $('#g6').removeClass('hover');
  });
  $('#m2').mouseenter(function(){
    $('#m2').addClass('hover');
  });
  $('#m2').mouseout(function(){
    $('#m2').removeClass('hover');
  });
  $('#m3').mouseenter(function(){
    $('#m3').addClass('hover');
  });
  $('#m3').mouseout(function(){
    $('#m3').removeClass('hover');
  });
  $('#m4').mouseenter(function(){
    $('#m4').addClass('hover');
  });
  $('#m4').mouseout(function(){
    $('#m4').removeClass('hover')
  });
  $('#f1').mouseenter(function(){
    $('#f1').addClass('hover');
  });
  $('#f1').mouseout(function(){
    $('#f1').removeClass('hover');
  });
});