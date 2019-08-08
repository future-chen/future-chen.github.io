var pro=document.getElementById('pro');
	var city=document.getElementById('city');
	var reg=document.getElementById('reg');
	var str=document.getElementById('str');
	//获取省份
	for(var x in area){
		var node=document.createElement('option');
		node.innerHTML=x;
		pro.appendChild(node)
	}
	//获取城市
	for(var x in area[pro.value][0]){
		var node=document.createElement('option');
		node.innerHTML=x;
		city.appendChild(node)
	}
	//获取区
	for(var i=0;i<area[pro.value][0][city.value].length;i++){	
		for(var x in area[pro.value][0][city.value][i]){
			var node=document.createElement('option');
			node.innerHTML=x;
			reg.appendChild(node);
		}
	}



	//改变省份同时改变城市,区域,街道
	pro.onchange=function(){
		city.innerHTML="";
		reg.innerHTML="";
		for(var x in area[pro.value][0]){
			var node=document.createElement('option');
			node.innerHTML=x;
			city.appendChild(node)
		}
		for(var i=0;i<area[pro.value][0][city.value].length;i++){	
				for(var x in area[pro.value][0][city.value][i]){
					var node=document.createElement('option');
					node.innerHTML=x;
					reg.appendChild(node)
				}
			}
	}
	//改变城市同时改变区域和街道
	city.onchange=function(){
		reg.innerHTML="";
		for(var i=0;i<area[pro.value][0][city.value].length;i++){	
				for(var x in area[pro.value][0][city.value][i]){
					var node=document.createElement('option');
					node.innerHTML=x;
					reg.appendChild(node)
				}
			}
		
	}