

jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (x, t, b, c, d) { return jQuery.easing[jQuery.easing.def](x, t, b, c, d); }, easeInQuad: function (x, t, b, c, d) { return c * (t /= d) * t + b; }, easeOutQuad: function (x, t, b, c, d) { return -c * (t /= d) * (t - 2) + b; }, easeInOutQuad: function (x, t, b, c, d) { if ((t /= d / 2) < 1) { return c / 2 * t * t + b; } return -c / 2 * ((--t) * (t - 2) - 1) + b; }, easeInCubic: function (x, t, b, c, d) { return c * (t /= d) * t * t + b; }, easeOutCubic: function (x, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; }, easeInOutCubic: function (x, t, b, c, d) { if ((t /= d / 2) < 1) { return c / 2 * t * t * t + b; } return c / 2 * ((t -= 2) * t * t + 2) + b; }, easeInQuart: function (x, t, b, c, d) { return c * (t /= d) * t * t * t + b; }, easeOutQuart: function (x, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b; }, easeInOutQuart: function (x, t, b, c, d) { if ((t /= d / 2) < 1) { return c / 2 * t * t * t * t + b; } return -c / 2 * ((t -= 2) * t * t * t - 2) + b; }, easeInQuint: function (x, t, b, c, d) { return c * (t /= d) * t * t * t * t + b; }, easeOutQuint: function (x, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b; }, easeInOutQuint: function (x, t, b, c, d) { if ((t /= d / 2) < 1) { return c / 2 * t * t * t * t * t + b; } return c / 2 * ((t -= 2) * t * t * t * t + 2) + b; }, easeInSine: function (x, t, b, c, d) { return -c * Math.cos(t / d * (Math.PI / 2)) + c + b; }, easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t / d * (Math.PI / 2)) + b; }, easeInOutSine: function (x, t, b, c, d) { return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b; }, easeInExpo: function (x, t, b, c, d) { return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b; }, easeOutExpo: function (x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b; }, easeInOutExpo: function (x, t, b, c, d) { if (t == 0) { return b; } if (t == d) { return b + c; } if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; } return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b; }, easeInCirc: function (x, t, b, c, d) { return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b; }, easeOutCirc: function (x, t, b, c, d) { return c * Math.sqrt(1 - (t = t / d - 1) * t) + b; }, easeInOutCirc: function (x, t, b, c, d) { if ((t /= d / 2) < 1) { return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b; } return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b; }, easeInElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) { return b; } if ((t /= d) == 1) { return b + c; } if (!p) { p = d * 0.3; } if (a < Math.abs(c)) { a = c; var s = p / 4; } else { var s = p / (2 * Math.PI) * Math.asin(c / a); } return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b; }, easeOutElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) { return b; } if ((t /= d) == 1) { return b + c; } if (!p) { p = d * 0.3; } if (a < Math.abs(c)) { a = c; var s = p / 4; } else { var s = p / (2 * Math.PI) * Math.asin(c / a); } return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b; }, easeInOutElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) { return b; } if ((t /= d / 2) == 2) { return b + c; } if (!p) { p = d * (0.3 * 1.5); } if (a < Math.abs(c)) { a = c; var s = p / 4; } else { var s = p / (2 * Math.PI) * Math.asin(c / a); } if (t < 1) { return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b; } return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b; }, easeInBack: function (x, t, b, c, d, s) { if (s == undefined) { s = 1.70158; } return c * (t /= d) * t * ((s + 1) * t - s) + b; }, easeOutBack: function (x, t, b, c, d, s) { if (s == undefined) { s = 1.70158; } return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b; }, easeInOutBack: function (x, t, b, c, d, s) { if (s == undefined) { s = 1.70158; } if ((t /= d / 2) < 1) { return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b; } return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b; }, easeInBounce: function (x, t, b, c, d) { return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b; }, easeOutBounce: function (x, t, b, c, d) { if ((t /= d) < (1 / 2.75)) { return c * (7.5625 * t * t) + b; } else { if (t < (2 / 2.75)) { return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b; } else { if (t < (2.5 / 2.75)) { return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b; } else { return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b; } } } }, easeInOutBounce: function (x, t, b, c, d) { if (t < d / 2) { return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b; } return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b; } });

