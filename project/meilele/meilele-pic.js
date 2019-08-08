$('#wj-p2').hover(function () {
    $('#wj-span2').css({ display: "none" })
})
$('#wj-p2').mouseleave(function () {
    $('#wj-span2').css({ display: "block" })
})
$('.wj-more img:even').css({
    float: 'left'
})
$('.wj-more img:odd').css({
    float: 'right'
});



var wjarr = ['image/1.jpg', 'image/2.jpg', 'image/3.jpg', 'image/4.jpg', 'image/5.jpg', 'image/6.jpg', 'image/7.jpg', 'image/8.jpg', 'image/9.jpg', 'image/10.jpg', 'image/11.jpg', 'image/12.jpg', 'image/13.jpg', 'image/14.jpg', 'image/15.jpg', 'image/16.jpg', 'image/17.jpg', 'image/18.jpg', 'image/19.jpg', 'image/20.jpg', 'image/21.jpg', 'image/22.jpg', 'image/23.jpg', 'image/24.jpg', 'image/25.jpg'];

// 点击切换页面
var wjx = 0;

$('.wj-btnnext').click(function () {
    wjx++;
    if (wjx >= wjarr.length) {
        wjx = wjarr.length;
    }
    $('.wj-footer ul').animate({
        marginLeft: (-wjx + 2) * 70
    })
    $('.wj-img').attr('src', wjarr[wjx])
    $('.wj-footer ul li img').css({
        borderWidth: '',
        borderStyle: '',
        borderColor: ''
    })
    $('.wj-footer ul li img').eq(wjx).css({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'red'

    })

})
$('.wj-btnpre').click(function () {
    wjx--;
    if (wjx < 0) {
        wjx = 0
    }
    $('.wj-footer ul').animate({
        marginLeft: (-wjx + 2) * 70
    })
    $('.wj-img').attr('src', wjarr[wjx])
    $('.wj-img').attr('src', wjarr[wjx])
    $('.wj-footer ul li img').css({
        borderWidth: '',
        borderStyle: '',
        borderColor: ''
    })
    $('.wj-footer ul li img').eq(wjx).css({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'red'

    })
})

// 处理底部的分页效果

// 拿到数组wjarr里面的每一个图片路径
$(wjarr).each(function () {
    $('.wj-footer ul').append('<li><img src=' + $(this)[0] + '><div id="wjspans">8</div></li>')
    // console.log(String($(this)[0]));
})
$('.wj-footer ul li img').eq(0).css({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'red'

})
// 在小图片里添加进< 和 >
var wjfooterulli = $('.wj-footer ul').children()
wjfooterulli.eq(0).after($('<div class="wj-div"><li class="wjli-sq"><span><</span></li><li><img src="image/timg23.jpg"><div id="wjspans">8</div></li><li><img src="image/ti15mg.jpg"><div id="wjspans">8</div></li><li><img src="image/tim2g.jpg"><div id="wjspans">8</div></li><li><img src="image/tim12g.jpg"><div id="wjspans">4</div></li><li class="wjli-sn"><span>></span></li></div>'))
// 事件委托找到点击的每一个底部小图片
var wjtable = $('.wj-footer')
wjtable.on('click', 'ul>li', function () {
    var wjindex = $(this).index();
    var wjimgsrc = $(this).children().attr('src')
    wjx = wjindex;
    if(wjindex<=wjarr.length-3){
    $('.wj-footer ul').animate({
        marginLeft: (-wjindex + 2) * 75

    })
    }else{
        $('.wj-footer ul').animate({
        marginRight:wjindex+50

    })
    }
    // 每次点击当前的这个小图片 后面会生成四张小图
    $('.wj-footer ul li:has(span)').remove();
    $('.wj-div').remove();

    $(this).after($('<div class="wj-div"><li class="wjli-sq"><span><</span></li><li><img src="image/timg23.jpg"><div id="wjspans">8</div></li><li><img src="image/ti15mg.jpg"><div id="wjspans">8</div></li><li><img src="image/tim2g.jpg"><div id="wjspans">8</div></li><li><img src="image/tim12g.jpg"><div id="wjspans">4</div></li><li class="wjli-sn"><span>></span></li></div>'))

    // $('.wj-footer ul li:has(span)').eq(0).click(
    //     function () {
    //         console.log('123');

    $('.wj-img').attr('src', wjimgsrc)
})
// 小图<点击事件`
var wjxx = 1;
var wjdivSrc;
    $(document).on('click','.wjli-sq',function () {
        wjxx--
        if(wjxx<1){
            wjxx=4
        }
        $('.wj-div').children().css({
                borderWidth: '',
                borderStyle: '',
                borderColor: '',
        })
        $('.wj-div').children().eq(wjxx).css({
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'red',
        });
      wjdivSrc = $('.wj-div').children().eq(wjxx).children().attr('src');
      $('.wj-img').attr('src',wjdivSrc)
    //   console.log(wjdivSrc);

    })
// 小图>点击事件`
    $(document).on('click','.wjli-sn',function () {
        wjxx++
        if(wjxx>4){
            wjxx=1
        }
        $('.wj-div').children().css({
                borderWidth: '',
                borderStyle: '',
                borderColor: '',
        })
        $('.wj-div').children().eq(wjxx).css({
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'red',
        });
     wjdivSrc = $('.wj-div').children().eq(wjxx).children().attr('src')
    //   console.log(wjdivSrc);
      
    $('.wj-img').attr('src',wjdivSrc)
    })
    // 点击新增的图片时:

    $(document).on('click','.wj-div img',function () {
        $('.wj-img').attr('src',$(this).attr('src'));
        $('.wj-div').children().css({
                borderWidth: '',
                borderStyle: '',
                borderColor: '',
        })
        $(this).parent().css({
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'red',
        });
      })






// 选中取消其它变色 选中的加边框
$('.wj-footer ul li img').css({
    borderWidth: '',
    borderStyle: '',
    borderColor: ''
})
$(this).children().eq(0).css({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'red'
})