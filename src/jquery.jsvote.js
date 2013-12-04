;(function($){
  $.fn.extend({jsvote:function(){
    
		function gostat(vote,stat) {
			
      if(stat=="") {
				
				vote.attr("vote","");
				vote.up.removeClass('jsvote_uppressed');
				vote.down.removeClass('jsvote_downpressed');
			}else if(stat=="up"){
				
				vote.attr("vote","up");
				vote.up.addClass('jsvote_uppressed');
				vote.down.removeClass('jsvote_downpressed');
			}else	if(stat=="down"){

				vote.attr("vote","down");
				vote.up.removeClass('jsvote_uppressed');
				vote.down.addClass('jsvote_downpressed');
			}
		}
		
    function votestat(vote,stat,init) {
			
			var oldStat = vote.attr("vote");
			gostat(stat);
			if(!init) {
				var ret = vote.trigger("votechange",stat);
				if(!ret)
					gostat(oldStat);
			}
		}
		
    return this.each(function(i,v){
	
			var vote = $(this);
  		var up = $("<div class='jsvote_up'></div>");
  		var down = $("<div class='jsvote_down'></div>");
			vote.up = up;
			vote.down = down;
  		$(v).append(up);
  		$(v).append(down);
			votestat(vote,vote.attr("vote"),"init");
  	  up.mouseenter(function(){
        	$(this).addClass('jsvote_upover');
      }).
      	mouseleave(function(){
        	$(this).removeClass('jsvote_upover');
      }).
	  	click(function(){
			
			if(vote.attr("vote")=="up"){
				
				votestat(vote,"");
			}else {
				
				votestat(vote,"up");
			}
	  });

      down.mouseenter(function(){
        $(this).addClass('jsvote_downover');
      }).
      mouseleave(function(){
        $(this).removeClass('jsvote_downover');
      }).
	  	click(function(){
				if(vote.attr("vote")=="down"){
					
					votestat(vote,"");
				}else {
					
					votestat(vote,"down");
				}
	  	});
  	});
  }});
})(jQuery);
