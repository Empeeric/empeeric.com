$(function () {
    $('.btn.next').on('click', function(){
        var $curr_item = $('.gallery .item.active'),
            $next_item = $curr_item.next();

        if(!$next_item.length) {
            $next_item = $('.gallery .item').first();
        }
        $curr_item.removeClass('active');
        $next_item.addClass('active');
    });
    $('.btn.prev').on('click', function(){
        var $curr_item = $('.gallery .item.active'),
            $prev_item = $curr_item.prev();

        if(!$prev_item.length) {
            $prev_item = $('.gallery .item').last();
        }
        $curr_item.removeClass('active');
        $prev_item.addClass('active');
    });

    var mouseX,
        percent = 0,
        pageWidth = $(document).width();
    $('.img-container').on('mousemove', function(e){
        var $container = $(e.target).closest('.img-container');
        mouseX = e.pageX;
        percent = e.pageX / pageWidth;

        if(percent > 0.5) {
            $container.scrollLeft($container.scrollLeft() + 50 * percent);
        } else {
            $container.scrollLeft($container.scrollLeft() - 50 * (1 - percent));
        }
    });
});