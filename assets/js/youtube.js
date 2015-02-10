/*OWN CODE*/
$(function () {
    var options = {
        videoId: '8kX5_69sO8Q'
    };
    var mq = window.matchMedia( "(min-width: 568px)" );
    //Only use video background when in Tablet or PC
    if (mq.matches) {
	   $('#youtube').tubular(options);
    }  
    
    
});
/*OWN CODE*/