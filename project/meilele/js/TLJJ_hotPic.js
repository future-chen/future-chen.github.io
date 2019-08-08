var rank_list=$(".rank_list").children();
var ht_imgs=$(".rank_list li>a");
var ht_box=$(".Lb_view");
var ht_div=$(".rank_list li>div");
var ht_star=$(".rank_list li>div>p");
var ht_num=$(".rank_list li>div>span");

//初始第一张图片
ht_imgs.eq(0).css({
	display:"block"
})
ht_div.eq(0).children().css({
	fontSize:14
})
//背景图初始设置
var bgnum=0;
ht_box.each(function(i){
	$(this).css({
		backgroundPosition:"-122px -"+bgnum+"px"
	})
	bgnum+=61;
})
ht_box.eq(5).css({
	backgroundPosition:"-122px -"+304+"px"
})
ht_box.eq(6).css({
	backgroundPosition:"-122px -"+363+"px"
})

//星星
ht_star.each(function(i){
	$(this).css({
		backgroundPosition:"-122px -"+420+"px"
	})
})
//初始切换背景图
ht_box.eq(0).css({
	backgroundPosition:"-122px -"+22+"px",
	width:33,
	height:35
})
ht_num.eq(0).css({
	left:43
})

ht_div.eq(0).css({
	marginTop:27
})
rank_list.eq(0).css({
	paddingBottom:17,
	borderBottom:"1px solid #ebebeb"
})
//给li添加事件
var Lindex=0;
rank_list.each(function(i){
	$(this).mouseover(function(){
		rank_list.eq(Lindex).css({
			paddingBottom:0,
			borderBottom:"none"
		}).children("a").css({
			display:"none"
		}).siblings("div").css({
			marginTop:0
		}).children("div").css({
			backgroundPosition:"-122px -"+Lindex*61+"px",
			width:22,
			height:22
		}).siblings("span").css({
			left:32
		}).siblings("a").css({
			fontSize:12
		})

		if(Lindex==5){
			ht_box.eq(5).css({
				backgroundPosition:"-122px -"+304+"px"
			})
		}
		if(Lindex==6){
			ht_box.eq(6).css({
				backgroundPosition:"-122px -"+363+"px"
			})
		}

		$(this).css({
			paddingBottom:17,
			borderBottom:"1px solid #ebebeb"
		}).children("a").css({
			display:"block"
		}).siblings("div").css({
			marginTop:27
		}).children("div").css({
			backgroundPosition:"-122px -"+(22+(i*61))+"px",
			width:33,
			height:35
		}).siblings("span").css({
			left:43
		}).siblings("a").css({
			fontSize:14
		})

		if (i==6) {
			ht_box.eq(i).css({
				backgroundPosition:"-122px -"+385+"px"
			})
		}

		Lindex=i;

	})
})