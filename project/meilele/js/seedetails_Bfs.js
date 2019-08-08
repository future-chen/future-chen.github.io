var anniu=document.getElementById("xy_renqi_xuan").getElementsByTagName("span");
console.log(anniu)
var imags=document.getElementById("xy_renqi_show_2").getElementsByTagName("img");
console.log(imags)


var countt=0;

for(var i=0;i<anniu.length;i++){

	anniu[i].index=i;
	anniu[i].onmouseover=function(){

		anniu[countt].style.borderColor="#ebebeb";

		this.style.borderColor="red";

		for(var j=0;j<imags.length;j++){
			imags[j].src="images/ganCN/xy_renqi_lunbo"+(this.index+1)+".jpg"
		}

		countt=this.index;

	}

}