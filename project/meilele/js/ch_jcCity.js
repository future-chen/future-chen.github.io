//调用轮播图方法传入参数；

ch_lunfun(".ch_lun",1000,0)

//传入轮播父元素，偏移量，索引；
//循环调用方法；
for(var i=0;i<$(".ch_floor22").length;i++){
   ch_lunfun(".ch_floor22",200,i)
}
// 判断scrolltop和offsettop的值让页面左侧广告悬停
window.onscroll=function(){
   var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
   if($("#ch_qwe").offset().top<=scrollTop){
   		$("#ch_qwer").css({
   			position:"fixed",
   			top:0
   		})
   }
   else{
   		$("#ch_qwer").css({
   			position:"static"
   		})
   	}
}

 $(".ch_fu").hide().eq(0).show()
 $(".ch_zhu").eq(0).css({
    backgroundColor:"rgb(253,251,239)",
    borderBottom:"none",
 });
 $(".ch_zhu").eq(0).children(".ch_lllll").html("")


    $(".ch_zhu").mouseover(function(){
         $(this).css({
            backgroundColor:"rgb(253,251,239)",
            borderBottom:"none",
         }).children(".ch_lllll").html("")

          $(this).siblings(".ch_zhu").stop(true).css({
             backgroundColor:"white",
             borderBottom:"1px solid #dedede",
         }).children(".ch_lllll").html("￥599")

        $(this).siblings(".ch_zhu").next().stop(true).slideUp();
        $(this).next().stop(true).slideDown()
        
    })
    