(function (A) { A.fn.wheel = function (D) { return this[D ? "bind" : "trigger"]("wheel", D) }; A.event.special.wheel = { setup: function () { A.event.add(this, C, B, {}) }, teardown: function () { A.event.remove(this, C, B) } }; var C = !A.browser.mozilla ? "mousewheel" : "DOMMouseScroll" + (A.browser.version < "1.9" ? " mousemove" : ""); function B(D) { switch (D.type) { case "mousemove": return A.extend(D.data, { clientX: D.clientX, clientY: D.clientY, pageX: D.pageX, pageY: D.pageY }); case "DOMMouseScroll": A.extend(D, D.data); D.delta = -D.detail / 3; break; case "mousewheel": D.delta = D.wheelDelta / 120; if (A.browser.opera) { D.delta *= -1 } break } D.type = "wheel"; return A.event.handle.call(this, D, D.delta) } })(jQuery);
/* ---------------------------------- */

/*
*  TABLE OF CONTENTS
*  
*  @Initialize
*  @Events
*  @AutoInstantiate
*  @Omniture
*  @Music
*  @SocialActions
*  @Line
*  @Scrollable
*  @Stories
*  @MainNavf
*  @SiteScroll
*  @TargetBlank
*  @Keyboard
*  @Worker Methods
*
*/

/* ---------------------------------- */

/* Initialize */

jQuery(
  function ($) {
      $.Body = $('body');
      $.Window = $(window);
      $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
      $.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))),
      $.Unsupported = $.Body.hasClass('unsupported-browser');

      $.Body
        .Keyboard()
        .MPBase()
        .Analytics()

      $('[data-controller]').Instantiate();

      // Draw Lines
      // Bug with IE canvas implementation requires onload
      if ($.browser.msie)
          $(window).bind('load', function () { $('[data-canvasline]').Line(); })
      else
          $('[data-canvasline]').Line();

      $('[data-target=_blank]').TargetBlank();

 

  }

);

/* ---------------------------------- */

/* Events */

(function ($) {

    $.Events = {


        GA_TRACK : 'googleAnalyticsTrack',
        GA_TRACK_LINK : 'googleAnalyticsTrackLink',
        GA_TRACK_ACTION : 'googleAnalyticsTrackAction',
        SECTION_ENTER: 'sectionEnter',

        SCROLL_TO: 'scrollTo',

        SCROLL: 'windowScroll',
        SCROLL_ENTER: 'windowScrollEnter',
        SCROLL_LEAVE: 'windwScrollLeave',

        KEY_UP: 'keyUp',
        KEY_DOWN: 'keyDown',
        KEY_LEFT: 'keyLeft',
        KEY_RIGHT: 'keyRight',
        KEY_ESC: 'keyEsc',
        KEY_SPACE: 'keySpace',
        TOGGLE_DOWN:'toggleDown',
        TOGGLE_UP:'toggleUp',
        
        MENU_RENDER_COMPLETE: 'menuRenderComplete', 
        MENU_CHANGE_COLOR:'menuChangeColor',
        PROOF_POINT: 'proofPointMore',

        GALLERY_CATEGORIES_READY : 'galleryCategoriesReady',
        GALLERY_ITEMS_READY : 'galleryItemsReady',

        BIOGRAPHY_ITEM_CLICKED : 'biographyItemClicked',
        ALBUM_CLICKED : 'albumClicked',
        ALBUM_SONG_CLICKED : 'albumSongClicked',
        SOCIAL_CLICKED : 'socialClicked',
        DOWNLOADS_ITEM_CLICKED : 'downloadsItemClicked'


    } // Events  

    $.Views = {


} // Views 



})(jQuery);


