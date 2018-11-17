$("#cp").mouseenter(function(){
  $("#animate1").slideDown(100);});
   
$(".mouseleave").mouseleave(function(){
  $("#animate1").slideUp(100);});

$("#dvc").mouseenter(function(){
  $("#animate2").slideDown(100);});

$(".mouseleave2").mouseleave(function(){
  $("#animate2").slideUp(100);});

$("#animate3").mouseenter(function(){
  $(this).animate({
    fontSize: '30px' }, 100);
});
$("#animate3").mouseleave(function(){
  $(this).animate({
    fontSize: '25px' }, 100); 
});
$("#cp").mouseenter(function(){
  $(this).animate({
    fontSize: '30px' }, 100); });
$(".mouseleave").mouseleave(function(){
  $("#cp").animate({
    fontSize: '25px' }, 100); });
$("#dvc").mouseenter(function(){
  $(this).animate({
    fontSize: '30px' }, 100);});
$(".mouseleave2").mouseleave(function(){
  $("#dvc").animate({
    fontSize: '25px' }, 100);});
