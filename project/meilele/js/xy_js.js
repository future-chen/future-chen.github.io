	//焦点获取
	var xy_ipt=document.getElementById("xy_input");

	xy_ipt.onfocus=function(){

		if(xy_ipt.value=="搜索 白蜡木"){

			xy_ipt.value=""
		}

	}
	xy_ipt.onblur=function(){

		if(xy_ipt.value==""){

			xy_ipt.value="搜索 白蜡木"

		}

	}

	//轮播图
	var xy_bannner=$("#xy_banner");
	var xy_imgs=$("#xy_banner_view").children();
	var xy_btn=$("#xy_banner_btn");

	for(var i=0;i<xy_imgs.length;i++){

		$("<button></button>").appendTo(xy_btn)

	}
	
	var xy_btns=xy_btn.children();

	xy_imgs.eq(0).show();
	xy_btns.eq(0).css({background:"#b6874f"});

	var xy_index=0;

		xy_btns.click(function(){

		var index=$(this).index();
	
			xy_imgs.eq(xy_index).fadeOut(1000);
			xy_imgs.eq(index).fadeIn(1000);


			xy_btns.eq(xy_index).css({background:"white"});
			xy_btns.eq(index).css({background:"#b6874f"});

			xy_index=index;
		
		})

		function xy_timer(){
			
				var index=xy_index++;
					if(index==6){
						xy_index=0;
					}

					xy_imgs.eq(index).fadeOut(1000);
					xy_imgs.eq(xy_index).fadeIn(1000);


					xy_btns.eq(index).css({background:"white"});
					xy_btns.eq(xy_index).css({background:"#b6874f"});
					
					index=xy_index;

				};

		var xy_time=setInterval(xy_timer,2000);
		xy_banner.onmouseover=function(){
			clearInterval(xy_time);
		}
		xy_banner.onmouseout=function(){
			xy_time=setInterval(xy_timer,2000)
		}