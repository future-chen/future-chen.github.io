$("#cdy_num").click(function(){//点击账号登陆切换
	$("#cdy_tel").css({color:"black"})
	$(this).css({color:"red"})
	$(".cdy_err").css({display:"none"})
	$("#cdy_tel02").animate({left:0})
	$("#cdy_tel01").animate({left:-380})
})
$("#cdy_tel").click(function(){//点击手机登录切换
	$(this).css({color:"red"})
	$(".cdy_err").css({display:"none"})
	$("#cdy_num").css({color:"black"})
	$("#cdy_tel01").animate({left:0})
	$("#cdy_tel02").animate({left:380})

})
$("#cdy_app").click(function(){//点击app登录切换
	$(this).css({display:"none"})
	$("#cdy_weixin").css({display:"block"})

	$("#cdy_right_app").animate({left:0})
	$("#cdy_right_weixin").animate({left:-360})
})
$("#cdy_weixin").click(function(){//点击微信登录切换
	$("#cdy_right_weixin").animate({left:0})
	$("#cdy_right_app").animate({left:360})
	$(this).css({display:"none"})
	$("#cdy_app").css({display:"block"})
})
$("#cdy_view").click(function(){//点击返回首页
	$("#cdy_weixin").css({display:"block"})
	$("#cdy_app").css({display:"block"})
	$("#cdy_right01").animate({left:28})
	$("#cdy_right_app").animate({left:360})
	$("#cdy_right_weixin").animate({left:-360})
})

//手机号码登录时的验证操作
var c_x=0;
var c_tel=/^1[3-9]\d{9}$/;
var c_tel_value=$("#c_tel011").val("");
$("#c_tel011").blur(function(){
	if($("#c_tel011").val()==""){
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("请输入手机号")
	}else if(c_tel.test($("#c_tel011").val())==true){
	$("#cdy_check").css({display:"block"})
	$("#cdy_checkbox").css({display:"block"})
	$(".cdy_err").css({display:"none"})
		c_x=1;
	}else if(c_tel.test($("#c_tel011").val())==false){
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("手机号码有误")
	}
})
//图形验证码
var c_yan=0;
$("#cdy_tel014").blur(function(){
	if($(this).val()==$("#cdy_random").html()){
		$(".cdy_err").css({display:"none"})
		c_yan=1;
	}else{
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("验证码错误，请重新填写")
	}
})
//手机验证码验证
var c_tell=0;
$("#cdy_tel012").blur(function(){
	if($(this).val()==123456){
		$(".cdy_err").css({display:"none"})
		c_tell=1
	}else{
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("手机验证码错误，请重新填写")
	}
})
//账号密码登录时的验证操作
var c_z=0;
var c_y=0;
var c_num=/^.{2,12}$/
var c_num_value=$("#cdy_tel02").find("input").eq(0).val("");
$("#cdy_tel02").find("input").eq(0).blur(function(){
	if($("#cdy_tel02").find("input").eq(0).val()==""){
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("请输入账号")
	}else if(!c_num.test($("#cdy_tel02").find("input").eq(0).val())){
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("账号不存在，请重新输入")
	}else if(c_num.test($("#cdy_tel02").find("input").eq(0).val())){
		$(".cdy_err").css({display:"none"})
		c_z=1;
	}
})
//密码登录验证必须为123456
$("#cdy_tel02").find("input").eq(1).blur(function(){
	if($("#cdy_tel02").find("input").eq(1).val()==""){
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("请输入密码")
	}else if($("#cdy_tel02").find("input").eq(1).val()!=123456){
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("密码不正确，请重新输入")
	}else if($("#cdy_tel02").find("input").eq(1).val()==123456){
		$(".cdy_err").css({display:"none"})
		c_p=1;
	}
})

//按钮提交事件
$("#cdy_tel01").find(".cdy_tel_button").click(function(){
	var c_check=cdy_checkboxin.checked;
	if(c_x&&c_check&&c_yan&&c_tell){
		cdy_tel01.submit()
	}else{
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("请输入正确信息")
	}
})
$("#cdy_tel02").find(".cdy_tel_button").click(function(){
	if(c_z&&c_p){
		cdy_tel02.submit()
	}else{
		$(".cdy_err").css({display:"block"})
		$(".cdy_err p").html("请输入正确信息")
	}
	
})
var c_str="abcdefghijklmnopqrstuvwxyz0123456789";
function random(a,b){
	return Math.floor(Math.random()*(b-a)+1)+a;
}
var c_code="";
function c_codeFun(){
	c_code="";
	for(var i=0;i<4;i++){
		c_code+=c_str.charAt(random(0,c_str.length-1))
	}
	cdy_random.innerHTML=c_code
}
c_codeFun();
cdy_change.onclick=c_codeFun;

