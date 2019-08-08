//中间导航栏

//导航栏初始化 
;(function(){
$("<li></li>").html("<span>全部</span>").appendTo($('.j_conMid'));
$('li span').css({
    color: "white",
    backgroundColor: "red"
})

//循环插入导航栏内容
for (var i = 0; i < 6; i++) {
    $("<li><a></a></li>").css({
        padding: "0 10px"
    }).appendTo($('.j_conMid'));
};
var arr0 = ["卧室", "客厅", "餐厅", "书房", "儿童房", "我参与的"];
$('.j_conMid').find('a').each(function (i) {
    $(this).html(arr0[i]).mouseover(function () {
        $(this).css({
            color: "white",
            backgroundColor: "red"
        });

    }).mouseout(function () {
        $(this).css({
            color: "#444444",
            backgroundColor: "#fafafa"
        });
    })
});
//鼠标经过导航栏，控制隐藏栏隐藏显示
var x = 0;
$('.j_conMid').find('li').each(function(){
    $(this).mouseenter(function () {
    $(".num").eq(x).hide();
    var index = $(this).index();
    $('.num').eq(index).show();
    x = index;
}).mouseleave(function () {
    $('.num').eq(x).hide();
})
})
//隐藏栏出现后 控制显示隐藏
$('.num').each(function () {
    $(this).mouseenter(function () {
        $(this).show();
    }).mouseleave(function () {
        $(this).hide();
    });
})
//鼠标经过隐藏栏字体颜色发生变化
$('.num a').each(function () {
    $(this).mouseover(function () {
        $(this).css({
            color: "red"
        })
    }).mouseout(function () {
        $(this).css({
            color: "#444444"
        })
    })
});



//瀑布流
var waterFall = document.getElementsByClassName('j_waterFall')[0];
console.log(waterFall);
var arr = [];
for (var i = 0; i < 4; i++) {
    arr.push({
        h: 0,
        col: i
    })
}
for (var i = 0; i < data["oldNests"].length; i++) {
    arr.sort(function (a, b) {
        if (a.h > b.h) {
            return 1;
        } else {
            return -1;
        }
    });
    //创建容器
    var j_waterFall_box = document.createElement('div');
    j_waterFall_box.className = "j_waterFall_box";

    //创建图片div
    var j_waterFall_img = document.createElement('div');
    j_waterFall_img.className = "j_waterFall_img";
    //创建图片标签
    var j_img1 = document.createElement('img');
    j_img1.setAttribute("data-original", imgUrl);
    //获取图片的高
    var url = data["oldNests"][i]["cover_img_url"];
    var patt = /small\/[\d]{2,4}/;
    var H = patt.exec(url)[0];
    //获取图片路径
    var imgUrl = "http:" + url;
    //设置图片高度并插入主容器
    j_img1.style.height = Number(H.split("/")[1]) + "px";
    j_waterFall_img.appendChild(j_img1);
    j_waterFall_box.appendChild(j_waterFall_img);
    //创建插入图片数量标签
    var j_imgNum = document.createElement('span');
    //获取并设置图片数量
    var imgNum = data["oldNests"][i]["img_nums"];
    j_imgNum.innerHTML = imgNum + "张";
    j_waterFall_img.appendChild(j_imgNum);

    //创建插入图片详情标签
    var j_imgMsg = document.createElement('a');
    j_imgMsg.innerHTML = "查看图片详情";
    j_imgMsg.title = data["oldNests"][i]["h_goods_name"]
    j_imgMsg.href = "Seedetails.html";//插入跳转链接
    j_waterFall_img.appendChild(j_imgMsg);


    //创建评论div
    var j_comment = document.createElement('div');
    j_comment.className = "j_comment";

    //创建用户头像img标签
    var j_userImg = document.createElement('img');
    //获取并设置头像路径
    var userUrl = data["oldNests"][i]["h_user_avatar"];
    var userUrl = "http://image.meilele.com/" + userUrl;
    j_userImg.src = userUrl;
    //插入评论div
    j_comment.appendChild(j_userImg);
    //插入容器
    j_waterFall_box.appendChild(j_comment)


    //创建评论内容div之后插入j_comment中
    var j_comment_num = document.createElement('div');
    j_comment_num.className = "j_comment_num";
    //创建用户ID
    var j_userID = document.createElement('span');
    j_userID.innerHTML = data["oldNests"][i]["user_name"];
    j_comment_num.appendChild(j_userID);
    //点赞数量
    var j_userLike = document.createElement('a');
    j_userLike.innerHTML = data["oldNests"][i]["love_count"]
        ;
    j_comment_num.appendChild(j_userLike);
    //评论内容
    var j_comment_txt = document.createElement('div');
    j_comment_txt.className = "j_comment_txt"
    j_comment_txt.innerHTML = data["oldNests"][i]["content"];
    j_comment_num.appendChild(j_comment_txt);

    //插入主容器
    j_comment.appendChild(j_comment_num);
  

    //设置容器left，top值
    j_waterFall_box.style.left = (arr[0].col) * 305 + "px";
    j_waterFall_box.style.top = arr[0].h + "px";
    waterFall.appendChild(j_waterFall_box);
    //获取容器的高度
    function getStyle(el) {
        if (el.currentStyle) {
            return el.currentStyle;
        } else {
            return getComputedStyle(el, null);
        }
    };
    var res = parseInt(getStyle(j_waterFall_box).height);
    // j_waterFall_box.style.height=res+"px";
    arr[0].h += res + 20
};
  //底部评论框的隐藏与显示
    // $('.j_com_a').each(function () {
    //     $(this).click(function () {
    //         $(this).parent().find('.j_comment_area').show();
    //     })
    // })
//设置瀑布流区域高度
arr.sort(function (a, b) {
    if (a.h > b.h) {
        return 1;
    } else {
        return -1;
    }
});
waterFall.style.height = arr[arr.length - 1].h + "px";
//图片懒加载
$('img').lazyload({
    // threshold:-100,
    effect: "fadeIn"
});
//点赞字数限定
$('.j_comment_num').find('a').each(function () {
    var JW = $(this).html();
    var JF = 0
    $(this).click(function () {
        JF++;
        if (JF <= 1) {
            $(this).css({
                backgroundImage: "url(images/j_like.png)",
                backgroundPosition: "-2px center",
                backgroundRepeat: "no-repeat",
                color: "red"
            }).html(++JW)
        } else {
            alert("您今天已经喜欢过了~~~")
            $(this).click(function () {
                return false;
            })
        }
    })
});


//底部分页
var j_botPages = document.getElementsByClassName('j_botPages')[0]
var content = j_botPages.children[0];
var next = document.getElementsByClassName('j_next')[0];

var page = 1;//当前是第几页
var total = 165;//一共多少页
var num = 7;//显示几个页码

function render() {
    var html = ""
    if (page <= (num + 1) / 2) {
        for (var i = 1; i <= num - 2; i++) {
            if (i == page) {
                html += "<a href=''  class='num' style='background:red'>" + i + "</a>"
            } else {
                html += "<a href=''  class='num'>" + i + "</a>"
            }
        }
        html += "<a href='' >...</a>"
        html += "<a href=''  class='num'>" + total + "</a>"
    }
    if (page > (num + 1) / 2 && page <= total - (num + 1) / 2) {
        html += "<a href=''  class='num'>1</a>"
        html += "<a href='' >...</a>"
        for (var i = page - (num - 5) / 2; i <= page + (num - 5) / 2; i++) {
            if (i == page) {
                html += "<a href=''  class='num' style='background:red,color:white'>" + i + "</a>"
            } else {
                html += "<a href=''  class='num'>" + i + "</a>"
            }
        }
        html += "<a href='' >...</a>"
        html += "<a href=''  class='num'>" + total + "</a>"
    }
    if (page > total - (num + 1) / 2) {
        html += "<a href='' class='num'>1</a>"
        html += "<a href='' >...</a>"
        for (var i = total - (num + 1) / 2; i <= total; i++) {
            if (i == page) {
                html += "<a href=''  class='num' style='background:red'>" + i + "</a>"
            } else {
                html += "<a href=''  class='num'>" + i + "</a>"
            }
        }
    }
    content.innerHTML = html
}
render();
next.onclick = function () {
    page++;
    render();
}
content.onclick = function (e) {
    if (e.target.className == "num") {
        page = parseInt(e.target.innerHTML);
        render();
    }
}
})()


