'use strict';
/*globals window,navigator,_gat,jQuery */
(function ($) {

    if ($.browser.msie) {
        if ($.browser.version <= 8) {
            window.location.href = "BrowserSupport.html";
        }
    }

    $.Events = {


        GA_TRACK: 'googleAnalyticsTrack',
        GA_TRACK_LINK: 'googleAnalyticsTrackLink',
        GA_TRACK_ACTION: 'googleAnalyticsTrackAction',
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
        TOGGLE_DOWN: 'toggleDown',
        TOGGLE_UP: 'toggleUp',

        MENU_RENDER_COMPLETE: 'menuRenderComplete',
        MENU_CHANGE_COLOR: 'menuChangeColor',
        PROOF_POINT: 'proofPointMore',

        GALLERY_CATEGORIES_READY: 'galleryCategoriesReady',
        GALLERY_ITEMS_READY: 'galleryItemsReady',

        ALBUM_CLICKED: 'albumClicked',
        ALBUM_SONG_CLICKED: 'albumSongClicked',
        DOWNLOADS_ITEM_CLICKED: 'downloadsItemClicked'


    }; // Events

    $.Views = {


    }; // Views

    $.fn.Instantiate = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
                $controller = $self.attr('data-controller');
            if ($self[$controller]) {
                $self[$controller]();
            }
        });

    };

    $.fn.Analytics = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {
            $.Body
                .bind($.Events.GA_TRACK,
                function (e, id) {
                    try {
                        _gat._getTrackerByName()._trackEvent(id, "Section View");
                    } catch (err) {
                        //Handle errors here
                    }
                })
                .bind($.Events.GA_TRACK_LINK,
                function (e, url) {
                    try {
                        _gat._getTrackerByName()._trackEvent(url, "Link Click");
                    } catch (err) {
                        //Handle errors here
                    }
                })
                .bind($.Events.GA_TRACK_ACTION,
                function (e, data) {
                    //alert(data.category  + ":" + data.action + ":" + data.label);
                    try {
                        _gat._getTrackerByName()._trackEvent(data.category, data.action, data.label);
                    }
                    catch (err) {
                        //Handle errors here
                    }
                });
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
                function () {
                    _track($id);
                });


            function _track(id) {

                //_trackEvent(category, action, opt_label, opt_value)
                try {
                    _gat._getTrackerByName()._trackEvent(id, "Section View");
                } catch (err) {
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
                function () {
                    _track($id);
                });


            function _track(id) {

                try {
                    _gat._getTrackerByName()._trackEvent(id, "Link Click");
                } catch (err) {
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
                $id = $self.attr('href'),
                $action = $self.attr('track-action'),
                $label = $self.attr('track-label');


            $self
                .bind('click',
                function () {
                    _track($id);
                });


            function _track() {
                try {
                    _gat._getTrackerByName()._trackEvent(settings.category, $action, $label);
                } catch (err) {
                    //Handle errors here
                }
            }
        });


        return this;
    };

    $.fn.SHELL = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {


        });


        return this;
    };

    $.fn.Line = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
                $canvas = $self.find('canvas'),
                $canvas_id = $canvas.attr('id'),
                $top = $self.attr('data-top'),
                $coord = $self.attr('data-coord') ? $self.attr('data-coord').split(',') : [0, 0, 0, 0],
                _canvas_element = window.document.getElementById($canvas_id),
                _canvas_context = _canvas_element.getContext('2d');

            $self.css({ top: parseInt($top), height: parseInt($coord[3]), marginBottom: 0, width: 900, overflow: 'hidden' });

            $canvas.attr({ height: parseInt($coord[3]), width: 900 });

            $.html5.canvas.draw.dashedline(_canvas_context, parseInt($coord[0]), parseInt($coord[1]), parseInt($coord[2]), parseInt($coord[3]), _canvas_element, 6);

        });


        return this;
    };

    $.fn.Scrollable = function (settings) {

        var config = { threshold: -100, offset_scroll: 6, offset_intertia: 0.15 };

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
                $id = $self.attr('id');

            config.threshold = 0;

            if ($.Mobile || $.Unsupported) {
                $self.css({ backgroundAttachment: 'scroll' });
            } else {
                $.Window.bind('scroll', function () {
                        if ($.inview($self, { threshold: config.threshold })) {

                            if (!$self.hasClass('_active')) {
                                $self.addClass('_active');

                                if (config.is_nav) {

                                    $.Body.triggerHandler($.Events.SECTION_ENTER, $id);
                                }
                                $self.triggerHandler($.Events.SCROLL_ENTER);
                            }

                            _scroll_background();

                            $self.triggerHandler($.Events.SCROLL, $.distancefromfold($self, { threshold: config.threshold }) - config.threshold);

                        } else {

                            if ($self.hasClass('_active')) {

                                $self.removeClass('_active');
                                $self.triggerHandler($.Events.SCROLL_LEAVE);


                            }

                        }


                    });
            }

            function _scroll_background() {

                var _x = '50%';
                var bpos = _x + (-($.distancefromfold($self, { threshold: config.threshold }) - config.threshold) * config.offset_intertia) + 'px';
                $self.css({ 'backgroundPosition': bpos });

            }

            if (config.auto_scroll)
                _scroll_background();

        });

        return this;

    }; //Story

    $.fn.SectionShows = function () {

        this.each(function () {

            var $self = $(this),
                $bg = $self.find('.bg'),
                _threshold = -200;

            $self
                .Scrollable({ threshold: _threshold, is_nav: true })
                .bind($.Events.SCROLL, function on_scroll(e, distance) {
                    var bpos = '50% ' + ($.Window.height() / 2.5 - distance / 3) + 'px';
                    $bg.css({ 'backgroundPosition': bpos });
                });
        });

        return this;

    };

    $.fn.SectionGallery = function () {

        this.each(function () {

            var $self = $(this),
                $bg = $self.find('.bg'),
                _threshold = -200;

            $self.Scrollable({ threshold: _threshold, is_nav: true }).bind($.Events.SCROLL, function on_scroll(_, distance) {

                var bpos = '45% ' + (300 + $.Window.height() / 2 - distance / 3) + 'px';
                $bg.css({ 'backgroundPosition': bpos });

            });
        });

        return this;

    }; //SectionNews

    $.fn.StorySoweto = function () {

        this.each(function () {

            var $self = $(this),
                $bg = $self.find('.bg'),
                _threshold = -200;

            $self.Scrollable({ threshold: _threshold, is_nav: true }).bind($.Events.SCROLL, function on_scroll(e, distance) {

                var bpos = '25% ' + (300 + $.Window.height() / 2 - distance / 3) + 'px';

                $bg.css({ 'backgroundPosition': bpos });

            });
        });

        return this;

    }; //StorySoweto

    $.fn.SectionCommunity = function () {

        this.each(function () {

            var $self = $(this),
                _threshold = -200;

            $self.Scrollable({ threshold: _threshold, is_nav: true });


        });

        return this;

    }; //StoryNYC Rec

    $.fn.StoryDownloads = function () {

        this.each(function () {

            var $self = $(this),
                _threshold = -200;

            $self.Scrollable({ threshold: _threshold, is_nav: true });


        });

        return this;

    }; //StoryDownloads

    $.fn.StoryPublications = function () {

        this.each(function () {

            var $self = $(this),
                _threshold = -200;

            $self.Scrollable({ threshold: _threshold, is_nav: true });


        });

        return this;

    }; //StoryStore

    $.fn.StoryBio = function () {

        this.each(function () {

            var $self = $(this),
                _threshold = -200;

            $self.Scrollable({ threshold: _threshold, is_nav: true });


        });

        return this;

    }; //StoryBio

    $.fn.MainNav = function () {

        this.each(function () {

            var $self = $(this),
                $ul = $self.find('ul#MainNavList'),
                $sections = $('[data-nav]'),
                _sections = [],
                _active = 0;

            if (!$.Mobile && !$.Unsupported) {
                $sections.each(function () {
                    _sections.push($(this));
                    $('<li/>').appendTo($ul).DotNav({ id: $(this).attr('id'), name: $(this).attr('data-nav'), bgColor: $(this).attr('mainnav-color') });

                });
                $self.css({ marginTop: -$self.height() / 2 });
            }

            $.Body
                .bind($.Events.SECTION_ENTER,
                function (e, id) {
                    $sections.each(function (i) {
                        if ($(this).attr('id') == id)
                            _active = i;

                    });
                })
                .bind($.Events.KEY_RIGHT,
                function () {
                    _active++;
                    if (_active > $sections.length - 1)
                        _active = $sections.length - 1;
                    _seek();
                })
                .bind($.Events.KEY_LEFT,
                function () {
                    _active--;
                    if (_active < 0) _active = 0;
                    _seek();
                });

            $.Body.bind($.Events.TOGGLE_DOWN,
                function () {
                    _active++;
                    if (_active > $sections.length - 1)
                        _active = $sections.length - 1;
                    _seek();
                });
            $.Body.bind($.Events.TOGGLE_UP,
                function () {
                    _active--;
                    if (_active < 0) _active = 0;
                    _seek();
                });
            function _seek() {
                $.Body.triggerHandler($.Events.SCROLL_TO, _sections[_active].attr('id'));
            }


        });

        return this;

    }; // Main Nav

    $.fn.DotNav = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {

            var $self = $(this),
                $a = $('<a/>'),
                $id = config.id;

            $a
                .attr('href', "#/" + config.name.split(' ').join('_'))
                .html(config.name)
                .appendTo($self)
                .attr("id", "mn_" + $id)
                .bind('click',
                function (e) {

                    $.Body.triggerHandler($.Events.SCROLL_TO, $id);

                    e.preventDefault();

                });

            $self
                .attr('data-id', $id);

            $a
                .bind('mouseenter',
                function () {
                    if ($('._playing').length === 0)
                        if ($.browser.msie) {
                            $a.stop().css({ color: config.bgColor });
                        } else {
                            $a.stop().animate({ color: config.bgColor }, 450, 'easeOutQuart');
                        }
                })
                .bind('mouseleave',
                function () {
                    $a.stop().css({ color: '#000' });
                });

            $.Body.bind($.Events.SECTION_ENTER, function (e, id) {

                    if (id == $id) {
                        $a.addClass($id + '_active');
                    }
                    else {
                        $a.removeClass($id + '_active');
                        $("#" + $id).stop();
                    }

                });
        });

        return this;

    }; // DotNav

    $.fn.SiteScroll = function () {
        this.each(function () {
            $.Body.bind($.Events.SCROLL_TO, function (e, id) {

                var $element = $('#' + id),
                    $header = $element.find('header'),
                    _align = $element.attr('data-align'),
                    _top = $element.offset().top;


                if ($header.length > 0 && _align != "top") {

                    _top = $header.offset().top + $header.height() / 2 - $.Window.height() / 2;


                    if (_top > $header.offset().top)
                        _top = $header.offset().top - 50;

                }

                if (_align == "center" && $element.height() > $.Window.height()) {

                    _top = $element.offset().top + ($element.height() - $.Window.height()) / 2;

                }


                $.Scroll.stop().animate({ 'scrollTop': _top }, 800, 'easeInOutQuart');


            });
        });
        return this;
    };

    $.fn.Keyboard = function (settings) {

        var config = {};

        if (settings) $.extend(config, settings);

        this.each(function () {
            $(window.document).bind('keydown', function on_keydown(e) {
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
            });
        });

        return this;

    };

    $.distancefromfold = function ($element, settings) {
        var fold = ((settings.container === undefined || settings.container === window)) ? $(window).height() + $(window).scrollTop() : $(settings.container).offset().top + $(settings.container).height();
        return (fold + settings.threshold) - $element.offset().top;
    };

    $.belowthefold = function ($element, settings) {
        var fold = settings.container === undefined || settings.container === window ? $(window).height() + $(window).scrollTop() : $(settings.container).offset().top + $(settings.container).height();
        return fold <= $element.offset().top - settings.threshold;
    };

    $.rightoffold = function ($element, settings) {
        var fold = settings.container === undefined || settings.container === window ? $(window).width() + $(window).scrollLeft() : $(settings.container).offset().left + $(settings.container).width();
        return fold <= $element.offset().left - settings.threshold;
    };

    $.abovethetop = function ($element, settings) {
        var fold = settings.container === undefined || settings.container === window ? $(window).scrollTop() : $(settings.container).offset().top;
        return fold >= $element.offset().top + settings.threshold + $element.height();
    };

    $.leftofbegin = function ($element, settings) {
        var fold = settings.container === undefined || settings.container === window ? $(window).scrollLeft() : $(settings.container).offset().left;
        return fold >= $element.offset().left + settings.threshold + $element.width();
    };

    $.inview = function ($element, settings) {
        return ($.abovethetop($element, settings) !== true && $.belowthefold($element, settings) !== true);
    };

    $.extend($.expr[':'], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });

    $.Globals = {

        NavWidth: '',
        NavPos: ''
    };

    $.fn.MPBase = function () {
        $.Body.bind($.Events.MENU_RENDER_COMPLETE,
            function (e, mainNavProperties) {
                $.Globals.NavWidth = mainNavProperties.width;
                $.Globals.NavPos = mainNavProperties.left;

            });
        return this;
    };

    $.fn.fnGalleryController = function () {
        var $self = $(this);
        $self.ready(function () {

            //Full Caption Sliding (Hidden to Visible)
            $('[lightboxContainer]').hover(function () {
                $(".cover", this).stop().animate({ top: '120px' }, { queue: false, duration: 160 });
            }, function () {
                $(".cover", this).stop().animate({ top: '150px' }, { queue: false, duration: 160 });
            });


            $('[gallery-category]').GalleryCategory({lightBoxInit: false});
        });

        $.Body.bind($.Events.GALLERY_ITEMS_READY, function () {
                $('#galleyboom').find('a').lightBox();
            });
    };

    $.fn.GalleryCategory = function () {

        this.each(function () {
            var $self = $(this),
                $category = $self.attr('gallery-category'),
                $responsePlaceHolder = $('#' + $self.attr('gallery-response-placeHolder'));


            $self.mousedown(
                function () {
                    $.ajax({
                        url: '/Sections/GalleryItems?category=' + encodeURIComponent($category),
                        success: function (result) {
                            $responsePlaceHolder.css({opacity: '0', marginRight: '300px', display: 'block'}).stop().animate({ opacity: '0.8', marginRight: '0px'}, 1500, 'easeOutQuart');
                            $responsePlaceHolder.find('#album-data-panel').html($category);
                            $responsePlaceHolder.find('#album-thumbs-panel').html(result);
                            $responsePlaceHolder.ready(function () {
                                $.Body.triggerHandler($.Events.GALLERY_ITEMS_READY);
                            });
                        }
                    });
                });
        });
        return this;
    };

    $.fn.myPlugin = function () {
        // there's no need to do $(this) because
        // "this" is already a jquery object

        // $(this) would be the same as $($('#element'));

        this.fadeIn('normal', function () {

            // the this keyword is a DOM element

        });

    };

    $.fn.Footer = function () {

        this.each(function () {


        });

        return this;

    }; //Footer

    $(function () {
        $.Body = $('body');
        $.Window = $(window);
        $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
        $.Mobile = $.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i));
        $.Unsupported = $.Body.hasClass('unsupported-browser');

        $.Body
            .Keyboard()
            .MPBase()
            .Analytics();

        $('[data-controller]').Instantiate();

        // Draw Lines
        // Bug with IE canvas implementation requires onload
        var $canvaslines = $('[data-canvasline]');
        if ($.browser.msie) {
            $(window).bind('load', $canvaslines.Line.bind($canvaslines));
        } else {
            $canvaslines.Line();
        }
    });
})(jQuery);
