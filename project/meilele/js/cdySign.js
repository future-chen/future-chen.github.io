var c_id=$(".cdy_sign_left").find("input");
var c_err=$(".cdy_sign_left").find("#cdy_err").eq(0);
var c_id_pat=/^\w{4,20}$/
var c_id_patnum=/^\d{4,20}$/
var c_id_res=0;
c_id.eq(0).blur(function(){
	if(!c_id_pat.test($(this).val())){
		$(this).next().css({display:"block"})
		$(this).next().html("用户名可使用字母、数字、下划线或其组合，4～20个字符，且不能为纯数字")		
	}else if(c_id_patnum.test($(this).val())){
		$(this).next().css({display:"block"})
		$(this).next().html("用户名可使用字母、数字、下划线或其组合，4～20个字符，且不能为纯数字")
	}else{
		$(this).next().css({display:"none"})
		$(this).css({backgroundColor:""})
		c_id_res=1;
	}
})
var c_word_wei=/^.{6,20}$/
var c_word_abc=/[A-z]/
var c_word_num=/\d/
var c_word_fu=/[~@#$%^&\.]/
var c_word_res=0
c_id.eq(1).blur(function(){
	var c_sum=Number(c_word_wei.test($(this).val()))+Number(c_word_abc.test($(this).val()))+Number(c_word_fu.test($(this).val()))
	if(c_word_wei.test($(this).val())&&c_sum>1){
		console.log(c_sum)
		$(this).next().css({display:"none"})
		$(this).css({backgroundColor:""})
		c_word_res=1
	}else{
		$(this).next().css({display:"block"})
	}
})
var c_word_res2=0;
c_id.eq(2).blur(function(){
	if($(this).val()==c_id.eq(1).val()){
		console.log("密码一致")
		$(this).next().css({display:"none"})
		$(this).css({backgroundColor:""})
		c_word_res2=1;
	}else{
		$(this).next().css({display:"block"})
	}
})
var c_tel=/^1[3-9]\d{9}$/;
var c_tel_res=0
c_id.eq(3).blur(function(){
	if($(this).val()==""){
		$(this).next().css({display:"block"})
		$(this).next().html("请输入手机号")
	}else if(c_tel.test($(this).val())==true){
	$(this).next().css({display:"none"})
	$(this).css({backgroundColor:""})
	c_tel_res=1;
	}else if(c_tel.test($(this).val())==false){
		$(this).next().css({display:"block"})
		$(this).next().html("手机号码有误")
	}
})
var c_yan=0;
c_id.eq(4).blur(function(){
	if($(this).val()==$("#cdy_random").html()){
		$(this).next().css({display:"none"})
		c_yan=1;
	}else{
		$(this).next().css({display:"block"})
		$(this).next().html("验证码有误")
	}
})
$("#cdy_button").click(function(){
	var c_check=cdy_check.checked;
	if(c_id_res&&c_word_res&&c_word_res2&&c_tel_res&&c_yan&&c_check){
		$(".cdy_sign_left").submit()
	}else{
		$(c_id.eq(0)).next().css({display:"block"})
		$(c_id.eq(0)).next().html("请输入正确信息")
	}
})
c_id.each(function(i){
	$(this).focus(function(){
	$(this).css({backgroundColor:"#fdfdf3"})
 })
})
//生成随机数
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