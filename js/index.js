window.onload=function () {
    let shop=document.getElementsByClassName("shop");
    let goods=document.getElementsByClassName("goods");
    shop[0].onmouseenter=function () {
        goods[0].style.height="98px";
    }
    shop[0].onmouseleave=function () {
        goods[0].style.height="0";
    }
    let aside=document.getElementsByClassName("as");
    let asideBox=document.getElementsByClassName("asideBox");
    console.log(aside,asideBox);
    for (let i=0;i<aside.length;i++){
        aside[i].onmouseenter=function () {
            asideBox[i].style.display="block";
        }
        aside[i].onmouseleave=function () {
            asideBox[i].style.display="none";
        }
    }
}