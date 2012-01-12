/**
 * exValidation
 *
 * @version   : 1.2.2
 * @author    : nori (norimania@gmail.com)
 * @copyright : 5509 (http://5509.me/)
 * @license   : The MIT License
 * @link      : http://5509.me/log/exvalidation
 * @modified  : 2011-04-24 22:14
 */
;(function($) {
	// Extend validation rules
	$.exValidationRules = $.extend($.exValidationRules, {
		chkrequired: [
//			"入力してください",
			"This feild is required",
			function(txt, t) {
				if ( $(t).hasClass("chkgroup") ) {
					var flag = 0;
					$("input,select",t).each(function() {
						if ( $(this).val().length > 0 ) flag++;
					});
					if ( txt && flag === $("input,select", t).length ) {
						if ( /^[ 　\r\n\t]+$/.test(txt) ) {
							return false;
						} else {
							return true;
						}
					}
				} else {
					if ( txt && txt.length>0 ) {
						if ( /^[ 　\r\n\t]+$/.test(txt) ) {
							return false;
						} else {
							return true;
						}
					}
				}
			}
		],
		chkselect: [
//			"選択してください",
			"This feild is required",
			function(txt, t) {
				if ( txt && txt.length>0 ) {
					if ( /^[ 　\r\n\t]+$/.test(txt) ) {
						return false;
					} else {
						return true;
					}
				}
			}
		],
		chkretype: [
//			"入力内容が異なります",
			"You has wrong words",
			function(txt, t) {
				var elm = $("#" + $(t).attr("class").split("retype\-")[1].split(/\b/)[0]);
				if ( elm.hasClass("chkgroup") ) {
					var chktxt = $("input", elm), txt = $("input", t);
					for ( var i = 0, flag = false; i < chktxt.length; i++ ) {
						if ( chktxt[i].value === txt[i].value ) flag = true;
						else flag = false;
					}
					if ( flag ) return true;
				} else {
					return elm.val() == txt;
				}
			}
		],
		chkemail: [
//			"正しいメールアドレスの形式を入力してください",
			"Not valid Email address",
//			/^(?:[^\@]+?@[A-Za-z0-9_\.\-]+\.+[A-Za-z\.\-\_]+)*$/
			/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/
		],
		chkhankaku: [
//			"全角文字は使用できません",
			"Multibytes characters are not allowed",
			/^(?:[a-zA-Z0-9@\;\:\[\]\{\}\|\^\=\/\!\*\`\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]*)*$/
		], //"
		chkzenkaku: [
//			"全角文字で入力してください",
			"Using only multibytes characters",
			/^(?:[^a-zA-Z0-9@\;\:\[\]\{\}\|\^\=\/\!\*\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]+)*$/
		], //"
		chkhiragana: [
//			"ひらがなで入力してください",
			"Using only HIRAGANA",
			/^(?:[あ-んー～]+)*$/
		],
		chkkatakana: [
//			"カタカナで入力してください",
			"Using only KATAKANA",
			/^(?:[ア-ンー～]+)*$/
		],
		chkfurigana: [
//			"ふりがなはひらがな、全角数字と〜、ー、（）が利用できます",
			"Using only HIRAGANA, multibytes numeral, 〜, ー and（）",
			/^(?:[あ-ん０-９ー～（）\(\)\d 　]+)*$/
		],
		chknochar: [
//			"英数字で入力してください",
			"Using only alphanumeric",
			/^(?:[a-zA-Z0-9]+)*$/
		],
		chknocaps: [
//			"英数字(小文字のみ)で入力してください",
			"Using only lower-case alphanumeric",
			/^(?:[a-z0-9]+)*$/
		],
		chknumonly: [
//			"半角数字のみで入力してください",
			"Using only numeral",
			/^(?:[0-9]+)*$/
		],
		chkmin: [
//			"文字以上で入力してください",
			"is minimum length",
			function(txt, t) {
				if ( txt.length==0 ) return true;
			 	var length = $(t).attr("class").match(/min(\d+)/) ? RegExp.$1 : null;
				return txt.length >= length;
			}
		],
		chkmax: [
//			"文字以内で入力してください",
			"is maximum length",
			function(txt, t) {
				var length = $(t).attr("class").match(/max(\d+)/) ? RegExp.$1 : null;
				return txt.length <= length;
			}
		],
		chkradio: [
//			"選択してください",
			"Please choose",
			function(txt, t) {
				return $("input:checked",t).length>0;
			}
		],
		chkcheckbox: [
//			"選択してください",
			"Please choose",
			function(txt, t) {
				return $("input:checked",t).length>0;
			}
		],
		chkurl: [
//			"正しいURLの形式を入力してください",
			"Not valid URL",
//			/^(?:http(s)?\:\/\/[^\/]*)*$/
			/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/
		],
		chktel: [
//			"正しい電話番号を入力してください",
			"Not valid telephone number",
			/^(?:\(?\d+\)?\-?\d+\-?\d+)*$/
		],
		chkfax: [
//			"正しいファックス番号を入力してください",
			"Not valid fax number",
			/^(?:\(?\d+\)?\-?\d+\-?\d+)*$/
		]
	});
})(jQuery);