/* ---------------------------------- */

/* Auto Instantiate */

(function ($) {

    $.fn.Instantiate = function (settings) {
        
        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {
           
            var $self = $(this),
            $controller = $self.attr('data-controller');
            $contentAction = $self.attr('content-action');
              if($contentAction){
                $self.bind($.Events.SCROLL_ENTER,
                    function (e) {

                       if($self.attr('view-controller-state')){
                            return;
                       }
                       $self.RenderViewController();
                       $self.attr('view-controller-state','true');
                    });
              };
            
            if ($self[$controller]){
                $self[$controller]();
            }
        });

    }



})(jQuery);



/* ---------------------------------- */

/* Analytics */

(function ($) 
{

    $.fn.Analytics = function (settings) 
    {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () 
        {
            
            var $self = $(this),
            $track = $('[data-analytics]').AnalyticsTrack()
            $exits = $('[data-analyticslink]').AnalyticsTrackLink();

            $.Body
            .bind($.Events.GA_TRACK,
            function (e, id) {
                try{
                    _gat._getTrackerByName()._trackEvent(id, "Section View");
                }catch(err)
                  {
                  //Handle errors here
                  }
            })
          .bind($.Events.GA_TRACK_LINK,
            function (e, url) {
                try{
                    _gat._getTrackerByName()._trackEvent(url, "Link Click");
                 }catch(err)
                  {
                  //Handle errors here
                  }
            })
           .bind($.Events.GA_TRACK_ACTION,
            function (e, data) {
                //alert(data.category  + ":" + data.action + ":" + data.label);
                try{
                    _gat._getTrackerByName()._trackEvent(data.category ,data.action ,data.label);
                 }
                 catch(err)
                  {
                  //Handle errors here
                  }
            })
        });
        return this;
    };

    $.fn.AnalyticsTrack = function (settings) {

        
        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('data-analytics');
            
            $self
            .Scrollable({})
            .bind($.Events.SCROLL_ENTER,
            function (e) {
                _track($id)
            })


            function _track(id) {
                
                //_trackEvent(category, action, opt_label, opt_value)
                try{
                     _gat._getTrackerByName()._trackEvent(id, "Section View");
                 }catch(err)
                  {
                  //Handle errors here
                  }
                //_gaq.push(['_trackEvent', 'Videos', 'Play', 'Gone With the Wind']);
            }



        });


        return this;
    };

    $.fn.AnalyticsTrackLink = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('href');


            $self
          .bind('click',
            function (e) {
                _track($id)
            })


            function _track(id) {
                
                try{
                    _gat._getTrackerByName()._trackEvent(id, "Link Click");
                }catch(err)
                  {
                  //Handle errors here
                  }
            }
        });


        return this;
    };

    $.fn.BindAnalyticsOuterLinks = function (settings) {

        
        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('href');
            $action = $self.attr('track-action');
            $label = $self.attr('track-label');
            

            $self
            .bind('click',
                function (e) {
                    _track($id)
                })


            function _track(id) {
                try{
                    _gat._getTrackerByName()._trackEvent(settings.category, $action, $label);
                }catch(err)
                  {
                  //Handle errors here
                  }
            }
        });


        return this;
    }

})(jQuery);

/* ---------------------------------- */

/* Shell */

(function ($) {

    $.fn.SHELL = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {


        });


        return this;
    }

})(jQuery);

/* ---------------------------------- */

/* Music */

