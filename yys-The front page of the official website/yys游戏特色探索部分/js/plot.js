/**
 * Created by 17429 on 2017/12/8.
 */
$(function() {
  //鼠标进入事件左侧按钮高亮
  $(".explore_leftNav1")
    .mouseenter(function() {
      $(".explore_leftNav1").css("opacity", 1);
      $(".explore_leftNav1")
        .siblings("div")
        .css("opacity", 0);
    })
    .mouseleave(function() {
      $(".explore_leftNav1")
        .siblings("div")
        .css("opacity", 0);
    });

  $(".explore_leftNav2")
    .mouseenter(function() {
      $(".explore_leftNav2")
        .siblings("div")
        .css("opacity", 0);
      $(".explore_leftNav2").css("opacity", 1);
    })
    .mouseleave(function() {
      $(".explore_leftNav2")
        .siblings("div")
        .css("opacity", 0);
    });

  $(".explore_leftNav3")
    .mouseenter(function() {
      $(".explore_leftNav3").css("opacity", 1);
      $(".explore_leftNav3")
        .siblings("div")
        .css("opacity", 0);
    })
    .mouseleave(function() {
      $(".explore_leftNav3")
        .siblings("div")
        .css("opacity", 0);
    });

  //--------------------------------------------------
  //鼠标进入中间左侧内容
  $(".middle_left_pic1 em")
    .mouseenter(function() {
      $(".middle_left_pic1 p").css("color", "#ffda68");
      $(this).css("opacity", 1);
      $(this).css("cursor", "pointer");
    })
    .mouseleave(function() {
      $(".middle_left_pic1 p").css("color", "");
      $(this).css("opacity", 0);
    });
  $(".middle_left_pic2 em")
    .mouseenter(function() {
      $(".middle_left_pic2 p").css("color", "#ffda68");
      $(this).css("opacity", 1);
      $(this).css("cursor", "pointer");
    })
    .mouseleave(function() {
      $(".middle_left_pic2 p").css("color", "");
      $(this).css("opacity", 0);
    });
  $(".middle_left_pic3 em")
    .mouseenter(function() {
      $(".middle_left_pic3 p").css("color", "#ffda68");
      $(this).css("opacity", 1);
      $(this).css("cursor", "pointer");
    })
    .mouseleave(function() {
      $(".middle_left_pic3 p").css("color", "");
      $(this).css("opacity", 0);
    });
  // 鼠标进入中间模块切换图片
  $(".middle_right_pic1 em")
    .mouseenter(function() {
      $(".middle_right_pic1 p").css("color", "#ffda68");
      $(this).css("opacity", 1);
      $(this).css("cursor", "pointer");
    })
    .mouseleave(function() {
      $(".middle_right_pic1 p").css("color", "");
      $(this).css("opacity", 0);
    });
  $(".middle_right_pic2 em")
    .mouseenter(function() {
      $(".middle_right_pic2 p").css("color", "#ffda68");
      $(this).css("opacity", 1);
      $(this).css("cursor", "pointer");
    })
    .mouseleave(function() {
      $(".middle_right_pic2 p").css("color", "");
      $(this).css("opacity", 0);
    });
  $(".middle_right_pic3 em")
    .mouseenter(function() {
      $(".middle_right_pic3 p").css("color", "#ffda68");
      $(this).css("opacity", 1);
      $(this).css("cursor", "pointer");
    })
    .mouseleave(function() {
      $(".middle_right_pic3 p").css("color", "");
      $(this).css("opacity", 0);
    });
  //鼠标进入右侧按钮切换图片
  $(".middle_left_pic1").click(function() {
    $(".explore_middle_2 img").attr("src", "images/dm.jpg");
  });
  $(".middle_left_pic2").click(function() {
    $(".explore_middle_2 img").attr("src", "images/bgyx.jpg");
  });
  $(".middle_left_pic3").click(function() {
    $(".explore_middle_2 img").attr("src", "images/LBS.jpg");
  });
  $(".middle_right_pic1").click(function() {
    $(".explore_middle_2 img").attr("src", "images/dj.jpg");
  });
  $(".middle_right_pic2").click(function() {
    $(".explore_middle_2 img").attr("src", "images/sssj.jpg");
  });
  $(".middle_right_pic3").click(function() {
    $(".explore_middle_2 img").attr("src", "images/ssfb.jpg");
  });
  //---------------------------------------------------------------
  //鼠标进入右侧按钮切换页面
  $('.explore_leftNav1').mouseenter(function(){
      $('#second_page_hide').css('display','none');
      $('#first_page_hide').css('display','block');
      $('#third_page_hide').css('display','none');
  });

  $('.explore_leftNav2').mouseenter(function(){
      $('#first_page_hide').css('display','none');
      $('#second_page_hide').css('display','block');
      $('#third_page_hide').css('display','none');
  });
  $('.explore_leftNav3').mouseenter(function(){
      $('#first_page_hide').css('display','none');
      $('#second_page_hide').css('display','none');
      $('#third_page_hide').css('display','block');
  });

  //点击按钮切换中间图片
  $(".thirdPage_btn1").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片2
  $(".thirdPage_btn2").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/7.jpg");
    $(".thirdPage_pic_show p").html("与其他玩家组成队伍一起刷副本");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片3
  $(".thirdPage_btn3").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/8.jpg");
    $(".thirdPage_pic_show p").html("加入阴阳寮，还可以创建自己的结界");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片4
  $(".thirdPage_btn4").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/2.jpg");
    $(".thirdPage_pic_show p").html(
      "购买你需要的物品，可以使用“友情点”、“金币”、“勾玉”、“荣誉积分”和“勋章”等进行兑换购买"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片5
  $(".thirdPage_btn5").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/9.jpg");
    $(".thirdPage_pic_show p").html("目前已达成的成就");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片6
  $(".thirdPage_btn6").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/10.jpg");
    $(".thirdPage_pic_show p").html(
      "你的好友和聊天记录，可以和在线好友互赠友情点"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片7
  $(".thirdPage_btn7").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/11.jpg");
    $(".thirdPage_pic_show p").html("阴阳师掌握的技能");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片8
  $(".thirdPage_btn8").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/12.jpg");
    $(".thirdPage_pic_show p").html(
      "展示你所拥有的式神，可以对自己中意的式神进行强化、升级、升星"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片9
  $(".thirdPage_btn9").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/4.jpg");
    $(".thirdPage_pic_show p").html(
      "进入“町中”后，可以通过“百鬼夜行”收集式神碎片、进行家族战和即时PVP斗技"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片10
  $(".thirdPage_btn10").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/3.jpg");
    $(".thirdPage_pic_show p").html(
      "点击进入副本界面，可以挑战首领、收集御魂和觉醒材料、进行结界突破等"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片11
  $(".thirdPage_btn11").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/2.jpg");
    $(".thirdPage_pic_show p").html("当前拥有金币数量");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片12
  $(".thirdPage_btn12").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/1.jpg");
    $(".thirdPage_pic_show p").html(
      "当前玩家ID，等级，经验值和头像。点击头像可以打开“设置”，修改自己头像，设置游戏声音等"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片13
  $(".thirdPage_btn13").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/2.jpg");
    $(".thirdPage_pic_show p").html("当前拥有勾玉数量");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片14
  $(".thirdPage_btn14").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/2.jpg");
    $(".thirdPage_pic_show p").html("当前拥有体力值");
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
  // 点击按钮切换图片15
  $(".thirdPage_btn15").click(function() {
    $(".thirdPage_fork").css({'z-index':100,'opacity':1});
    $(".thirdPage_pic_float").css("opacity", 0);
    $(".thirdPage_pic_show").css("display", "block");
    $(".thirdPage_pic_show img").attr("src", "images/page_three/5.jpg");
    $(".thirdPage_pic_show p").html(
      "画出符咒或者语音进行召唤，随机召唤出新的式神"
    );
  });
  $(".thirdPage_fork").click(function() {
    $(".thirdPage_fork").css('opacity',0);
    $(".thirdPage_pic_show").css("display", "none");
    $(".thirdPage_pic_float").css("opacity", 1);
  });
});
