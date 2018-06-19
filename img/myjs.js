//新人注册专享提示
$('.close').click(function(){
	$('.zhuce')[0].style.display = 'none';
})
/*****************轮播图******************/
var i = 1;
var timer = setInterval(playing,4000);
function playing(){
	if(i > 5){
		i = 0;
	}
	imgRun(i);
	spanRun(i);
	i++;
}
function imgRun(m){
	$('.imglist a img').eq(m).addClass('active').siblings().removeClass('active');
}
function spanRun(m){
	$('.spanlist span').eq(m).addClass('active').siblings().removeClass('active');
}
//给container绑定事件
$('.banner').mouseenter(function(){
	clearInterval(timer);

	//给span绑定点击事件
	$('.spanlist span').click(function(){
		$('.spanlist span').eq($(this).index()).addClass('active').siblings().removeClass('active');
		$('.imglist a img').eq($(this).index()).addClass('active').siblings().removeClass('active');
		i = $(this).index() + 1;
	})
}).mouseleave(function(){
	timer = setInterval(playing,4000);
})

//直播商品列表左右控制滚动图
var index = 0;
$('.m-now .now-left').click(function(){
	if(index <= 0){
		return index;
	}else{
		index --;
		$('.now-big').animate({
			'left':(-index*1130)+'px'
		},1000)
	}
})
$('.m-now .now-right').click(function(){
	if(index >= 2){
		return index;
	}else{
		index ++;
		$('.now-big').animate({
			'left':(-index*1130)+'px'
		},1000)
	}
})

//直播商品列表选项卡
$('.now-title ul li').click(function(){
	$(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
	$('.now-big').eq(Math.ceil($(this).index()/2)).addClass('active').siblings().removeClass('active');
})

//限时抢购左右控制滚动图
var index2 = 0;
$('.xsqg .now-left').click(function(){
	if(index2 <= 0){
		return index2;
	}else{
		index2 --;
		$('.xsqg-big').animate({
			'left':(-index2*1200)+'px'
		},1000)
	}
})
$('.xsqg .now-right').click(function(){
	if(index2 >= 2){
		return index2;
	}else{
		index2 ++;
		$('.xsqg-big').animate({
			'left':(-index2*1200)+'px'
		},1000)
	}
})

//限时抢购选项卡
$('.xsqg-title ul li').mouseenter(function(){
	$(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
	$('.xsqg-big').eq($(this).index()).addClass('active').siblings().removeClass('active');
})

//新品推荐 刷新轮播图
var num = $('.new-big').index();
num+=1;
$('.new-title a').click(function(){
	if(num > 2){
		num = 0;
	}
	$('.new-big').eq(num).addClass('active').siblings().removeClass('active');
	num++;
	
})

//倒计时
var n=15810450;
daoshu();
function daoshu(){
	var myTime=new Date(n);
	var h=myTime.getHours();
	h = (h>9) ? ' '+h+' : ' : ' 0'+h+' : ';
	var m=myTime.getMinutes();
	m = (m>9) ? m+' : ' : '0'+m+' : ';
	var s=myTime.getSeconds();
	s = (s>9) ? s : '0'+s;
	$('.last-time').text(h+m+s);
	n-=1000;
}
setInterval(daoshu,1000)


var n2=368450;
daojishi();
function daojishi(){
	var myTime=new Date(n2);
	var h=myTime.getHours();
	h = (h>9) ? ' '+h+' : ' : ' 0'+h+' : ';
	var m=myTime.getMinutes();
	m = (m>9) ? m+' : ' : '0'+m+' : ';
	var s=myTime.getSeconds();
	s = (s>9) ? s : '0'+s;
	$('.last-time2').text(h+m+s);
	n2-=1000;
}
setInterval(daojishi,1000)

// 固定的搜索框
$(window).scroll(function(){
	var t = $(document).scrollTop();
	t+=90;
	if(t > $('.m-now').offset().top){
		$('.search-fix').slideDown();
	}else{
		$('.search-fix').slideUp();
	}
})
/***************** 楼层侧边导航栏 **************/
$('.floor-ul li:first a').addClass('changebg');
$('.floor-ul li').click(function(){
	var that = this;
	//$(this).children().addClass('changebg').parent().siblings().children().removeClass('changebg');
	//$(this).addClass('changebg').siblings().removeClass('changebg')
	$('body').animate({
		'scrollTop':getScroll($(this).index()),
	},500,function(){
		$(that).children().addClass('changebg').parent().siblings().children().removeClass('changebg'),
		$(that).addClass('changebg').siblings().removeClass('changebg')
	})
})
function getScroll(n){
	switch(n){
		case 0:
			return $('.xsqg').offset().top;
		break;
		case 1:
			return $('.m-new').offset().top;
		break;
		case 2:
			return $('.today-new').offset().top;
		break;
	}
}
// 滚动事件
$(window).scroll(function(){
	var top = $(this).scrollTop()
	top += 80;
	if(top >= $('.xsqg').offset().top){
		$('.floor-menu').css('display','block');
		if(top >= $('.xsqg').offset().top && top < $('.m-new').offset().top  ){
			$('.floor-li-a1').children().addClass('changebg').parent().siblings().children().removeClass('changebg');
			$('.floor-li-a1').addClass('changebg').siblings().removeClass('changebg')
		}
		if(top >= $('.m-new').offset().top && top < $('.today-new').offset().top  ){
			$('.floor-li-a2').children().addClass('changebg').parent().siblings().children().removeClass('changebg');
			$('.floor-li-a2').addClass('changebg').siblings().removeClass('changebg')
		}else if(top >= $('.today-new').offset().top){
			$('.floor-li-a3').children().addClass('changebg').parent().siblings().children().removeClass('changebg');
			$('.floor-li-a3').addClass('changebg').siblings().removeClass('changebg')
		}
	}else{
		$('.floor-menu').css('display','none');
	}
})