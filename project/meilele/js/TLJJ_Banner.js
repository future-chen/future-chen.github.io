//找到轮播图组件
var LLB_list=$(".LLB_list");
var LLB_li=$(".LLB_list li");
var LLB_img=LLB_list.children().children();
var LLB_btns=$("#LLB_btn").children();
console.log(LLB_img)
//初始化轮播图
var Lx=0;
var flag=false;
LLB_li.eq(Lx).css({
	display:"block"
})
LLB_btns.eq(Lx).css({
	backgroundColor:"#c9033b"
})
//底部原点经过事件
LLB_btns.mouseover(function(){
	clearInterval(timer);

	LLB_btns.eq(Lx).css({
		backgroundColor:"white"
	})

	
	LLB_li.eq(Lx).stop().fadeOut(500);
	

	var Lindex=$(this).index();

	LLB_btns.eq(Lindex).css({
		backgroundColor:"#c9033b"
	})

	LLB_li.eq(Lindex).fadeIn(500)
	
	Lx=Lindex;
	flag=true;
})
//鼠标离开事件
LLB_btns.mouseout(function(){

	// LLB_li.eq(x).stop(true,true).fadeIn(1000)

	timer=setInterval(LLB_fun,2000);

})

function LLB_fun(){
	clearInterval(timer);
	var curx=Lx;
	LLB_btns.eq(curx).css({
		backgroundColor:"white"
	})
	Lx++;
	if(Lx>LLB_img.length-1){
		Lx=0;
	}
	LLB_btns.eq(Lx).css({
		backgroundColor:"#c9033b"
	})
	LLB_li.eq(curx).fadeOut(1500);	
	LLB_li.eq(Lx).fadeIn(1500,function(){
		timer=setInterval(LLB_fun,2000)
	});
	
}

var timer=setInterval(LLB_fun,2000)