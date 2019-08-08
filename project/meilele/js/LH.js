// tap 切换
var i;
$(".LH_daogou ul").mouseover(function () {

    i = $(this).index();//添加下标
    $(this).removeClass("LH_daogou_texiao")

    $(this).addClass("LH_daogou_texiao")
    $("#LH_hehe .LH_daogou_xq").eq(i).show().mouseenter(function(){
        $(this).show();
    });
})

$(".LH_daogou ul").mouseout(function () {
    $(this).removeClass("LH_daogou_texiao")
    $("#LH_hehe .LH_daogou_xq").eq(i).hide().mouseleave(function(){
        $(this).hide();
    });
})




// 获取轮播图的点点
var imgs = $(".LH_imgs").children();
var len = imgs.length;
var index = 0;
var box = $("#box");

for (var i = 0; i < imgs.length; i++) {
    $("<li></li>").appendTo($(".LH_lis"))
}

var lis = $(".LH_lis").children();

//  给第一个li添加一个背景色
$(".LH_lis li").eq(0).addClass("active");
$("#box").eq(0).addClass("box");

// 第一张显示
$(imgs[index]).fadeIn(1000);

function play() {
    $(lis).removeClass("active")
    if (index >= 0 & index < len - 1) {
        $(imgs[index]).fadeOut(1500);
        index++;
        $(imgs[index]).fadeIn(1500);
        $(lis[index]).addClass("active");
    } else {
        $(imgs[index]).fadeOut(1500);
        index = 0;
        $(imgs[index]).fadeIn(1500);
        $(lis[index]).addClass("active");
    };
}
// 自动播放
setInterval(play,5000);

  //小圆点
  $(".LH_lis li").mouseover(function () {
        var num = $(this).index();
        $(lis).removeClass("active");
        $(lis[num]).addClass("active");
        $(imgs).fadeOut(1500);
        $(imgs[num]).fadeIn(1500);
        index = num;
    })

    // ______________________________________________________
    // tab2

    var btn = $(".LH_ding_right li");
    var content = $(".LH_baoguo");

    var olo = 0;
    btn.eq(olo).addClass("LH_pogong");
    function tab2(){
        olo = $(this).index();
        $(this).removeClass("LH_pogong");
        content.eq(olo).removeClass("LH_daxian")

        $(this).addClass("LH_pogong").siblings().removeClass("LH_pogong");

        content.eq(olo).addClass("LH_daxian").siblings().removeClass("LH_daxian")

    }

    btn.mouseover(tab2)

   var centre1 =  $(".LH_jingxuan_centre a");
   var lis = $(".LH_jingxuan_centre_dian");
   var leftX =  $(".LH_left_x");
   var rightX = $(".LH_right_x");
    //轮播商品 
    function lunbo( centre1,lis,leftX,rightX){
        var divs = centre1;
        var str = 0;
        var leng = divs.length;
        var index2 = 0;
      
    
       
        for (var i = 0; i < divs.length; i++) {
            $("<li></li>").appendTo(lis)
        }

        var dots = lis.children();
  

        $(dots[index2]).addClass("active");
        
        // 自动播放函数
        function auto(){
            $(divs[index2]).fadeIn(1000);

            function ply(){
                $(dots).removeClass("active");
                if (index2 >= 0 & index2 < leng - 1) {
                    $(divs[index2]).fadeOut(1500);
                    index2++;
                    $(divs[index2]).fadeIn(1500);
                    $(dots[index2]).addClass("active");
                } else {
                    $(divs[index2]).fadeOut(1500);
                    index2 = 0;
                    $(divs[index2]).fadeIn(1500);
                    $(dots[index2]).addClass("active");
                };
                str = index2;
            }
            setInterval(ply, 4000);
        }
        // 
        auto();

        //点击左侧按钮的函数
        leftX.click(function () {
            $(dots).removeClass("active");
            if (str == 0) {
                $(divs[str]).fadeOut(1500);
                str = leng - 1;
                $(divs[str]).fadeIn(1500);
                $(dots[str]).addClass("active");
                index2 = str;

            } else {
                $(divs[str]).fadeOut(1500);
                str--;
                $(divs[str]).fadeIn(1500);
                $(dots[str]).addClass("active");
                index2 = str;
            }
        });
        //点击右侧按钮的函数
        rightX.click(function () {
            $(dots).removeClass("active");
            if (str == leng - 1) {
                $(divs[str]).fadeOut(1500);
                str = 0;
                $(divs[str]).fadeIn(1500);
                $(dots[str]).addClass("active");
                index2 = str;
            } else {
                $(divs[str]).fadeOut(1500);
                str++;
                $(divs[str]).fadeIn(1500);
                $(dots[str]).addClass("active");
                index2 = str;
            }
        })

         //小圆点
            dots.mouseover(function () {
            var num2 = $(this).index();
            $(dots).removeClass("active");
            $(dots[num2]).addClass("active");
            $(divs).fadeOut(1500);
            $(divs[num2]).fadeIn(1500);
            index2 = num2;
        })
    }

    lunbo(centre1,lis,leftX,rightX);

    var centre122 =  $(".LH_jingxuan_centre22 a");
   var lis22 = $(".LH_jingxuan_centre_dian22");
   var leftX22 =  $(".LH_left_x22");
   var rightX22 = $(".LH_right_x22");
   lunbo(centre122,lis22,leftX22,rightX22);
    // 1
   var centre133 =  $(".LH_jingxuan_centre33 a");
   var lis33 = $(".LH_jingxuan_centre_dian33");
   var leftX33 =  $(".LH_left_x33");
   var rightX33 = $(".LH_right_x33");
   lunbo(centre133,lis33,leftX33,rightX33);
//    2
var centre144 =  $(".LH_jingxuan_centre44 a");
   var lis44 = $(".LH_jingxuan_centre_dian44");
   var leftX44 =  $(".LH_left_x44");
   var rightX44 = $(".LH_right_x44");
   lunbo(centre144,lis44,leftX44,rightX44);
//    3
var centre155 =  $(".LH_jingxuan_centre55 a");
   var lis55 = $(".LH_jingxuan_centre_dian55");
   var leftX55 =  $(".LH_left_x55");
   var rightX55 = $(".LH_right_x55");
   lunbo(centre155,lis55,leftX55,rightX55);
// 4
var centre166 =  $(".LH_jingxuan_centre66 a");
   var lis66 = $(".LH_jingxuan_centre_dian66");
   var leftX66 =  $(".LH_left_x66");
   var rightX66 = $(".LH_right_x266");
   lunbo(centre166,lis66,leftX66,rightX66);



// 固定定位
$(window).scroll(function () {
    var st = $('body,html').scrollTop();
    if (st > 300) {
        $('.LH_gudingyi').show();
    } else {
        $('.LH_gudingyi').hide();
    };
});

$(window).scroll(function () {
    var st = $('body,html').scrollTop();
    if (st > 400) {
        $('.LH_gudinger').show();
    } else {
        $('.LH_gudinger').hide();
    };
});
    




    


