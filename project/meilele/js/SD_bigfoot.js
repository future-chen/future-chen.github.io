var Lv_change=document.getElementById('Lv_change')
var Lv_select=document.getElementById('Lv_select')
var Lv_sure=Lv_select.getElementsByTagName('p')[0];
var Lv_no=Lv_select.getElementsByTagName('span')[0];

Lv_change.onclick=function(){
	Lv_select.style.display="block"
}
Lv_no.onclick=function(){
	Lv_select.style.display="none"
}

Lv_sure.onclick=function(){
	var adressStr="";
	adressStr=pro.value+city.value+reg.value;
	Lv_change.innerHTML=adressStr;
	Lv_select.style.display="none";
	Smany.style.display="inline-block";
}

var Sl_a=$(".Sl_a").children("a");
var Sl_atext=$(".Sl_a").children("span");
var Sl_anum=Number(Sl_atext.html());

Sl_a.eq(0).click(function(){
	Sl_anum--;
	if (Sl_anum<1) {
		Sl_anum=1;
	}
	Sl_atext.html(Sl_anum);
})
Sl_a.eq(1).click(function(){
	Sl_anum++;
	if (Sl_anum>99) {
		Sl_anum=99;
	}
	Sl_atext.html(Sl_anum);
})