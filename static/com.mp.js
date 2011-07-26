
/* ---------------------------------- */

/* Globals */

(function ($) {

    $.Globals = {

        NavWidth : '',
        NavPos : ''
    }
})(jQuery);



function BrowserCheck() {
    if ($.browser.msie) {

        if ($.browser.version <= 8) {
            window.location.href = "BrowserSupport.html";
        }
    }
}
BrowserCheck();




//Click the first menu item for scrolling effect
$(document).ready(function () {
    $("#mn_story-video").click();
});

/* ---------------------------------- */
/* FreeNav */
(function ($) {
    $.fn.FreeNav = function () {
        return this;
        var $self = $(this);
        $up = $self.find("#FNUP");
        $down = $self.find("#FNDOWN");

        $up.bind('mousedown',
            function (e) {
                $.Body.triggerHandler($.Events.TOGGLE_UP);
            });

        $down.bind('mousedown',
            function (e) {
                $.Body.triggerHandler($.Events.TOGGLE_DOWN);
            });
    }
})(jQuery);


/* ---------------------------------- */
/* Social Posts */
(function ($){
    $.fn.SocialPosts = function()
    {
        var $self = $(this);
        $self.find('[data-share]').BindSocialPostBehaviour();
        return this;
    }

    $.fn.BindSocialPostBehaviour = function(settings)
    {
        this.each(function()
        {
            var $self = $(this),
            $headline = $self.attr('social-share-title');
            $summary = $self.attr('social-share-summary');

            $a_fb = $('<a/>').html('Facebook').attr({ href: '#/fb', 'title': 'Facebook' }).addClass('icon-fb-sml').appendTo($self);
            $a_twitter = $('<a/>').html('Twitter').attr({ href: '#/twitter', 'title': 'Twitter' }).addClass('icon-twitter-sml').appendTo($self);

              $a_fb
          .bind('click',
            function (e) {

                var _fb = window.open('http://www.facebook.com/sharer.php?s=100&p[url]=http://moshe-peretz.com&p[title]=' + $headline + '&p[summary]=' + (($summary) + ' Moshe Peretz .') + '&p[images][0]=http://moshe-peretz.com/Images/MosheFBImage.jpg', '_fb', 'width=550,height=450')

                _centerPopup(_fb)
                //Harel
                $.Body.triggerHandler($.Events.GA_TRACK, 'facebook_' + escape($headline))
                e.preventDefault();

            })

            $a_twitter
          .bind('click',
            function (e) {

                var _tweet = window.open('http://twitter.com/home?status=' + $headline + ' #Moshe Peretz' + ' http://Moshe-Peretz.com', '_tweet', 'width=1024,height=600,scrollbars=yes')

                _centerPopup(_tweet)
                //Harel
                $.Body.triggerHandler($.Events.GA_TRACK, 'twitter_' + escape($headline))

                e.preventDefault();

            })

            function _centerPopup(_win) {

                _win.focus();

                _win.moveTo($(window).width() / 2 - 275, $(window).height() / 2 - 225)

            }

            function _show(dir) {

                $self.stop().animate({ opacity: 1 }, 800, 'easeOutExpo')

                $.Body.triggerHandler($.Events.GA_TRACK, 'proofpoint_' + escape($headline))


            }

            function _hide(dir) {

                $self.stop().animate({ opacity: 0 }, 800, 'easeOutExpo')

            }

            return this;
        })
    }
})(jQuery);

/* ---------------------------------- */


/* Ajax Render Action (MVC) */
(function ($) {
    $.fn.MPBase = function () {
            $.Body.bind($.Events.MENU_RENDER_COMPLETE,
                function (e, mainNavProperties) {
                    $.Globals.NavWidth = mainNavProperties.width;
                    $.Globals.NavPos = mainNavProperties.left;

            });
        return this;
    }
})(jQuery);


