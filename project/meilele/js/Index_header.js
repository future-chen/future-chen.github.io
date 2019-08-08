
   
        // 加载地区
        for (var x in cityData.city_list_json.city_list) {
            var word = "";
            //城市字母列表
            word += "<li>" + x + "</li>";
            var node = "<li class='WJH_first'>" + x + "</li>";
            var node2 = "";
            for (var i = 0; i < cityData.city_list_json.city_list[x].length; i++) {
                //城市列表
                node2 += "<li>" + cityData.city_list_json.city_list[x][i].n + "</li>";
            }
            var node1 = "<div>" + node + "<ul class='WJH_cityUl'>" + node2 + "</ul>" + "</div>";
            WJH_cityliebiao.innerHTML += node1;
            node = "";
            node1 = "";
            WJH_firWord.innerHTML += word;

        }
        //首字母
        var WJH_word = $("#WJH_firWord");
        //城市列表
        var WJH_cityTable = $("#WJH_cityliebiao");
        //是否滚动
        

        for (var i = 0; i < WJH_word.children().length; i++) {
            WJH_word.children().eq(i).mouseover(function () {

                var WJH_city_Index = $(this).index();
                $(this).css({
                    background: "#cf000e"
                });
                $(this).css({
                    color: "white"
                });
                // console.log(WJH_cityTable.scrollTop())???
                WJH_cityTable.stop().animate({
                    scrollTop: (WJH_cityTable.children()[WJH_city_Index].offsetTop - 148)
                }, 800, function () {

                })
            }).mouseout(function (i) {

                $(this).css({
                    background: "white"
                });
                $(this).css({

                    color: "#cf000e"
                })

            })
           

        }

        //城市列表中的每一个城市
        var WJH_cityUl = $(".WJH_cityUl");
        for (var i = 0; i < WJH_cityUl.children().length; i++) {
            WJH_cityUl.children().eq(i).mouseover(function () {
                $(this).css({
                    background: "#cf000e"
                });
                $(this).css({
                    color: "white"
                });
            }).mouseout(function () {

                $(this).css({
                    background: "white"
                });
                $(this).css({

                    color: "#999"
                })

            })
            WJH_cityUl.children().eq(i).click(function () {

                $(".WJH_city")[0].innerHTML = $(this)[0].innerHTML;
                // $("#WJH_cityBox").css({display:"none"})

            })
            
        }
        for (var i = 0; i < $(".WJH_cityTitle").children().length; i++) {

            $(".WJH_cityTitle").children().eq(i).click(function () {
                $(".WJH_city")[0].innerHTML = $(this)[0].innerHTML;
            })
            $(".WJH_cityTitle").children().eq(i).mouseover(function () {
                $(this).css({

                    background: "#cf000e"
                });
                $(this).css({
                    color: "white"
                });
            }).mouseout(function () {

                $(this).css({
                    background: "white"
                });
                $(this).css({

                    color: "#434343"
                })

            })

        }

  
   
// $(".WJH_changeCity").mouseover(function() {WJH_refresh();})

