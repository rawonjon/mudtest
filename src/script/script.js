/* ---------------------------------------------------------------------- READY --- */
$(document).on('ready', init);

/* ----------------------------------------------------------------------- INIT --- */
function init() {
    deck_setup();
    deck_panel_control()

}

/* ----------------------------------------------------------- DECK --- */

function deck_setup() {
    var $cards;
    var total;
    var offset;
    console.log('running');
    $('.deck').each(function(i) {
        $cards = $(this).find('.card');
        width = $cards.outerWidth();
        totalwidth = $(window).width();
        $track = $(this).find('.track');
        offset = (totalwidth - width) / 2;
        $track.css("left", offset + "px");
    });
    deck_timer();
}


function deck_timer() {;
    index = 1;
    setInterval(function() {
        $deck = $('.deck')
        $track = $deck.find('.track');
        $cards = $track.find('.card');
        $indicators = $('.indicators');
        $dots = $indicators.find('.dot');
        total = $cards.length;
        
        if (index >= total) {
            index = 0;
        } 
        console.log(index);
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
        $cards.removeClass('active');
        $cards.eq(index).addClass('active');
        
        offset = $('.card.active').position().left;

        $track.css("transform", "translateX(-" + offset + "px");
        index++;
    }, 5000);
    
    
}



function deck_panel_control() {
    var $track;
    var $deck;
    var $cards;
    var offset;
    var current = 0;
    var $indicators = $('.indicators');
    var $dots = $indicators.find('.dot');
    $dots.on("click", function() {
        $deck = $(this).closest('.deck')
        $track = $deck.find('.track');
        $cards = $track.find('.card');
        
    
        index = $(this).index();
        // indexCard = {current: $(".card.active").index()};

        
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
        $cards.removeClass('active');
        $cards.eq(index).addClass('active');
        
        offset = $('.card.active').position().left;

        $track.css("transform", "translateX(-" + offset + "px");
      
        
    })
}










