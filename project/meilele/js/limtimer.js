var L_time=$("#Lv_timer span");

var T_Snum=Number(L_time.eq(3).html());

var T_Mnum=Number(L_time.eq(2).html());

function L_timef() {
	T_Snum--;
	if (T_Snum<0) {

		T_Mnum--;

		L_time.eq(2).html(T_Mnum);

		T_Snum=59;
	}
	if (T_Snum<10) {
		var T_str="0"+T_Snum;
		L_time.eq(3).html(T_str);
	}
	else{
		L_time.eq(3).html(T_Snum);
	}	
}

var timer=setInterval(L_timef,1000)