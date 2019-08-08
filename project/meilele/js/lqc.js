 // 轮播
 lqc_lbk.children[0].style.display="block";
 lqc_xh.children[0].style.background="black"
 var lqck=lqc_xh.children;
 var lqcb=lqc_lbk.children;
 var lqcx=0;
 for(var i=0;i<lqck.length;i++){
     ;(function(i){
         lqck[i].onmouseover=function(){
             lqck[lqcx].style.background="white"
             lqcb[lqcx].style.display="none"
             lqcb[i].style.display="block"
             this.style.background="black"
             lqcx=i;
         }
     })(i)
 }
 // 轮播自动播放
 var lqctime=setInterval(function(){
    
     lqck[lqcx].style.background="white";
     lqcb[lqcx].style.display="none";
     lqcx++;
     lqcx>lqck.length-1?lqcx=0:lqcx;
     lqcb[lqcx].style.display="block";
     lqck[lqcx].style.background="black";

 },1000)
 // 当鼠标放上去的时间停止
 lqc_lunbo.onmouseover=function(){
     clearInterval(lqctime)
 }
 // 当鼠标离开继续
 lqc_lunbo.onmouseout=function(){
    lqctime=setInterval(function(){
    lqck[lqcx].style.background="white";
    lqcb[lqcx].style.display="none";
    lqcx++;
    lqcx>lqck.length-1?lqcx=0:lqcx;
    lqcb[lqcx].style.display="block";
    lqck[lqcx].style.background="black";
 },2000)
 }
// 地图的控制
 var lqcflag=true
 tu.onmousedown=function(){
     lqcflag=true
         lqc_zhe.onmousemove=function(e){
         if(lqcflag){
         var l=e.clientX;
         var t=e.clientY;
         tu.style.left=l+"px";
         tu.style.top=t+"px";
     }
     } 
 }
 tu.onmouseup=function(){
     lqcflag=false
 }
 lqc_btn.onclick=function(){
     lqc_zhe.style.display="none"
 }
 lqcqie.onclick=function(){
     lqc_zhe.style.display="block"
 }
 // 滚动楼层
 var lqc_lou=$("#lqc_two").children()
 var lqc_lt=$("#lqc_louti").children()
 // console.log(lqc_lt)
 var lqc_con=0;
 window.onscroll=function(){
     var lqc_st=document.documentElement.scrollTop;
     var lqc_offsetTop=lqc_pow.offsetTop;    
     // console.log(lqc_offsetTop,lqc_st)
     if(lqc_offsetTop<=lqc_st){
         $("#lqc_louti").fadeIn({display:"block"},1000)
         $("#lqc_xank").slideDown({display:"block"},1000)
     }else{
         $("#lqc_louti").fadeOut({display:"none"},1000)
         $("#lqc_xank").slideUp({display:"none"},1000)
     }
     for(var i=lqc_lou.length-1;i>-1;i--){
         var lqc_loukt=lqc_lou[i].offsetTop;
         if(lqc_loukt<=lqc_st+100&&lqc_con!=i){
             lqc_con=i;
             for(var j=0;j<lqc_lt.length;j++){
             lqc_lt[j].children[0].style.display="none"
             }
             lqc_lt[i].children[0].style.display="block"
         }
         if(lqc_loukt<=lqc_st+100){
             break;
         }
     }
 }
 var lqc_tjl=0
 lqc_lt.click(function(){
     var lqc_jl=$(this).index()
     document.documentElement.scrollTop=lqc_lou[lqc_jl].offsetTop-100,
     lqc_lt[lqc_tjl].children[0].style.display="block",
     lqc_lt[lqc_jl].children[0].style.display="block",
     lqc_tjl=lqc_jl
 })


 for(var i=0;i<lqc_lt.length;i++){
     lqc_lt[i].index=i
     lqc_lt[i].onmouseover=function(){
         if(lqc_tjl!==this.index){
             this.children[0].style.display="block";
         }
     }
     lqc_lt[i].onmouseout=function(){
         if(lqc_tjl!==this.index){
             this.children[0].style.display="none";
         }
     }
 }