(function ($) {

    $.fn.SectionMusic = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $points = $self.find('[data-proofpoint]'),
            $points_container = $self.find('.social-points-container'),
            $more = $self.find('nav.more a'),
            _active = 0;

            $self.Scrollable({ is_nav: true })

            //$points.ProofPoint({ owner: $self })

            $more
          .bind('mousedown',
            function (e) {
                $more.addClass('_down');
            })
          .bind('mouseup',
            function (e) {
                $more.removeClass('_down');
            })
          .bind('click',
            function (e) {

                _active++;

                if (_active > $points.length - 1)
                    _active = 0;

                var dir = (_active == 0) ? -1 : 1;

                $self.triggerHandler($.Events.PROOF_POINT, [_active, dir])

                $points_container.stop().animate({ marginTop: -_active * 600 }, 850, 'easeOutExpo')

                e.preventDefault();

            })





        });


        return this;

    } //Music

    $.fn.SocialActions = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function (index) {

            var $self = $(this),
            $h1 = $self.find('h1'),
            $headline = $self.attr('data-share'),
            $summary = $self.find('p').html(),
            $copy = $self.find('section.social-description'),
            $icons = $('<aside/>').appendTo($copy),
            $a_fb = $('<a/>').html('Facebook').attr({ href: '#/fb', 'title': 'Facebook' }).addClass('icon-fb').appendTo($h1),
            $a_twitter = $('<a/>').html('Twitter').attr({ href: '#/twitter', 'title': 'Twitter' }).addClass('icon-twitter').appendTo($h1),
            $a_youtube = $('<a/>').html('You Tube').attr({ href: '#/youtube', 'title': 'youtube' }).addClass('icon-ut').appendTo($h1),
            _heading = $h1.html();

            $self.css({ left: index * 500 })

            $a_fb
          .bind('click',
            function (e) {

                var _fb = window.open('http://www.facebook.com/sharer.php?s=100&p[url]=http://moshe-peretz.com&p[title]=' + escape($headline) + '&p[summary]=' + (escape($summary) + ' Moshe Peretz .') + '&p[images][0]=http://Moshe-Peretz.com/images/MosheStatusFacebook.jpg', '_fb', 'width=550,height=450')

                _centerPopup(_fb)
                //Harel
                $.Body.triggerHandler($.Events.GA_TRACK, 'facebook_' + escape($headline))
                e.preventDefault();

            })

            $a_twitter
          .bind('click',
            function (e) {

                var _tweet = window.open('http://twitter.com/home?status=' + escape($headline) + escape(' #Moshe Peretz') + ' http://Moshe-Peretz.com', '_tweet', 'width=1024,height=600,scrollbars=yes')

                _centerPopup(_tweet)
                //Harel
                $.Body.triggerHandler($.Events.GA_TRACK, 'twitter_' + escape($headline))

                e.preventDefault();

            })

             $a_youtube
          .bind('click',
            function (e) {

                var _tweet = window.open('http://twitter.com/home?status=' + escape($headline) + escape(' #Moshe Peretz') + ' http://Moshe-Peretz.com', '_tweet', 'width=1024,height=600,scrollbars=yes')

                _centerPopup(_tweet)
                //Harel
                $.Body.triggerHandler($.Events.GA_TRACK, 'twitter_' + escape($headline))

                e.preventDefault();

            })

            config.owner
          .bind($.Events.PROOF_POINT,
            function (e, i, dir) {

                if (i == index)
                    _show(dir);
                else
                    _hide(dir);


            });

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



        });


        return this;
    } // Social Actions

})(jQuery);

/* ---------------------------------- */

/* @Line */

(function ($) {

    $.fn.Line = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $canvas = $self.find('canvas'),
            $canvas_id = $canvas.attr('id'),
            $target = $self.attr('data-target'),
            $top = $self.attr('data-top'),
            $coord = $self.attr('data-coord') ? $self.attr('data-coord').split(',') : new Array(0, 0, 0, 0),
            _canvas_element = document.getElementById($canvas_id),
            _canvas_context = _canvas_element.getContext('2d'),
            _height = 0;

            $self.css({ top: parseInt($top), height: parseInt($coord[3]), marginBottom: 0, width: 900, overflow: 'hidden' })

            $canvas.attr({ height: parseInt($coord[3]), width: 900 })

            $.html5.canvas.draw.dashedline(_canvas_context, parseInt($coord[0]), parseInt($coord[1]), parseInt($coord[2]), parseInt($coord[3]), _canvas_element, 6);

        });


        return this;
    }

})(jQuery);




