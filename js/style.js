/*********************************************/
/************关闭红包*************/
/*********************************************/
$('.h_close').click(function(){
	$('.hongbao').hide();
})

/*********************************************/
/*******客服中心下拉菜单部分*******/
/*********************************************/
$('.kfcenter').hover(function(){
	$(this).css({'background':'#fff','border-color':'#f6f6f6'}).children('div').slideDown(500)
},function(){
	$(this).css({'background':'#fafafa','border-color':'#fafafa'}).children('div').hide()
})

/*********************************************/
/*******搜索框 部分*******/
/*********************************************/
$('.searchtop input').focus(function(){
	$(this).val('');
})

/***********************************************/
/*******轮播图部分 banner*******/
/***********************************************/
var i=1;
	//轮播图定时器
var time=setInterval(playing,3000);
function playing(){
	if(i>4){
		i=0;
	}
	//调用函数
	allRun(i);
	i++;
}
	//控制指定的图片出现和小按钮添加属性
function allRun(j){
	$('.imglist div').eq(j).fadeIn().siblings('div').fadeOut();
	$('.spanlist span').eq(j).addClass('current').siblings('span').removeClass('current')
}
	//鼠标滑进及点击小按钮的实现的函数
$('.banner_lb').mouseenter(function(){
	clearInterval(time);
	$('.spanlist span').click(function(){
		allRun($(this).index());
		i=$(this).index()+1;
	})
}).mouseleave(function(){
	time=setInterval(playing,3000);
})

/******************************************************/
/*****导航条menu_2二级菜单*****/
/******************************************************/
$('.menu_1 li').mouseenter(function(){
	$(this).children('div').show();
}).mouseleave(function(){
	$(this).children('div').hide();
})


/******************************************************/
/**********今日直播 昨日疯抢***********/
/******************************************************/
$('.top_title li[class*=title_]').click(function(){
	$(this).children('i').addClass('current').parent().siblings('li').children('i').removeClass('current');
	if($(this).index()==0){
		$('.hotbottom_1 ul').eq(0).addClass('appear').siblings('ul').removeClass('appear')
	}else{
		$('.hotbottom_1 ul').eq(1).addClass('appear').siblings('ul').removeClass('appear')
	}
})
	//滑进容器左右箭头出现
$('.today_hot').mouseenter(function(){
	$('.jiantou').show();
}).mouseleave(function(){
	$('.jiantou').hide();
})

	//点击左右箭头实现轮播
var l=0;
$('.jiantou .rightjt').click(function(){
	l=$('.appear').position().left;
	l-=1130;
	if(l<-2260){
		return;
	}else{
		$('.appear').animate({
			'left':l+'px'
		},800)
	}	
})
$('.jiantou .leftjt').click(function(){
	l=$('.appear').position().left;
	l+=1130;
	if(l>0){
		return;
	}else{
		$('.appear').animate({
			'left':l+'px'
		},800)
	}
})

/******************************************************/
/************限时抢购 选项卡***********/
/******************************************************/
$('.limit_list li').mouseenter(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	$('.limit_bottom ul').eq($(this).index()).addClass('limit_sole').siblings('ul').removeClass('limit_sole');

})
	//滑进盒子 左右箭头出现
$('.limit_bottom').mouseenter(function(){
	$('.limit_jt').show();
}).mouseleave(function(){
	$('.limit_jt').hide();
})
	//左右箭头点击效果
var ml=0;
$('.limit_leftjt').click(function(){
	ml=$('.limit_sole').position().left;
	ml+=1215;
	if(ml>0){
		return;
	}else{
		$('.limit_sole').animate({
			'left':ml+'px'
		},800)
	}
})
$('.limit_rightjt').click(function(){
	ml=$('.limit_sole').position().left;
	ml-=1215;
	if(ml<-1215){
		return;
	}else{
		$('.limit_sole').animate({
			'left':ml+'px'
		},800)
	}
})

/******************************************************/
/*************新品推荐 部分************/
/******************************************************/
var c=0;
$('.change').click(function(){
	c++;
	if(c>3){
		c=0;
	}
	$('.new_bottom ul').eq(c).addClass('new_sole').siblings().removeClass('new_sole');
})

/******************************************************/
/************今日好货 部分*************/
/******************************************************/
/*var allS=36610;
run();
var time=setInterval(run,1000);
function run(){
	//秒数
	var second=allS%60;
	var s= second<10?'0'+second:second;
	// console.log(second);
	//分钟数
	var minute=allS/60;
	if(minute>=60){
		minute=minute%60;
	}
	minute=Math.floor(minute);
	var m= minute<10?'0'+minute+' : ':minute+' : ';

	//小时数
	var hour=Math.floor(allS/3600);
	var h= hour<10?'0'+hour+' : ':hour+' : ';

	$('.count').text(h+m+s);
	allS--;
	if(hour==0&&minute==0&&second==0){
		$('.count').text('活动已结束').css('color','red');
		clearInterval(time);
		return;
	}
}*/
// setTimeout(run,0);
function run(){
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var hour= 24-h<10?'0'+(24-h):(24-h);
	var min= 59-m<10?'0'+(59-m):(59-m);
	var sec= 59-s<10?'0'+(59-s):(59-s);
	if(h==24){
		h=0;
	}
	$('.count').text(hour+':'+min+':'+sec);
	setTimeout(run,1000)
}

