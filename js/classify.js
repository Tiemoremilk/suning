  //dom代码写在body的最后。或者onload函数里
  var tab01=document.querySelector(".content_lf");
  var tab02=document.querySelector(".content_rt");
  //找到第一个tab)
  var tt=tab01.getElementsByClassName("lf")[0];
  //获得类数组
  var li=tt.querySelectorAll("li");
  var tc=tab02.querySelectorAll(".tc");
  var fw=tab01.querySelectorAll(".w")
 
  for(var i=0;i<li.length;i++){
      li[i].index=i;
      li[i].onclick=function(){
          //不能使用i，使用this
          //所有的审判都去除cur类，所有的tc都隐藏
          for(var j=0;j<li.length;j++){
              li[j].classList.remove("cur");
              tc[j].style.display="none";
              
          }
          this.classList.add("cur");
          tc[this.index].style.display="block";
          // fw[this.index].style.fontWeight="bold";
          // if(this.index!=0){
          //   fw[0].style.fontWeight="normal";
          // }
      }
      // li[i].onmouseout=function(){
      // fw[this.index].style.fontWeight="normal";
      // }
      
  }



  var json=[{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
,
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
,
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
,
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
,
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
,
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
},
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
,
{
    img:"./upload/f_shouji.jpg",
    span:"XXXXX"
}
];
var mains =document.querySelector(".main");
json.forEach(function(v,i){
var na=document.createElement("a");
na.innerHTML=`

<img src="${v.img}">
<span>${v.span}</span>
`
mains.appendChild(na);
    
});