/* ---------------------------------- */

/* Scrollable */

(function ($) {


    $.fn.Scrollable = function (settings) {
    
        var config = { threshold: -100, offset_scroll: 6, offset_intertia: .15 };

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id');
            
            config.threshold = 0

            if ($.Mobile || $.Unsupported) {
                $self.css({ backgroundAttachment: 'scroll' })
            } else {
                $.Window
          .bind('scroll',
            function (e) {
                if ($.inview($self, { threshold:config.threshold })) {
                            
                    if (!$self.hasClass('_active')) {
                        $self.addClass('_active');

                        if (config.is_nav){
                            
                            $.Body.triggerHandler($.Events.SECTION_ENTER, $id);
                        }
                        $self.triggerHandler($.Events.SCROLL_ENTER);
                    }

                    _scroll_background();

                    $self.triggerHandler($.Events.SCROLL, $.distancefromfold($self, { threshold: config.threshold }) - config.threshold)

                } else {

                    if ($self.hasClass('_active')) {

                        $self.removeClass('_active');
                        $self.triggerHandler($.Events.SCROLL_LEAVE);


                    }

                }


            })


            }

            function _scroll_background() {
                
                var _x = '50%'
                var bpos = _x + (-($.distancefromfold($self, { threshold: config.threshold }) - config.threshold) * config.offset_intertia) + 'px';
                $self.css({ 'backgroundPosition': bpos });

            }

            if (config.auto_scroll)
            _scroll_background();

        });

        return this;

    } //Story

    $.fn.Video = function () {

        this.each(function () {
        //$img = $self.find('.vid'),
            var $self = $(this),
            $header = $self.find('header'),
            $h1 = $self.find('h1'),
            $h2 = $self.find('h2'),
            $span = $self.find('span'),
            $a_close = $self.find('a#close-video'),
            $id = $self.attr('id'),
            $a_play = $self.find('a.play-button'),
            $darkslide = $self.find('.darkslide'),
            $container = $self.find('#video-container'),
            _popup = ($.Unsupported || $.Body.hasClass('browser-ie7')),
            _threshold = 200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true, auto_scroll: true })
          .bind($.Events.SCROLL, on_scroll)
          .bind($.Events.SCROLL_ENTER, on_scroll_enter)
          .bind($.Events.SCROLL_LEAVE, on_scroll_leave);


            $a_play
          .bind('click',
            function (e) {
                if (!_popup)
                    _show_video();
                else
                    _popup_video();

                e.preventDefault();
            })


            $a_close
          .bind('click',
            function (e) {
                _close_video();
                e.preventDefault();
            })

            function on_scroll(e, distance) {

                $span.css({ marginTop: 75 - Math.floor(distance / 10) })

            }

            function on_scroll_enter(e) {



            }

            function on_scroll_leave(e) {

                $self.removeClass('_playing');
                $container.html('');
                $darkslide.stop().css({ height: 0, opacity: 0 });

            }

            function _popup_video() {

                var _v = window.open('/video/HighlightVideo', '_video', 'width=810,height=456')
                _v.focus();
                _v.moveTo($(window).width() / 2 - 405, $(window).height() / 2 - 230)


            }
            function _show_video() {

                $self.addClass('_playing');

                $darkslide.css({ height: '100%' }).animate({ opacity: .9 }, 800, 'easeInOutExpo', _bind_container)

                var _scrolltop = $self.offset().top + ($self.height() - $.Window.height()) / 2;

                if ($a_close.offset().top < _scrolltop)
                    _scrolltop = $a_close.offset().top;

                $.Scroll.animate({ scrollTop: _scrolltop }, 800, 'easeInOutExpo')
            }

            function _bind_container() {

                var embedCode = "<object width=\"768\" height=\"462\"><param name=\"movie\" value=\"http://www.youtube.com/v/LGiMY8nb-fM&ap=%2526fmt%3D2&autoplay=1&disablekb=1&hd=1&showinfo=0&showsearch=0&rel=0&enablejsapi=1&playerapiid=myytplayer\">"+
                            "</param><param name=\"allowFullScreen\" value=\"true\"></param>"+
                            "<param name=\"allowscriptaccess\" value=\"always\"></param>" + 
                            "<embed src=\"http://www.youtube.com/v/LGiMY8nb-fM&ap=%2526fmt%3D2&autoplay=1&disablekb=1&hd=1&showinfo=0&showsearch=0&rel=0&enablejsapi=1&playerapiid=myytplayer\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"768\" height=\"462\"></embed></object>";
                $container.html(embedCode);
            }

            function _close_video() {

                $self.removeClass('_playing');
                $('#myExperience').remove();
                $container.html('');

                $darkslide.css({ height: '100%' }).animate({ opacity: 0 }, 1200, 'easeInOutQuart', function () {
                    $darkslide.css({ height: '0' })
                })

            }



        });

        return this;

    } //Video
    //StoryFreeXT
    $.fn.SectionShows = function () {

        this.each(function () {

            var $self = $(this),
            $header = $self.find('header'),
            $bg = $self.find('.bg'),
            $h1 = $self.find('h1'),
            $h2 = $self.find('h2'),
            $id = $self.attr('id'),
            $img = $self.find('img'),
            //$div = $self.find('.content')
            //$innerContent = $self.find('.inner-Content')
            
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })
          .bind($.Events.SCROLL, on_scroll)
          .bind($.Events.SCROLL_ENTER, on_scroll_enter)
          .bind($.Events.SCROLL_LEAVE, on_scroll_leave);



            function on_scroll(e, distance) {

                var bpos = '50% ' + ($.Window.height() / 2.5 - distance / 3) + 'px';
                $bg.css({ 'backgroundPosition': bpos });
                //var sbpos = '50% ' + ($.Window.height() / 2.5 - distance / 5) + 'px';
                //$sbg.css({ 'backgroundPosition': bpos });
                

            }

            function on_scroll_enter(e) {
               //$div.delay(300).animate({ opacity: 0.9 , width : 900 }, 800, 'easeOutQuart', 
              //function () { 
                    //$innerContent.css('display','block').animate({ opacity: 1 }, 500, 'easeOutQuart', function () { });
               //});
            }

            function on_scroll_leave(e) {
                //$div.animate({ right: 0, opacity: 0.1 , width : 10 , height: 10, top : 0 }, 10, 'easeOutQuart', function () { })
            }



        });

        return this;

    } 

    $.fn.SectionGallery = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })
          .bind($.Events.SCROLL, on_scroll)
          .bind($.Events.SCROLL_ENTER, on_scroll_enter)
          .bind($.Events.SCROLL_LEAVE, on_scroll_leave);

          function on_scroll(e, distance) {
                
                var bpos = '45% ' + (300 + $.Window.height() / 2 - distance / 3) + 'px';
                $bg.css({ 'backgroundPosition': bpos });

            }

            function on_scroll_enter(e) {
               //$div.delay(300).animate({ opacity: 0.9 , width : 900 }, 800, 'easeOutQuart', 
              //function () { 
                    //$innerContent.css('display','block').animate({ opacity: 1 }, 500, 'easeOutQuart', function () { });
               //});
            }

            function on_scroll_leave(e) {
                //$div.animate({ right: 0, opacity: 0.1 , width : 10 , height: 10, top : 0 }, 10, 'easeOutQuart', function () { })
            }

        });

        return this;

    } //SectionNews

    $.fn.StorySoweto = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })
          .bind($.Events.SCROLL, on_scroll)
          .bind($.Events.SCROLL_LEAVE, on_scroll_leave);

            function on_scroll(e, distance) {

                var bpos = '25% ' + (300 + $.Window.height() / 2 - distance / 3) + 'px';

                $bg.css({ 'backgroundPosition': bpos });

            }

            function on_scroll_leave(e) {
                
            }
        });

        return this;

    } //StorySoweto



    $.fn.SectionCommunity = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })


        });

        return this;

    } //StoryNYC Rec


    $.fn.VideoClips = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            $bg = $self.find('.bg'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })
          .bind($.Events.SCROLL, on_scroll)

            function on_scroll(e, distance) {

                var bpos = '90% ' + (200 + $.Window.height() / 2 - distance / 3) + 'px';

                $bg.css({ 'backgroundPosition': bpos })

            }


        });

        return this;

    } //VideoClips


    $.fn.StoryDownloads = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })


        });

        return this;

    } //StoryDownloads


    $.fn.StoryPublications = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })



        });

        return this;

    } //StoryStore


    $.fn.StoryBio = function () {

        this.each(function () {

            var $self = $(this),
            $id = $self.attr('id'),
            _threshold = -200;

            $self
          .Scrollable({ threshold: _threshold, is_nav: true })


        });

        return this;

    } //StoryBio



})(jQuery);