/******************************************************/
/**************个护美妆***************/
/******************************************************/
$('.makeup_list li').mouseenter(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	$('.makeup_bottom ul').eq($(this).index()).addClass('makeup_sole').siblings('ul').removeClass('makeup_sole');
})

/******************************************************/
/**************餐厨日用***************/
/******************************************************/
$('.day_list li').mouseenter(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	$('.day_bottom ul').eq($(this).index()).addClass('makeup_sole').siblings('ul').removeClass('makeup_sole');
})


/******************************************************/
/**************左侧导航栏****************/
/******************************************************/
	//跳转对应楼层
$('.left_floor li').click(function(){
	$('body').animate({
		'scrollTop':getScroll($(this).index())
	},500);
	$('html').animate({
		'scrollTop':getScroll($(this).index())
	},500);
})

// 背景色变色方法
function changeBg(n){
	$('.left_floor li').eq(n).children('a').addClass('current').parent().siblings('li').children('a').removeClass('current');
	$('.left_floor li').eq(n).find('i').addClass('active').parentsUntil('.left_floor').siblings('li').find('i').removeClass('active');
	// console.log(n);
}

// 获取楼层距离顶部的距离
$(function(){
	$(window).scroll(function(){
		
		var num = $(this).scrollTop()
		// 判断当滚动到某一层时,侧边栏发生改变
		if(num>=1060){
			changeBg(0);
			$('.leftbanner').css("display","block");
		}else{
			// 小于第一层则隐藏侧边栏
			$('.leftbanner').css("display","none");
		}
		if(num>=8563){
			changeBg(10)
		}else if(num>=7723){
			changeBg(9);
		}else if(num>=6923){
			changeBg(8);
		}else if(num>=6123){
			changeBg(7);
		}else if(num>=5283){
			changeBg(6);
		}else if(num>=4480){
			changeBg(5);
		}else if(num>=3680){
			changeBg(4);
		}else if(num>=2780){
			changeBg(3);
		}else if(num>=2020){
			changeBg(2);
		}else if(num>=1560){
			changeBg(1);
		}
	})
})

function getScroll(n){
	switch(n){
		case 0:return 1060;break;
		case 1:return 1560;break;
		case 2:return 2020;break;
		case 3:return 2780;break;
		case 4:return 3680;break;
		case 5:return 4480;break;
		case 6:return 5283;break;
		case 7:return 6123;break;
		case 8:return 6923;break;
		case 9:return 7723;break;
		case 10:return 8563;break;
	}
}

/*************************************************************/
/**************右侧导航栏****************/
/************************************************************/

/********打开welcome登录框********/
$('.account').mouseenter(function(){
	$('.welcome').show();
}).mouseleave(function(){
	$('.welcome').hide();
})

/********关闭welcome登录框********/
$('.close').click(function(){
	$('.welcome').hide();
})

/********扫码show*******/
$('.saoma_left').show();
$('.rb_btm1').mouseenter(function(){
	$('.saoma_left').show();
}).mouseleave(function(){
	$('.saoma_left').hide();
})

/*****************正则验证****************/
var input1=false;
var input2=false;
var input3=false;
var reg1=/^(\w{4,6})$/;
var reg2=/^[\w-][\w-]{3,6}@([0-9A-z-]){2,6}(\.\w+){1,3}$/;
var reg3=/^1([358][0-9]|4[57]|7[0135678])\d{8}$/;

	//用户名框验证
$('#uname').focus(function(){
	$('p.font_1').text('登录名可能是您的手机号、邮箱或用户名')
}).blur(function(){
	$('p.font_1').text('');
	if(reg1.test($(this).val()) || reg2.test($(this).val()) || reg3.test($(this).val())){
		input1=false;
		$('p.font_1').text('验证成功，可登录').css('color','green');
	}else{
		$('p.font_1').text('您的输入有误，请重新输入').css('color','red')
	}	
})

	//密码框验证
$('#pwd').focus(function(){
	$('p.font_2').text('您的密码可能为字母、数字或符号的组合')
}).blur(function(){
	$('p.font_2').text('');
	if($(this).val().match(/^\S{6,12}$/) != null){
		input2=true;
		$('p.font_2').text('验证成功，可登录').css('color','green')
	}else{
		$('p.font_2').text('您的输入有误，请重新输入').css('color','red')
	}
})
	
	//验证码验证
$('#yz').focus(function(){
	$('p.font_3').text('请输入右侧验证码，不区分大小写')
}).blur(function(){
	$('p.font_3').text('');
	if($(this).val().match(/ee7c/i)){
		input3=true;
		$('p.font_3').text('验证成功').css('color','green');
	}else{
		input3=false;
		$('p.font_3').text('验证码输入有误，请重新输入').css('color','red')
	}
})


$('form .login').click(function(){
	$('.yanzheng .myform').submit(function(){
		return input1&&input2&&input3;
	})
})

/************rb_back 返回顶部*************/
$('.rb_btm3').click(function(){
	$('body').animate({
		'scrollTop':0
	},500);
	$('html').animate({
		'scrollTop':0
	},500);
})

/**********************************************************/
/****************浮动导航栏***************/
/**********************************************************/
$(window).scroll(function(){
	var fd=$(document).scrollTop();
	if(fd>=600){
		$('.fudong').slideDown(300);
	}else{
		$('.fudong').slideUp(300)
	}
})
