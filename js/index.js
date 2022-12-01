$(function(){
  $('#console-box').append('<br/>console is ready...');
  
  $('button').click(function(){
    $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
; 
  });
  
});