/* ---------------------------------- */

/* MainNav */

(function ($) {


    $.fn.MainNav = function () {

        this.each(function () {

            var $self = $(this),
            $ul = $('<ul/>').appendTo($self),
            $sections = $('[data-nav]'),
            _sections = new Array(),
            $navs = new Array(),
            _active = 0;

            //var $logo = $('<li style="width:120px;"></li>').appendTo($ul);

            if (!$.Mobile && !$.Unsupported) {
                $sections.each(
                function (i) {
                    _sections.push($(this))
                    $('<li/>').appendTo($ul).DotNav({ id: $(this).attr('id'), name: $(this).attr('data-nav') , bgColor : $(this).attr('mainnav-color') });

            })

                $self.css({ marginTop: -$self.height() / 2 })

            }

            $.Body
          .bind($.Events.SECTION_ENTER,
            function (e, id) {

                $sections.each(
                function (i) {
                    if ($(this).attr('id') == id)
                        _active = i;

                })

            })
          .bind($.Events.KEY_RIGHT,
            function (e) {
                _active++;
                if (_active > $sections.length - 1)
                    _active = $sections.length - 1;
                _seek();
            })
          .bind($.Events.KEY_LEFT,
            function (e) {
                _active--;
                if (_active < 0)
                    _active = 0;
                _seek()

            });

            $.Body.bind($.Events.TOGGLE_DOWN,
            function (e) {
                _active++;
                if (_active > $sections.length - 1)
                    _active = $sections.length - 1;
                _seek();
            });
          $.Body.bind($.Events.TOGGLE_UP,
            function (e) {
                _active--;
                if (_active < 0)
                    _active = 0;
                _seek()

            });
            function _seek() {
                $.Body.triggerHandler($.Events.SCROLL_TO, _sections[_active].attr('id'))
            }


        });

        return this;

    } // Main Nav

    $.fn.DotNav = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
            $a = $('<a/>'),
            $h1 = $('<h1/>').html(config.name).appendTo($self),
            $id = config.id;
            
            $a
              .attr('href', "#/" + config.name.split(' ').join('_'))
              .html(config.name)
              .appendTo($self)
              .attr("id","mn_"+$id)
              .bind('click',
                function (e) {

                    $.Body.triggerHandler($.Events.SCROLL_TO, $id)

                    e.preventDefault();

                })

            $self
              .attr('data-id', $id);

            $a
          .bind('mouseenter',
            function (e) {
                if ($('._playing').length == 0)
                    if ($.browser.msie){
                        //$h1.stop().css({ display: 'block', right: 1130 })
                            $a.stop().css({ color : config.bgColor })
                        
                        }
                    else{
                        $a.stop().animate({ color: config.bgColor }, 450, 'easeOutQuart')
                       
                    }
            })
          .bind('mouseleave',
            function (e) {
                if ($.browser.msie){
                        $a.stop().css({ color: '#000' })
                    }
                else{
                        $a.stop().css({ color: '#000' })
                    }
            });


            $.Body
          .bind($.Events.SECTION_ENTER,
            function (e, id) {
                
                if (id == $id){
                    $a.addClass($id + '_active');
                }
                else{
                    $a.removeClass($id + '_active');
                    $("#" + $id).stop();
                }

            });


        });

        return this;

    }; // DotNav




})(jQuery);


