$("footer").html($("footer").html().replace(/Built with(.)*/, ' '))
$(".ethical-sidebar").hide()


$('.rst-current-version').addClass('shift-up').removeAttr('data-toggle').hide()
$('.rst-other-versions').css("display", "block")

$('.wy-side-nav-search input[type=text]').removeAttr('placeholder').attr('placeholder', '搜索')