(function( $ ){

  $.fn.RenderViewController = function() {

    var $self = $(this),
    $contentAction = $self.attr('content-action'),
    $contentPlaceholder = $self.find('.placeholder'),
    $contentPosition = $self.attr('content-position');
    $.Globals.NavWidth = 800;

    //Second Time: no need to animate the panel again


    if($contentPosition==undefined){
        $contentPosition = $.Globals.NavWidth = 800;
    }
    $eventName = "section_" + $contentAction;



    var embedCode = "<object width=\"110\" height=\"110\"><param name=\"movie\" value=\"/media/loader.swf\">"+
                    "</param><param name=\"allowFullScreen\" value=\"true\"></param>"+
                    " <param name=\"wmode\" value=\"transparent\"> "+
                    "<param name=\"allowscriptaccess\" value=\"always\"></param>" +
                    "<embed src=\"/media/loader.swf\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"110\" height=\"110\"  wmode=\"transparent\" ></embed></object>";

    $contentPlaceholder.html(embedCode);


    $.ajax({
        url: '/Sections/' + $self.attr('content-action'),
        success: function(result)
        {

            $self.attr('content-action-state','true');
            $viewController = 'fn' + $self.attr('view-controller');
            $viewContent = $self.attr('view-controller');
            $id = $self.attr('id');

            $contentPlaceholder.html(result); // Insert result into place holder
            $contentPlaceholder.css({ opacity: 1 , width: $contentPosition + 'px' });

            //$('#mn_'+$id).css("color","red");

            if($viewContent==undefined){
                return;
            }

            //Execute View Controller
            try {
                eval('$("#' + $viewContent + '").' + $viewController + '();');
                $('#' + $viewContent).AdditionalBarActions();

            } catch (e) {

            }
        }
    });
  };
})( jQuery );

/* ---------------------------------- */
/* Gallery Ajax Call */
(function($) {
    $.fn.fnGalleryController = function (){
        var $self = $(this),
        $lightboxInit = false;
        $self.ready(function(){

            //Full Caption Sliding (Hidden to Visible)
            $('[lightboxContainer]').hover(function () {
                $(".cover", this).stop().animate({ top: '120px' }, { queue: false, duration: 160 });
            }, function () {
                $(".cover", this).stop().animate({ top: '150px' }, { queue: false, duration: 160 });
            });


            $('[gallery-category]').GalleryCategory({lightBoxInit : false});
        });


            $.Body.bind($.Events.GALLERY_ITEMS_READY,
                function (e) {
                    $('#galleyboom a').lightBox();
                });
    }

    $.fn.GalleryCategory = function (settings){

      this.each(function ()
      {
        var $self = $(this),
            $category = $self.attr('gallery-category'),
            $responsePlaceHolder = $('#' + $self.attr('gallery-response-placeHolder'));


            $self.mousedown(
                function (e)
                {
                     $.ajax({
                        url: '/Sections/GalleryItems?category=' + encodeURIComponent($category),
                        success: function(result)
                        {
                            $responsePlaceHolder.css({opacity : '0', marginRight : '300px' , display : 'block'}).stop().animate({ opacity: '0.8' , marginRight : '0px'}, 1500, 'easeOutQuart');
                            $responsePlaceHolder.find('#album-data-panel').html($category);
                            $responsePlaceHolder.find('#album-thumbs-panel').html(result);
                            $responsePlaceHolder.ready(function(){
                                $.Body.triggerHandler($.Events.GALLERY_ITEMS_READY);
                            });
                        }
                    });
                });
        })
        return this;
    }


    $.fn.GalleryItems = function(settings)
    {
            this.each(function () {
                var $self = $(this),
                $category = $self.attr('gallery-category');

            });
        return this;
    }
})(jQuery);



/* ---------------------------------- */
/* Gallery Ajax Call */
(function ($) {

    $.fn.myPlugin = function () {
        // there's no need to do $(this) because
        // "this" is already a jquery object

        // $(this) would be the same as $($('#element'));

        this.fadeIn('normal', function () {

            // the this keyword is a DOM element

        });

    };
})(jQuery);