/* ---------------------------------- */


/* ---------------------------------- */

/* SiteScroll */

(function ($) {


    $.fn.SiteScroll = function () {
        this.each(function () {

            var $self = $(this);

            $.Body
          .bind($.Events.SCROLL_TO,
            function (e, id) {
               
                var $element = $('#' + id),
                  $header = $element.find('header'),
                  _align = $element.attr('data-align'),
                  _offset = $element.attr('data-scrolloffset') ? parseInt($element.attr('data-scrolloffset')) : 50,
                  _top = $element.offset().top;


                if ($header.length > 0 && _align != "top") {

                    _top = $header.offset().top + $header.height() / 2 - $.Window.height() / 2;

                    
                    if (_top > $header.offset().top)
                        _top = $header.offset().top - 50

                }

                if (_align == "center" && $element.height() > $.Window.height()) {

                    _top = $element.offset().top + ($element.height() - $.Window.height()) / 2

                }



                $.Scroll
                .stop()
                .animate({ 'scrollTop': _top },800,'easeInOutQuart')


            })


        });

        return this;

    }



})(jQuery);

/* ---------------------------------- */

/* TargetBlank */

(function ($) {


    $.fn.TargetBlank = function () {

        this.each(function () {

            var $self = $(this);


            $self
        .attr('target', '_blank')
        .bind('click', on_click);

            function on_click(e) {

            }


        });

        return this;

    }



})(jQuery);


