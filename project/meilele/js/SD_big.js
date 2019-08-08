var L_imgs=$(".L_list img")
var L_list=$(".L_list").children();
var L_bigbox=$("#L_bigbox");
var L_btn=$(".L_btn").children();
var L_cimg=$("#big")
var L_bigbox=$("#L_bigbox")
var L_view02=$(".L_view02")
var L_frames=$("#frames")
var LT_01=$(".LT_01");
var LX_a=$(".LX_a").children();
var Jiawuche01=$(".Jiawuche01")
var Fayqiu=$("#Fayqiu")


var FlyTop=0;

var FlyLeft=138;

var offsy;

var offsx;

var F_flag=false;

var countjs=parseInt(j_right_num.innerHTML);
Jiawuche01.click(function(){
	if(F_flag){
		return 0;
	}
	var L_st=document.body.scrollTop||document.documentElement.scrollTop;

	var FQ_y=window.innerHeight/2+L_st+100;
	var FQ_x=window.innerWidth-100;
	 
	var FQ_ol=Fayqiu[0].offsetLeft;
	var FQ_Pol=Fayqiu[0].parentNode.offsetLeft;

	var FQ_ot=Fayqiu[0].offsetTop;
	var FQ_Pot=Fayqiu[0].parentNode.offsetLeft;

	// offsy=(FQ_ot+FQ_Pot)-FQ_y;
	// offsx=FQ_x-(FQ_Pol+FQ_ol);

	// if (offsy>0) {
	// 	offsy=-offsy;
	// }

	Fayqiu.css({
		display:"block"
	})
	Fayqiu.animate({
		top:-((FQ_ot+FQ_Pot)-FQ_y),
		left:FQ_x-(FQ_Pol+FQ_ol),
		width:21,
		height:21,		
	},1200,function(){
		Fayqiu.css({
			left:138,
			top:0,
			width:42,
			height:42,
			display:"none"
		})
		F_flag=false;
		countjs++;
		j_right_num.innerHTML=countjs;
	})
	F_flag=true;
	// Flyfun();

})

// console.log(Fayqiu.top())
// var Fy_Speedx=10;
// var Fy_Speed=0;
// function Flyfun(){

// 	Fy_Speed+=0.1;

// 	FlyTop-=Fy_Speed;

// 	FlyLeft+=Fy_Speed;

// 	if (FlyTop<=offsy) {
// 		FlyTop=offsy;
// 	}

// 	if (FlyLeft>=offsx) {
// 		FlyLeft=offsx;
// 	}

// 	if (FlyTop<=offsy&&FlyLeft>=offsx) {
// 		return
// 	}
// 	console.log(111)
// 	Fayqiu.animate({
// 		top:FlyTop,
// 		left:FlyLeft
// 	},16.7,Flyfun)	
// }

$("body").css({
	backgroundColor:"#fff"
})

LT_01.each(function(){
	$(this).mouseover(function(){
		$(this).children("p").css({
			color:"#d70c19"
		}).siblings(".Lline").css({
			display:"block"
		}).siblings(".LT_01_tex").css({
			display:"block"
		})
	})
	$(this).mouseout(function(){
		$(this).children("p").css({
			color:"#666"
		}).siblings(".Lline").css({
			display:"none"
		}).siblings(".LT_01_tex").css({
			display:"none"
		})
	})
})


var L_x=0;

L_btn.eq(1).click(function(){	
	L_x++;
	if (L_x>3) {
		L_x=3;
	}
	$(".L_list").css({
		marginLeft:-(5+L_x*96)
	})
		
})
L_btn.eq(0).click(function(){
	L_x--;
	if (L_x<0) {
		L_x=0;
	}
	$(".L_list").css({
		marginLeft:-(5+L_x*96)
	})
		
})

var L_m=0;
var timer;
var L_Lpic="images/seePic/Seelargen/sl01.jpg";
L_list.each(function(i){
	$(this).mouseover(function(){
		timer=setTimeout(function(){
			L_list[L_m].className="";
			L_list[i].className="L_box";
			L_cimg[0].src="images/seePic/Seebig/sb0"+(i+1)+".jpg";
			L_Lpic="images/seePic/Seelargen/sl0"+(i+1)+".jpg";
			console.log(L_cimg[0].src)
			L_m=i;
		},300)
			
	})
	$(this).mouseout(function(){
		clearTimeout(timer)
	})
})

L_view02.mouseover(function(){

	L_bigbox.css({
		display:"block"
	})
	L_bigbox.children("img")[0].src=L_Lpic;
	L_frames.css({
		display:"block"
	})

})
L_view02.mouseout(function(){
	L_bigbox.css({
		display:"none"
	})
	L_frames.css({
		display:"none"
	})
})
L_view02[0].onmousemove=function(e){
	var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;

	var x=e.clientX-this.parentNode.offsetLeft;

	var y=e.clientY+scrolltop-this.parentNode.offsetTop;

	if (x<400/2/2.18-2) {
		x=400/2/2.18-2;
	}
	if(x>470-400/2/2.18-8){
		x=470-400/2/2.18-8;
	}
	if(y<400/2/2.18+6){
		y=400/2/2.18+6;
	}
	
	var height=Number(getComputedStyle(L_cimg[0],null).height.split('px')[0]);

	if(y>height-400/2/2.18){
		y=height-400/2/2.18;
	}

	L_bigbox.children("img")[0].style.left=-x*2.18+200+"px";
	L_bigbox.children("img")[0].style.top=-y*2.18+200 +"px";

	L_frames[0].style.left=x-90+"px";
	L_frames[0].style.top=y-98+"px";
}

var curlxa=0;

LX_a.each(function(i){
	$(this).click(function(){
		LX_a.eq(curlxa).css({
			color:"#666666",
			border:"1px solid #ddd"
		})
		$(this).css({
			color:"#d70c19",
			border:"1px solid #d70c19"
		})

		curlxa=i;
	})
})