window.onload=function () {
    //购物车
    let shop=document.getElementsByClassName("shop");
    let goods=document.getElementsByClassName("goods");
    shop[0].onmouseenter=function () {
        goods[0].style.height="98px";
    }
    shop[0].onmouseleave=function () {
        goods[0].style.height="0";
    }
    //侧导航
    let aside=document.getElementsByClassName("as");
    let asideBox=document.querySelectorAll(".asideBox");
    for (let i=0;i<aside.length;i++){
        aside[i].onmouseenter=function () {
            asideBox[i].style.display="block";
        }
        aside[i].onmouseleave=function () {
            asideBox[i].style.display="none";
        }
    }
    //家电
    let hea_onright=document.getElementsByClassName("hea_onright")[0];
    let hea_lis=hea_onright.getElementsByTagName("li");
    let a=hea_onright.getElementsByTagName("a");
    let hea_under=document.getElementsByClassName("hea_under")[0];
    let right=hea_under.getElementsByClassName("right");
    function f(section,a,right) {
        for (let i=0;i<section.length;i++){
            section[i].onmouseenter=function () {
                for (let j=0;j<section.length;j++){
                    right[j].style.zIndex="5";
                    a[j].style.color="#000";
                    a[j].style.borderBottom="none";
                }
                right[i].style.zIndex="10";
                a[i].style.color="#ff6700";
                a[i].style.borderBottom="2px solid #ff6700";
            }
        }
    }
    f(hea_lis,a,right);
    //智能
    let intell_onright=document.getElementsByClassName("intell_onright")[0];
    let intell_lis=intell_onright.getElementsByTagName("li");
    let a1=intell_onright.getElementsByTagName("a");
    let intell_under=document.getElementsByClassName("intell_under")[0];
    let right1=intell_under.getElementsByClassName("right");
    f(intell_lis,a1,right1);
    //搭配
    let collocation_onright=document.getElementsByClassName("collocation_onright")[0];
    let collocation_lis=collocation_onright.getElementsByTagName("li");
    let a2=collocation_onright.getElementsByTagName("a");
    let collocation_under=document.getElementsByClassName("collocation_under")[0];
    let right2=collocation_under.getElementsByClassName("right");
    f(collocation_lis,a2,right2);
    //配件
    let parts_onright=document.getElementsByClassName("parts_onright")[0];
    let parts_lis=parts_onright.getElementsByTagName("li");
    let a3=parts_onright.getElementsByTagName("a");
    let parts_under=document.getElementsByClassName("parts_under")[0];
    let right3=parts_under.getElementsByClassName("right");
    f(parts_lis,a3,right3);
    //周边
    let around_onright=document.getElementsByClassName("around_onright")[0];
    let around_lis=around_onright.getElementsByTagName("li");
    let a4=around_onright.getElementsByTagName("a");
    let around_under=document.getElementsByClassName("around_under")[0];
    let right4=around_under.getElementsByClassName("right");
    f(around_lis,a4,right4);
    //轮播图
    let banner_picture=document.getElementsByClassName("banner-picture")[0];
    let banner_lis=banner_picture.getElementsByTagName("li");
    let banner=document.getElementsByClassName("banner")[0];
    let spot=banner.getElementsByClassName("spot")[0];
    let spot_lis=spot.getElementsByTagName("li");
    let btnLeft=banner.getElementsByClassName("btnLeft")[0];
    let btnRight=banner.getElementsByClassName("btnRight")[0];
    let num=0;
    let t=setInterval(move,3000);
    function move() {
        num++;
        if (num==banner_lis.length){
            num=0;
        }
        for (let i=0;i<banner_lis.length;i++){
            banner_lis[i].style.zIndex="5";
            spot_lis[i].className="";
        }
        banner_lis[num].style.zIndex="10";
        spot_lis[num].className="click";

    }
    function moveL() {
        num--;
        if (num<0){
            num=banner_lis.length-1;
        }
        for (let i=0;i<banner_lis.length;i++){
            banner_lis[i].style.zIndex="5";
            spot_lis[i].className="";
        }
        banner_lis[num].style.zIndex="10";
        spot_lis[num].className="click";

    }
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    btnLeft.onclick=function () {
        moveL();
    }
    btnRight.onclick=function () {
        move();
    }
    for (let i=0;i<spot_lis.length;i++){
        spot_lis[i].onclick=function () {
            for (let j=0;j<banner_lis.length;j++){
                banner_lis[j].style.zIndex="5";
                spot_lis[j].className="";
            }
            banner_lis[i].style.zIndex="10";
            spot_lis[i].className="click";
            num=i;
        }
   }
   //内容
    let width_content=document.querySelector(".width-content");
    let width=parseInt(getComputedStyle(width_content,null).width);
    function content(name,spot,Left,Right,now,next) {
        now=next=0;
        let flag=true;
        function move_content() {
            next++;
            if (next==name.length){
                next=0;
            }
            name[next].style.left=width+"px";
            animate(name[now],{left:-width},300);
            animate(name[next],{left:0},300,function () {
                flag=true;
            });
            spot[now].classList.remove("click");
            spot[next].classList.add("click");
            now=next;
        }
        function moveL_content() {
            next--;
            if (next<0){
                next=name.length-1;
            }
            name[next].style.left=-width+"px";
            animate(name[now],{left:width},300);
            animate(name[next],{left:0},300,function () {
                flag=true;
            });
            spot[now].classList.remove("click");
            spot[next].classList.add("click");
            now=next;
        }
        Right.onclick=function () {
            if (flag==false){
                return;
            }
            if (next==name.length-1){
                next=name.length-1;
                return;
            }
            flag=false;
            move_content();
        }
        Left.onclick=function () {
            if (flag==false){
                return;
            }
            if (next==0){
                return;
            }
            flag=false;
            moveL_content();
        }
        spot.forEach(function (v,i) {
            v.onclick=function () {
                if (now==i){
                    return;
                }
                else if(now>i){
                    name[i].style.left=-width+"px";
                    animate(name[now],{left:width},300);
                    animate(name[i],{left:0},300,function () {
                        flag=true;
                    });
                    spot[now].classList.remove("click");
                    spot[i].classList.add("click");
                }
                else {
                    name[i].style.left=width+"px";
                    animate(name[now],{left:-width},300);
                    animate(name[i],{left:0},300,function () {
                        flag=true;
                    });
                    spot[now].classList.remove("click");
                    spot[i].classList.add("click");
                }
                next=now=i;
            }
        })
    }
    //book
    let book=document.querySelector(".book");
    let book1=document.querySelectorAll(".book1");
    let cleft=book.querySelector(".cleft");
    let cright=book.querySelector(".cright");
    let lis=book.querySelectorAll(".spot2 li");
    let now1=next1=0;
    content(book1,lis,cleft,cright,now1,next1);


    //theme
    let theme=document.querySelector(".theme");
    let theme1=document.querySelectorAll(".theme1");
    let cleft1=theme.querySelector(".cleft");
    let cright1=theme.querySelector(".cright");
    let lis1=theme.querySelectorAll(".spot2 li");
    let now2=next2=0;
    content(theme1,lis1,cleft1,cright1,now2,next2);
    //game
    let game=document.querySelector(".game");
    let game1=document.querySelectorAll(".game1");
    let cleft2=game.querySelector(".cleft");
    let cright2=game.querySelector(".cright");
    let lis2=game.querySelectorAll(".spot2 li");
    let now3=next3=0;
    content(game1,lis2,cleft2,cright2,now3,next3);
    //use
    let use=document.querySelector(".use");
    let use1=document.querySelectorAll(".use1");
    let cleft3=use.querySelector(".cleft");
    let cright3=use.querySelector(".cright");
    let lis3=use.querySelectorAll(".spot2 li");
    let now4=next4=0;
    content(use1,lis3,cleft3,cright3,now4,next4);
}