/* ---------------------------------- */

/* Keyboard */

(function ($) {


    $.fn.Keyboard = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this);

            $(document)
        .bind('keydown', on_keydown);

            function on_keydown(e) {

                var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

                switch (key) {


                    case 27: //escape

                        $.Body.triggerHandler($.Events.KEY_ESC);

                        break;

                    case 32: //space

                        $.Body.triggerHandler($.Events.KEY_SPACE);

                        break;

                    case 38: //top

                        $.Body.triggerHandler($.Events.KEY_UP);

                        break;

                    case 39: //right

                        $.Body.triggerHandler($.Events.KEY_RIGHT);
                        e.preventDefault();

                        break;

                    case 40: ///bottom

                        $.Body.triggerHandler($.Events.KEY_DOWN);

                        break;

                    case 37: //left

                        $.Body.triggerHandler($.Events.KEY_LEFT);

                        break;


                } //switch

            } //keydown

        });

        return this;

    }


})(jQuery);


/* ---------------------------------- */

/* Worker */

(function ($) {


    $.distancefromfold = function ($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return (fold + settings.threshold) - $element.offset().top;
    };

    $.belowthefold = function ($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $element.offset().top - settings.threshold;
    };

    $.rightoffold = function ($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $element.offset().left - settings.threshold;
    };

    $.abovethetop = function ($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $element.offset().top + settings.threshold + $element.height();
    };

    $.leftofbegin = function ($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $element.offset().left + settings.threshold + $element.width();
    };

    $.inview = function ($element, settings) {
        return ($.abovethetop($element, settings) != true && $.belowthefold($element, settings) != true)
    };


    $.extend($.expr[':'], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });

})(jQuery);    

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