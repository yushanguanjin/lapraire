$(function() {
    $(".navigation-btn").hover(function() {
            $(".hengxian").css("background","#ffffff");
            $(".navigation-menu span").css("color","#ffffff");
            $("navigation-btn .hengxian:nth-child(1)").css("top","-8px");
            $("navigation-btn .hengxian:nth-child(2)").css("top","0px");
            $("navigation-btn .hengxian:nth-child(3)").css("top","8px");
    },
        function() {
            $(".hengxian").css("background","#b5b5b5")
            $(".navigation-menu span").css("color","#b5b5b5")
        }
)
   

    $(".fa-commenting-o").click(function() {
        $(".zixun").css("display","block");
    })
    $(".zixun").mouseover(function(){
        $(this).css("display","block");
    })
    $(".zixun").mouseout(function(){
        $(this).css("display","none");
    })

    
    $(".navigation-logo a .fa-search").click(function() {
        $(".search").css("display","block");
    })
    
    $(".search .search-form .icon-close").click(function() {
        $(".search").css("display","none");
    })
     $(".search .search-form .icon-close").click(function() {
        $(".search").css("display","none");
    })

    $(".navigation-logo > a > .fa-user-o").click(function() {
        $(".myaccount").animate({
            right: 0  
        },300)
    })
    $(".myaccount .icon-close").click(function() {
        $(".myaccount").animate({
            right: "-8.291667rem"
        },300)
    })
//点击侧边栏滑出
    $(".navigation-btn").click(function() {
        $(".siderbar").animate({
            left:0
        },300)
    })
//点击侧边栏滑入
    $(".siderbar .icon-close").click(function() {
        $(".siderbar").animate({
            left: "-8.645833rem"
        },300)
    })
// 点击箭头
    // $(".liebiao").hover(function() {
    //     $(".siderbar  i").css("color","#303335");
    // })
    var oClick = true;
    $(".siderbar  .icon-moreunfold").click(function() {
        // $(".liebiao").css("background","#ffffff");
        // $(".liebiao").mouseout(function() {
        //     $(this).css("background","#303335");
        // })
        // $(".liebiao > a")
        if (oClick) {
        //    $(this).addClass("arrow-clcik").siblings(".siderbar  .fa-angle-down").removeClass("arrow-clcik");
           $(this).css("transform","rotateX(180deg)");// jquery css 动画
        }  else {
            $(this).css("transform","rotateX(360deg)");// jquery css 动画
        }
        oClick = !oClick;
    })
    
    // var liebiao = $(".liebiao");
    // var arrow  = $(".fa-angle-down");
    // for (var i = 0;i < liebiao.length;i++) {
    //         (function(i) {
    //             arrow[i].onmouseover = function() {
    //                 liebiao[i].style.background = "#ffffff";
                    
    //             }
    //         })(i),
    //         (function(i) {
    //             arrow[i].onmouseout = function() {
    //                 liebiao[i].style.background = "#303335";
    //             }
    //         })(i)
    //     }
   









    $("#arrow1").click(function() {
        $(".dropdown1").slideToggle();
        // $(".liebiao").not(".productslists").css("transform","translateY(150px)")
    })
    $("#arrow2").click(function() {
        $(".dropdown2").slideToggle();
    })
    $("#arrow3").click(function() {
        $(".dropdown3").slideToggle();
    })
    $("#arrow4").click(function() {
        $(".dropdown4").slideToggle();
    })
    

})