/* ---------------------------------- */
/* footer */
(function( $ ){
$.fn.Footer = function () {

        this.each(function () {


        });

        return this;

    } //Footer

})(jQuery);


/* ---------------------------------- */
/* Flash MP3 PLAYER */

$(document).ready(function () {
    var autoPlay = "true";
    var mp3player = $("#mp3player");
    var embedCode = "<object height=\"90\" width=\"150\"> <param name=\"scale\" value=\"showall\" name=\"movie\" value=\"http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F15709421&amp;show_comments=true&amp;auto_play=" + autoPlay + "&amp;color=5db4df\"></param> <param name=\"allowscriptaccess\" value=\"always\"></param>  <param name=\"scale\" value=\"showall\"></param> <embed allowscriptaccess=\"always\" height=\"80\" src=\"http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F15709421&amp;show_comments=true&amp;auto_play=" + autoPlay + "&amp;color=5db4df\" type=\"application/x-shockwave-flash\" width=\"350\"></embed> </object>";

    mp3player.html(embedCode);

});
/* ---------------------------------- */


/* ---------------------------------- */
/* Embed youtube Video */
(function ($)
    {
        $.fn.fnVideosController = function ()
        {


            var $self = $(this);
            var $videoPlayer = $("#" + $self.attr("video-player-target"));
            var $darkslide = $("#" + $self.attr("darkslide"));
            var $videoPlayerContainer = $("#" + $self.attr("video-player-panel-container"));
            var $videoPlayerDataPanel = $("#" + $self.attr("video-player-data"));

           // $("#VideosController img[title]").tooltip();

            $darkslide.mousedown(
                function (e)
                {
                    _close_video({videoPlayer : $videoPlayer , darkslide : $darkslide, videoPlayerContainer : $videoPlayerContainer});
                });

            $self.find('.videoclip-container').BindVideoEvents({videoPlayer : $videoPlayer , darkslide : $darkslide, videoPlayerContainer : $videoPlayerContainer, videoPlayerDataPanel : $videoPlayerDataPanel});
            return this;

        }

        $.fn.BindVideoEvents = function(settings)
        {

            _popup = ($.Unsupported || $.Body.hasClass('browser-ie7'));
            this.each(function()
            {
                var $self = $(this);
                var $videoTitle = $self.attr("title");

                $self.mousedown(
                function (e)
                {
                    $.Body.triggerHandler($.Events.GA_TRACK_ACTION, {category : 'Video Clips' ,  action : 'View', label : $videoTitle});
                    if (!_popup){
                            PlayVideo($self,settings);
                            settings.videoPlayerDataPanel.html($videoTitle + "<br><iframe src=\"http://www.facebook.com/plugins/like.php?href=httotototo&amp;layout=standard&amp;show_faces=true&amp;width=450&amp;action=like&amp;font&amp;colorscheme=dark&amp;height=80\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:50px; height:20px;\" allowTransparency=\"true\"></iframe>");

                        }
                    else{
                        PopVideo();
                        }
                });

            });
            return this;
        }

        function PopVideo(){

        }

        function PlayVideo(source,settings)
        {

            settings.darkslide.css({ height: '100%' }).animate({ opacity: .9 }, 800, 'easeInOutExpo');

            var ec = source.attr("youtube-embed-code");

            var embedCode = "<object width=\"768\" height=\"462\"><param name=\"movie\" value=\"http://www.youtube.com/v/"+ec+"&ap=%2526fmt%3D2&autoplay=1&disablekb=1&hd=1&showinfo=0&showsearch=0&rel=0&enablejsapi=1&playerapiid=myytplayer\">"+
                        "</param><param name=\"allowFullScreen\" value=\"true\"></param>"+
                        "<param name=\"allowscriptaccess\" value=\"always\"></param>" +
                        "<embed src=\"http://www.youtube.com/v/"+ec+"&ap=%2526fmt%3D2&autoplay=1&disablekb=1&hd=1&showinfo=0&showsearch=0&rel=0&enablejsapi=1&playerapiid=myytplayer\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"768\" height=\"462\"></embed></object>";

            settings.videoPlayerContainer.css("display", "block");
            settings.videoPlayer.html(embedCode);

        }

        function _close_video(settings) {

            settings.videoPlayer.html('');
            settings.videoPlayerContainer.css("display", "none");


            settings.darkslide.css({ height: '100%' }).animate({ opacity: 0 }, 1200, 'easeInOutQuart', function () {
                settings.darkslide.css({ height: '0' })
            })

        }

})(jQuery);

