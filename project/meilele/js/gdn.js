var ganbtn=document.getElementById('ganlis_2_1').getElementsByTagName('li');
var gancon=document.getElementById('ganlis_2_2').getElementsByTagName('li');
var ganMomali1=document.getElementById('ganMoma_1').getElementsByTagName('li');
var ganMomali2=document.getElementById('ganMoma_2').getElementsByTagName('li');
// ------------------------------------------
var gancount=0;//记录选中索引
for(var i=0;i<ganbtn.length;i++){
    ganbtn[i].index=i;
    ganbtn[i].onclick=function(){
        // 将上个选中的按钮类名清空
        ganbtn[gancount].className="";
        gancon[gancount].className="";
        this.className="ganlis_2_10";
        gancon[this.index].className="ganlis_2_3";
        gancount=this.index;
    }
};
//  tob切换         ----------------------------------------
var gancount_1=0;
for(var z=0;z<ganMomali1.length;z++){
    ganMomali1[z].index=z;
    ganMomali1[z].onclick=function(){
        // 将上个选中的按钮类名清空
        ganMomali1[gancount_1].className="";
        ganMomali2[gancount_1].className="";
        this.className="ganMoma_1_1";
        ganMomali2[this.index].className="ganMoma_2_1";
        gancount_1=this.index;
    }
};
// -------------------------------------------------------
$("#ganMoma_2 nav").on("mouseover",".ganMomaimg",function(){$(this).parents(".ganMomanav").css({bottom:3});
});
$("#ganMoma_2 nav").on("mouseout",".ganMomaimg",function(){$(this).parents(".ganMomanav").css({bottom:""});
});

//  澳洲进口  li标签  ---------------------------------------
var html=``;
for(var i=0;i<32;i++){
    html+=`
    <li>
        <div class="ganGgimg"><img src="images/gan20.jpg" alt=""></div>
        <p class="ganWosip1">澳洲进口真皮沙发</p>
        <p class="ganWosip2">￥6999</p>
        <del class="ganWosip3">7800</del>
        <div class="ganGgdiv">
            <p class="ganGgp"></p>
        </div>
    </li>
    `
}
ganWosiul.innerHTML=html;
//   澳洲进口 ---------------------------------------------
$("#ganWosiul li").on("mouseover",".ganGgimg",function(){$(this).parents("#ganWosiul li").css({bottom:3});
});
$("#ganWosiul li").on("mouseout",".ganGgimg",function(){$(this).parents("#ganWosiul li").css({bottom:0});
});

