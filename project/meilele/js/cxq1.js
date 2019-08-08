function ch_lunfun(a,b,c){


	var view=$(a).eq(c);
	var imgs=view.children().eq(0).children();
	var btn=view.children().eq(1);
	var btns=btn.children();

	imgs.eq(0).css({
		left:0
	})
	btns.eq(0).css({
	backgroundColor:"#b74f6f"
				})
	var x=0;
	var count=0;
	


	btns.mouseover(function(){
			
			var index=$(this).index();
			if(index>x){

				// 把即将显示的图片定位到view右侧
				imgs.eq(index).css({
					left:b
				})
				btns.eq(index).css({
					backgroundColor:"#b74f6f"
				})
				btns.eq(x).css({
					backgroundColor:"#3a3a3a"
				})
				// 即将显示的和当前显示的一起往左移动
				
				imgs.eq(x).stop(true,true).animate({left:-b},500)
				

				imgs.eq(index).stop(true,true).animate({left:0},500)

				x=index;

			}else if(index<x){

				// 把即将显示的图片定位到view左侧
				imgs.eq(index).css({
					left:-b
				})
				btns.eq(index).css({
					backgroundColor:"#b74f6f"
				})
				btns.eq(x).css({
					backgroundColor:"#3a3a3a"
				})
				// 即将显示的和当前显示的一起往右移动
				
				imgs.eq(x).stop(true,true).animate({left:b},500)
				
				imgs.eq(index).stop(true,true).animate({left:0},500)
				
				x=index;

			}
			
		
	})

	//下一页
	var ass=function(){
				
				count=x;
				
				if(x<imgs.length-1){
					x++
				}
				else{
					x=0
				}	

				imgs.eq(x).css({
					left:b
				})	

				imgs.eq(count).stop(true,true).animate({left:-b},500)
				btns.eq(count).css({
					backgroundColor:"#3a3a3a"
				})
				
				imgs.eq(x).stop(true,true).animate({left:0},500)
				btns.eq(x).css({
					backgroundColor:"#b74f6f"
				})
			count=x;
	}

	var timer=setInterval(ass,5000);
	btn.mouseover(function(){

		clearInterval(timer);

	})

	btn.mouseout(function(){

		timer=setInterval(ass,5000);
		
	})




}