window.onload = function(){
	/* 个位数转两位数 */
	function doubleNum(n){
		return (n <10) ? ("0" + n) : (n);
	}
	/* 储存信息 */
	var songName =["Gold Steps "]
	var singers =["Neck Deep"]
	/* 动态插入css代码片段 */
	var head = $('head')[0];
	function loadCssCode(code){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.rel = 'stylesheet';
		style.id = 'style';
		try{
			//for Chrome Firefox Opera Safari
			style .appendChild(document.createTextNode(code));
		}catch(ex){
			//for IE
			style.styleSheet.cssText = code;
		}
		head.appendChild(style);
	}

	/* 显示 */
	var I = 0; var arr = null; var Txt = null; var TXT = null;
	var lrc = txt0.value;
	var oLast = $(".last")[0];
	oLast.onclick = function(){
		--I; (I < 0) ? I = 1 : I = I;
	}
	
	/* 播放/暂停 */
	var oPaly = $(".play")[0];
	var Play = false;
	oPaly.onclick = function(){
		if(Play){
			myMusic.pause();
			Play = false;
			oPaly.className = "play iconfont Iconfont icon-zanting";
			oPaly.title = "播放";
			clearInterval(real);
		}else{
			myMusic.play();
			Play = true;
			oPaly.className = "play iconfont Iconfont icon-bofang";
			oPaly.title = "暂停";
			/* 当前时长 */
			oTimer();
		}
	}

	
	/* 更多 */
	var oGengduo = $(".gengduo")[0];
	var oGengduoBox = $(".gengduoBox")[0];
	var oBoxTriangle = $(".boxTriangle")[0];
	var Open2 = false;
	oGengduo.onclick = function(){
		if(Open2){
			oGengduoBox.style.display = "none";
			oBoxTriangle.style.display = "none";
			Open2 = false;
		}else{
			oGengduoBox.style.display = "";
			oBoxTriangle.style.display = "";
			Open2 = true;
		}
	}
	/* 初始化页面 */
	var str = "";
	/* 歌曲,歌手名称，歌单 */
	for(let i=0; i < 2; i++){
		$(".songName")[i].innerHTML = songName[0];
		$(".singer")[i].innerHTML = singers[0];
		str += `<p><span class="l">${songName[i]}</span><span >--</span><span class="r">${singers[i]}</span></p>`;
		$(".Song")[0].innerHTML = str;
	}
	/* 解析lrc */
	var lrcArr = lrc.split("[");
	var html = "";
	var oLyric = $(".Lyric")[0];
	Initialize();
	function Initialize(){
		for(let i=0; i < lrcArr.length ; i++){
			lrcArr = lrc.split("[");
			arr = lrcArr[i].split("]");
			var time = arr[0].split(".");
			var timer = time[0].split(":");
			var ms = timer[0] * 60 + timer[1] * 1;
			var text = arr[1];
			if(text){
				html += "<p id=" + ms +">" + text + "</p>";
			}
			oLyric.innerHTML = html;
			arr[0] = null; arr[1] = null;
		}
		html = "";
	}
	var oP = oLyric.getElementsByTagName("p");
	
}