var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

div1 = $('<div></div>')

$("body").append(div1)
$(div1).hide()

div1.css({
 "background-color": "#FF6F61",
 "border-radius": "50%",
 "height": "20px",
 "width": "20px",
"position": "absolute"})



$(document).on('mousemove', function(e){
    $(div1).css('top', e.pageY - 18);
    $(div1).css('left', e.pageX -14.5);
});





$(document).on('click', function(e){
    $(div1).show();
      setTimeout(function(){ $(div1).hide(); }, 300);
    })