//Publications
(function ($) {
    $.fn.fnPublicationsController = function () {
    //alert(2);
   // $(window).load(function () {
      //  alert(1);
        $('#slider').nivoSlider(
            {
        effect:'random', // Specify sets like: 'fold,fade,sliceDown'
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:500, // Slide transition speed
        pauseTime:3000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        directionNav:true, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:false, // 1,2,3... navigation
        controlNavThumbs:false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav:true, // Use left & right arrows
        pauseOnHover:true, // Stop animation while hovering
        manualAdvance:false, // Force manual transitions
        captionOpacity:0.8, // Universal caption opacity
        prevText: '', // Prev directionNav text
        nextText: '', // Next directionNav text
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    }
        );
    //});
    return this;
}
})(jQuery);

//Biography
    (function ($) {
        $.fn.fnBiographyController = function () {
            var $self = $(this);
            var $selectedSection;
            var $toc = $self.find('#toc');
            var settings = {toc : $toc, cdefault :0 , selectedSection : $selectedSection};

            $self.find('[section]').BindBiographyBehaviour(settings);

            $.Body
            .bind($.Events.BIOGRAPHY_ITEM_CLICKED,
                function (e, sender) {

                    if(settings.selectedSection != undefined){
                        settings.selectedSection.css("display" ,"none");
                        settings.selectedSection.css("opacity" , "0.1");
                    };

                    settings.selectedSection = sender.sender;
                    settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                    $("#mcs_bio_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");
                });
            $("#mcs_bio_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");
            return this;
        }

        $.fn.BindBiographyBehaviour = function (settings) {

            this.each(function () {

                var $self = $(this);
                $title = $self.find('.header');
                $content = $self.find('.content');
                var $tocItem = $('<div class="toc-item">' +  $title.html() + '</div>');


                var single_settings =
                {
                    title : $title,
                    content : $content,
                    sender : $self
                };


                settings.toc.append($tocItem);

                $tocItem
                .bind('mousedown',
                    function (e) {
                        settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                        $.Body.triggerHandler($.Events.BIOGRAPHY_ITEM_CLICKED,single_settings);
                });

                if(settings.cdefault<=0){
                    settings.selectedSection = $self;
                    settings.cdefault++;
                    $tocItem.trigger('mousedown');

                };
                return this;
            });
            return this;
        }
    })(jQuery);


    //Downloads
    (function ($) {
        $.fn.fnDownloadsController = function () {
            var $self = $(this);
            var $selectedSection;
            var $toc = $self.find('#toc');
            var settings = {toc : $toc, cdefault :0 , selectedSection : $selectedSection};

            $self.find('[section]').BindDownloadBehaviour(settings);

            $.Body
            .bind($.Events.DOWNLOADS_ITEM_CLICKED,
                function (e, sender) {

                    if(settings.selectedSection != undefined){
                        settings.selectedSection.css("display" ,"none");
                        settings.selectedSection.css("opacity" , "0.1");
                    };

                    settings.selectedSection = sender.sender;
                    settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                    $("#mcs_downloads_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");


                });
            return this;
        }

        $.fn.BindDownloadBehaviour = function (settings) {

            this.each(function () {

                var $self = $(this);
                $title = $self.find('.header');
                $content = $self.find('.content');
                var $tocItem = $('<div class="toc-item">' +  $title.html() + '</div>');


                var single_settings =
                {
                    title : $title,
                    content : $content,
                    sender : $self
                };


                settings.toc.append($tocItem);

                $tocItem
                .bind('mousedown',
                    function (e) {
                        settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                        $.Body.triggerHandler($.Events.DOWNLOADS_ITEM_CLICKED,single_settings);
                });

                if(settings.cdefault<=0){
                    settings.selectedSection = $self;
                    settings.cdefault++;
                    $tocItem.trigger('mousedown');

                };
                return this;
            });
            return this;
        }
    })(jQuery);

