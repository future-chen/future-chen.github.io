//鼠标经过显示提示内容
;(function(){
$('.j_right_box').find('li').each(function () {
    $(this).mouseover(function () {
        $(this).find('.j_right_txt').stop(true, true).fadeIn(300);
    }).mouseout(function () {
        $(this).find('.j_right_txt').stop(true, true).fadeOut(300);
    })
});
//鼠标滚动到一定高度返回顶部按钮出现
$(window).scroll(function () {
    var st = $('body,html').scrollTop();
    if (st > 300) {
        $('.j_right5').css({
            display:"block"
        })
    } else {
        $('.j_right5').hide();
    };
});
//点击返回顶部按钮 返回顶部
$('.j_right5').click(function () {
    $("html,body").animate({
        scrollTop: 0
    })
})
//gif动画切换
var j_gif = $('.j_gif');
var x = 0;
var index=0;
//初始化
j_gif.eq(0).css({
    top:4
});

function autoPlay() {
    j_gif.eq(index).css({
        top:-45
    })
    x++
    if (x > 1) {
        x = 0
    }
    j_gif.eq(x).animate({
        top: 4
    },500);
    index=x;
}
var j_timer=setInterval(autoPlay,3000) ;
//鼠标进入时动画消失
$('.j_right2').mouseover(function(){
    $('.j_gif').hide();
    clearInterval(j_timer);
    $('#j_right_txt').stop(true, true).fadeIn(300);
}).mouseout(function(){
    $('.j_gif').show();
    j_timer=setInterval(autoPlay,3000) ;
    $('#j_right_txt').stop(true, true).fadeOut(300);
})

})()
