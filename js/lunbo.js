$(function () {
    //轮播图
    let num=0;
    let t=setInterval(move,3000);
    console.log($(".banner-picture li"));

    function move(type="left") {
        if (type=="left"){
            num++;
            if (num>=$(".banner-picture li").length){
                num=0;
            }
        } else {
            num--;
            if (num<0){
                num=$(".banner-picture li").length-1;
            }
        }
        $(".banner-picture li").css("z-index","5").eq(num).css("z-index","10");
        $(".banner .spot li").removeClass("click").eq(num).addClass("click");
    }
    $(".banner").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,3000);
    });
    $(".banner .btnLeft").click(function () {
        move("right");
    });
    $(".banner .btnRight").click(function () {
        move("left");
    });
    $(".banner .spot li").click(function () {
        $(".banner-picture li").css("z-index","5").eq($(this).index()).css("z-index","10");
        $(".banner .spot li").removeClass("click").eq($(this).index()).addClass("click");
    })
   //侧导航
    $(".as").mouseenter(function () {
        $(".asideBox").css("display","none").eq($(this).index()).css("display","block");
    });
    $(".as").mouseleave(function () {
        $(".asideBox").css("display","none");
    });
    //导航出现
    $(".navi").mouseenter(function () {
        $(".daohangbig").css("height",230+"px");
        $(".navi .List").mouseenter(function () {
            let that=$(this).index();
            $(".daohang").css("z-index","40").eq($(this).index()).css("z-index","50");
        })
    })
    $(".navi").mouseleave(function () {
        $(".daohangbig").css("height",0);
    })

})