//Events
    (function ($) {
        $.fn.fnEventsController = function () {
            var $self = $(this);
            $("#" + $self.attr("id") + " .outlink").BindAnalyticsOuterLinks({ category: "Events" });
            return this;
        }
    })(jQuery);


    //Shows
    (function ($) {
        $.fn.fnShowsController = function () {
            var $self = $(this);
            $self.SocialPosts();
            $("#mcs_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");
            return this;
        }
    })(jQuery);


    //News / Main
    (function ($) {
        $.fn.fnNewsController = function () {
            var $self = $(this);
            var $selectedSection;
            var $toc = $self.find('#toc');
            var settings = {toc : $toc, cdefault :0 , selectedSection : $selectedSection};

            $self.find('[section]').BindDownloadBehaviour(settings);

            $.Body
            .bind($.Events.DOWNLOADS_ITEM_CLICKED,
                function (e, sender) {

                    if(settings.selectedSection != undefined){
                        settings.selectedSection.css("display" ,"none");
                        settings.selectedSection.css("opacity" , "0.1");
                    };

                    settings.selectedSection = sender.sender;
                    settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                    $("#mcs_news_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");


                });
            return this;
        }

        $.fn.BindDownloadBehaviour = function (settings) {

            this.each(function () {

                var $self = $(this);
                $title = $self.find('.header');
                $content = $self.find('.content');
                var $tocItem = $('<div class="toc-item">' +  $title.html() + '</div>');


                var single_settings =
                {
                    title : $title,
                    content : $content,
                    sender : $self
                };


                settings.toc.append($tocItem);

                $tocItem
                .bind('mousedown',
                    function (e) {
                        settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                        $.Body.triggerHandler($.Events.DOWNLOADS_ITEM_CLICKED,single_settings);
                });

                if(settings.cdefault<=0){
                    settings.selectedSection = $self;
                    settings.cdefault++;
                    $tocItem.trigger('mousedown');

                };
                return this;
            });
            return this;
        }
    })(jQuery);


    //Social
    (function ($) {
        $.fn.fnSocialController = function () {
            var $self = $(this);
            var $selectedSection;
            var $toc = $self.find('#toc');
            var settings = { toc: $toc, cdefault: 0, selectedSection: $selectedSection };

            $self.find('[section]').BindSocialBehaviour(settings);

            $.Body
            .bind($.Events.SOCIAL_CLICKED,
                function (e, sender) {

                    if (settings.selectedSection != undefined) {
                        settings.selectedSection.css("display", "none");
                        settings.selectedSection.css("opacity", "0.1");
                    };

                    settings.selectedSection = sender.sender;
                    settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                    $("#mcs_social_container").mCustomScrollbar("vertical", 150, "easeOutCirc", 1.05, "fixed", "yes", "no");


                });
            return this;
        }

        $.fn.BindSocialBehaviour = function (settings) {

            this.each(function () {

                var $self = $(this);
                $title = $self.find('.header');
                $content = $self.find('.content');
                var $tocItem = $('<div class="toc-item">' + $title.html() + '</div>');


                var single_settings =
                {
                    title: $title,
                    content: $content,
                    sender: $self
                };


                settings.toc.append($tocItem);

                $tocItem
                .bind('mousedown',
                    function (e) {
                        settings.selectedSection.css('display', 'block').stop().animate({ opacity: '1' }, 1500, 'easeOutQuart', function () { });
                        $.Body.triggerHandler($.Events.SOCIAL_CLICKED, single_settings);
                    });

                if (settings.cdefault <= 0) {
                    settings.selectedSection = $self;
                    settings.cdefault++;
                    $tocItem.trigger('mousedown');

                };
                return this;
            });
            return this;
        }
    })(jQuery);


    //Music
    (function ($) {
        $.fn.fnMusicController = function () {

            var $self = $(this);
            var $selectedAlbum;
            var cdefault = 0;
            $("#mcs_music_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");
            var settings = {albumDataDisplayPanel : $self.attr('album-data-panel'), cdefault : 0, selectedAlbum : $selectedAlbum};

            $self.find('[section]').BindAlbumBehaviour(settings),
            $.Body
            .bind($.Events.ALBUM_CLICKED,
                function (e, sender) {
                    if(settings.selectedAlbum != undefined && settings.selectedAlbum != sender.target){
                        settings.selectedAlbum.css('display','none');
                    }
                    settings.selectedAlbum = sender.target;

                });
            return this;
        }

        $.fn.BindAlbumBehaviour = function (settings) {
            this.each(function () {


                var $self = $(this);
                var $albumDataContainer = $('#' + $self.attr('target-id'));


                $self
                .bind('mousedown',
                function (e) {

                    $albumDataContainer.css('opacity',0);
                    $albumDataContainer.html($albumDataContainer.html())
                    $albumDataContainer.css('display','block').stop().animate({ opacity: 1}, 500, 'easeOutQuart', function () {} );
                    $.Body.triggerHandler($.Events.ALBUM_CLICKED,{ sender : [$self], target : $albumDataContainer});
                    $("#mcs_music_container").mCustomScrollbar("vertical",150,"easeOutCirc",1.05,"fixed","yes","no");
                });

                if(settings.cdefault==0){
                    $self.trigger('mousedown');
                    settings.selectedAlbum = $albumDataContainer;
                    settings.cdefault++;
                }
                return this;
            });
            return this;
        }
    })(jQuery);


