var json=[{
    img:"./upload/shuiguo.png",
    span:"免费水果"
},
{
    img:"./upload/huiyuan.png",
    span:"super会员"
},
{
    img:"./upload/qindao.png",
    span:"签到有礼"
},
{
    img:"./upload/linjuan.png",
    span:"领劵中心"
}
,
{
    img:"./upload/gengduo.png",
    span:"更多频道"
}
];
var enter_wrapper =document.querySelector(".enter_wrapper");
var top =document.querySelectorAll("#t");
json.forEach(function(v,i){
var na=document.createElement("a");
na.innerHTML=`
<img src="${v.img}">
<span>${v.span}</span>
`
enter_wrapper.appendChild(na);
    
});
window.onscroll=function(){
    var st=document.documentElement.scrollTop||document.body.scrollTop;
    if(st>app.offsetHeight){


        t.style.display="block";
        search_wrap.style.position="fixed";
    }
    else{
        t.style.display="none"
        search_wrap.style.position="static";
    }
}
top.onclick=function(){
    document.body.scrollTop=document.documentElement.scrollTop=0;
}