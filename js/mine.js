var xmlhttp;
		if (window.XMLHttpRequest) {
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp = new XMLHttpRequest();
		} else {
			// IE6, IE5 浏览器执行代码
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				//xmlhttp.responseText;
				//你的ajax代码写在这里，其他位置除了open的前两个参数都不需要也不要改变。
				//ajax加载成功之后的代码执行位置
                var jarr=JSON.parse(xmlhttp.responseText);
                for(var v of jarr){
                    var ndiv=document.querySelector(".serviceonsecond_content")
                    var na=document.createElement("a");
                    na.innerHTML=`
                    <img src="${v.pic}">
                    <span>${v.w}</span>`;
                    ndiv.appendChild(na);
                }
				// document.write(xmlhttp.responseText);
				// console.log(xmlhttp.responseText)
				//只有用http的方式查看网页的运行结果才可以避免用本地网页的方式查看ajax运行结果。
				//vs code中可以使用liver server，post请求用专业的HTTP服务器
			}
		}
		xmlhttp.open("GET", "http://rap2api.taobao.org/app/mock/295629/nifengdate", true);
		xmlhttp.send();