//Events
    (function ($) {
        $.fn.fnEventsController = function () {
            var $self = $(this);
            $("#" + $self.attr("id") + " .outlink").BindAnalyticsOuterLinks({ category: "Events" })
            return this;
        }
    })(jQuery);


    /* Additional Bar Actions Us */
    (function ($) {
        $.fn.AdditionalBarActions = function () {
            var $self = $(this);
            $actionsBar = $self.find('.actionsBar');
            $customPost = $self.find('[custom-post]');


            $SocialBarContents = eval($actionsBar.attr('actionsBarContents'));

            var customPost = jQuery.parseJSON($customPost.text());
            var title = customPost.title;
            var description = customPost.description;
            var imageUrl = customPost.image;
            var link = customPost.link;
            for (i = 0; i < $SocialBarContents.length; i++) {
                var action = $SocialBarContents[i];
                //'facebook','twitter','youtube','download','mobile'
                if (action == 'twitter') {
                    $a_twitter = $('<a/>').html('twitter').attr({ href: '#/twitter', 'title': 'עדכונים בטוויטר', dataShare: 'true' }).addClass('icon-twitter').appendTo($actionsBar);
                    $a_twitter
                  .bind('click',
                    function (e) {
                        var _tweet = window.open('http://twitter.com/home?status=' + escape(title) + ' #Moshe Peretz' + ' http://Moshe-Peretz.com', '_tweet', 'width=1024,height=600,scrollbars=yes')
                        _centerPopup(_tweet)
                        $.Body.triggerHandler($.Events.GA_TRACK, 'twitter_' + escape(title))
                        e.preventDefault();

                    })
                }
                if (action == 'youtube') {
                    $('<a/>').html('youtube').attr({ href: 'http://youtube.com/mosheperezofficial', 'title': 'קליפים', target: '_blank' }).addClass('icon-ut').appendTo($actionsBar);
                }
                if (action == 'facebook') {
                    $a_fb = $('<a/>').html('facebook').attr({ href: '#/fb', 'title': 'פייסבוק', dataShare: 'true' }).addClass('icon-fb').appendTo($actionsBar);
                    $a_fb
                  .bind('click',
                    function (e) {
                        var _fb = window.open('http://www.facebook.com/sharer.php?s=100&p[url]=http://moshe-peretz.com&p[title]=' + title + '&p[summary]=' + ((description) + ' -  משה פרץ .') + '&p[images][0]=http://moshe-peretz.com/Images/MosheFBImage.jpg', '_fb', 'width=550,height=450')
                        _centerPopup(_fb)
                        $.Body.triggerHandler($.Events.GA_TRACK, 'facebook_' + escape(title))
                        e.preventDefault();

                    })
                }

                if (action == 'mobile') {
                    $('<a/>').html('האפליקצייה לנייד').attr({ href: 'http://itunes.apple.com/app/id430191598?mt=8', 'title': 'האפליקצייה לנייד' }).addClass('icon-mobile').appendTo($actionsBar);
                }


                if (action == 'iapp') {
                    $('<a/>').html('האפליקצייה לנייד').attr({ href: 'http://itunes.apple.com/app/id430191598?mt=8', 'title': 'האפליקצייה לנייד' }).addClass('icon-iapp').appendTo($actionsBar);
                }


                if (action == 'download') {
                    $('<a/>').html('הורדות').attr({ href: '#/PrivateEvents', 'title': 'הורדות' }).addClass('icon-dl').appendTo($actionsBar);

                }

                if (action == 'contact') {
                    $a_contact = $('<a/>').html('צור קשר').attr({ href: 'javascript:return false;', 'title': 'צור קשר' }).addClass('icon-contact').appendTo($actionsBar);
                    $a_contact.BubbleInfo('contact-pop');
                }

                if (action == 'rss') {
                    $a_rss = $('<a/>').html('RSS').attr({ href: ('http://Moshe-Peretz.com' + $actionsBar.attr('actionsBarRssURL')), 'title': 'RSS', target: '_blank' }).addClass('icon-rss').appendTo($actionsBar);

                }

                if (action == 'sc') {
                    $('<a/>').html('sound-cloud').attr({ href: 'http://soundcloud.com/mosheperetz', 'title': 'sound-cloud', target: '_blank' }).addClass('icon-sc').appendTo($actionsBar);
                }
            }


            function _centerPopup(_win) {

                _win.focus();

                _win.moveTo($(window).width() / 2 - 275, $(window).height() / 2 - 225)

            }
        }
    })(jQuery);



