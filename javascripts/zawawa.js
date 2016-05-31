$(document).ready(function(){
  setInterval(function() {
      setTimeout(function() {
        var zawa_text = "ざわ...";
        if(0.7 < Math.random()) zawa_text = "お"+ zawa_text;
        var zawa = $("<zawa>").text(zawa_text);
        $(zawa).css({
          top: $(window).innerHeight() * Math.random(),
          left: $(window).innerWidth() * Math.random(),
          fontSize: 32 * Math.random() +"pt"
        });
        $("body").append(zawa);
        $(zawa).fadeIn().delay(1000).fadeOut(300, function() {
            $(zawa).remove();
        });
    }, Math.random() * 1000);
  }, 1000);
});
