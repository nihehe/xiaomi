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
    let asideBox=document.getElementsByClassName("asideBox");
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
    let book1=document.getElementsByClassName("book1");
    let book=document.getElementsByClassName("book")[0];
    let spot2=book.getElementsByClassName("spot2 spot1")[0];
    let spot2_lis=spot2.getElementsByTagName("li");
    console.log(spot2_lis, book1);
    let cleft=book.getElementsByClassName("cleft");
    let cright=book.getElementsByClassName("cright");
    console.log(cright);
    let num1=0;
    cright.onclick=function () {
        num1++;
        if (num1==book1.length){
            num1=0;
        }
        for (let i=0;i<book1.length;i++){
            book1[i].style.zIndex="5";
            spot2_lis[i].style.border="2px solid rgba(255,255,255,1)";
            spot2_lis[i].style.background="rgba(0,0,0,0.4)";
        }
        book1[num1].style.zIndex="10";
        spot2_lis[num1].style.border="2px solid #ff6700";
        spot2_lis[num1].style.background="white";
    }


}