(function ($) {
    $.fn.BubbleInfo = function (popUpId) {
            var $self = $(this);
            var distance = 10;
            var time = 250;
            var hideDelay = 500;

            var hideDelayTimer = null;
            var marginsTop = 25;
            var beingShown = false;
            var shown = false;
            var trigger = $(this);
            var triggerPosition = trigger.offset();
            var info = $('#' + popUpId).css('opacity', 0);

            $([trigger.get(0), info.get(0)]).mouseover(function () {
                if (hideDelayTimer) clearTimeout(hideDelayTimer);
                if (beingShown || shown) {
                    // don't trigger the animation again
                    return;
                } else {
                    // reset position of info box
                    beingShown = true;
                    info.css({
                        top: triggerPosition.top-(info.height())-marginsTop,
                        left: triggerPosition.left - (info.width()/2),
                        display: 'block'
                    }).animate({
                        top: '-=' + distance + 'px',
                        opacity: 1
                    }, time, 'swing', function () {
                        beingShown = false;
                        shown = true;
                    });
                }

                return false;
            }).mouseout(function () {
                if (hideDelayTimer) clearTimeout(hideDelayTimer);
                hideDelayTimer = setTimeout(function () {
                    hideDelayTimer = null;
                    info.animate({
                        top: '-=' + distance + 'px',
                        opacity: 0
                    }, time, 'swing', function () {
                        shown = false;
                        info.css('display', 'none');
                    });

                }, hideDelay);

                return false;
            });
         return this;
    }
})(jQuery);