// 客厅        ---------------------------------------------
var keting="";
for(var j=0;j<30;j++){
    keting+=`
    <li>
            <div class="ganGgimg"><img src="images/gan24.jpg" alt=""></div>
            <p class="ganWosip1">澳洲进口真皮沙发</p>
            <p class="ganWosip2">￥54599</p>
            <del class="ganWosip3">5600</del>
            <div class="ganGgdiv">
                 <p class="ganGgp"></p>
            </div>
    </li>
    `
}
ganKetingul.innerHTML=keting;
//    客厅  ----------------------------------
$("#ganKetingul li").on("mouseover",".ganGgimg",function(){$(this).parents("#ganKetingul li").css({bottom:3});
});
$("#ganKetingul li").on("mouseout",".ganGgimg",function(){$(this).parents("#ganKetingul li").css({bottom:0});
});
// canting  餐厅 ------------------------------------------------
var canting="";
for(var j=0;j<30;j++){
    canting+=`
    <li>
            <div class="ganGgimg"><img src="images/gan28.jpg" alt=""></div>
            <p class="ganWosip1">澳洲进口真皮沙发</p>
            <p class="ganWosip2">￥1234</p>
            <del class="ganWosip3">6600</del>
            <div class="ganGgdiv">
                 <p class="ganGgp"></p>
            </div>
    </li>
    `
}
ganCantingul.innerHTML=canting;
//    can厅  餐厅 --------------------------------------------------
$("#ganCantingul li").on("mouseover",".ganGgimg",function(){$(this).parents("#ganCantingul li").css({bottom:3});
});
$("#ganCantingul li").on("mouseout",".ganGgimg",function(){$(this).parents("#ganCantingul li").css({bottom:0});
});
//  床   -----------------------------------------------
var chuang="";
for(var j=0;j<20;j++){
    chuang+=`
    <li>
            <div class="ganGgimg"><img src="images/gan32.jpg" alt=""></div>
            <p class="ganWosip1">澳洲进口真皮沙发</p>
            <p class="ganWosip2">￥4824</p>
            <del class="ganWosip3">9960</del>
            <div class="ganGgdiv">
                 <p class="ganGgp"></p>
            </div>
    </li>
    `
}
ganChuangul.innerHTML=chuang;
//    床     ------------------------------------------
$("#ganChuangul li").on("mouseover",".ganGgimg",function(){$(this).parents("#ganChuangul li").css({bottom:3});
});
$("#ganChuangul li").on("mouseout",".ganGgimg",function(){$(this).parents("#ganChuangul li").css({bottom:0});
});
// 限时 现价3折   --------------------------------------
var ganXj="";
for(var j=0;j<35;j++){
    ganXj+=`
    <li><img src="images/gan34.jpg" alt="">
            <p class="ganXianjiap1">
                性价比之王 全有品质 纯三角地思想创造
            </p>
            <p class="ganXianjiap2">
                本地站: <del>￥3399</del>
            </p>
            <p class="ganXianjiap3">
                <span>3.8折</span>
                <span>特惠价:</span>
                <span>￥1298.00</span>
            </p>       
        <header class="ganXianjiap4">
                <small>限量89件</small>
                <div>立即抢购</div>
        </header>
        </li>
    `
}
ganXianjiaul.innerHTML=ganXj;
//     灯饰家具  ----------------------------------------
var ganDeng="";
for(var c=0;c<8;c++){
    ganDeng+=`
    <li>
                <img src="images/gan36.jpg" alt="">
                <p class="ganDengship1">现代简约 餐厅吊灯</p>
                <p class="ganDengship2">专享价: <span>￥860.00</span></p>
                <div class="ganDengship3">
                   <p>立即</br>抢购</p>
                </div>
            </li>
    `
}
ganDengshiul.innerHTML=ganDeng;
// 中奖人数   ---------------------------------------
 function gannext(){
    $("#ganChoujiangul").animate({
        marginTop:-40
    },500,function(){

        $("#ganChoujiangul").css({
            marginTop:0
        }),
        $("#ganChoujiangul li:eq(0)").appendTo("#ganChoujiangul")
    
    })
}
setInterval(gannext,2000);
// 楼层滚动   -----------------------------------------
for(var v=0;v<ganLC.children.length;v++){
    ganLC.children[v].index=v;
    ganLC.children[v].onclick=function(){
    document.documentElement.scrollTop=ganLCbox.children[this.index].offsetTop-50;
}
}
// 返回顶部    ------------------------------
$("#ganDingbu").click(function(){
$("body,html").animate({
scrollTop:0
})
})

$("#ganLCli").click(function(){
$("body,html").animate({
scrollTop:0
})
})
// 让楼层出来  ----------------------------------
window.onscroll=function(){
var ganst=document.documentElement.scrollTop;

if(ganst>=800){
    ganLC.style.display="block";
}else{
    ganLC.style.display="none";
}
}
// 点蓝     -----------------------------------
$(document).bind("mousedown",function(e){
    e.preventDefault();
})
// ting
var ganflag=true;
$(".ganChoujiang_103").click(function(){
    if(ganflag){
        ganflag=false     
        $(".ganChoujiang_102").css('animation-play-state', "paused");
    }else{
        $(".ganChoujiang_102").css('animation-play-state', "running");
        ganflag=true
    }
})
// $(".ganChoujiang_103").click(function(){
   
// })
