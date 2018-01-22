$(function() {
  $("#TopBarnew6").mouseenter(function() {
    $("#TopBarnew16").css("display", "none");
    $("#TopBarnew26").fadeIn(100);
  });
  $("#TopBarnew6").mouseleave(function() {
    $("#TopBarnew16").css("display", "block");
    $("#TopBarnew26").css("display", "none");
  }); // 头部广告大图出
  $("#ml6").mouseenter(function() {
    // $('#ml26').css('display','block');
    $("#ml26").fadeIn(500);
  });
  $("#ml6").mouseleave(function() {
    $("#ml26").css("display", "none");
  }); //游戏目录出现
  $(".r16").animate({ left: "260", opacity: 1 }, 1000);
  $(".r26").animate({ right: "175", opacity: 1 }, 1000);
  //神乐清明出现
  $(".nextswipe6").click(function() {
    if ($(".slide16").css("display") == "block") {
      $(".r16").animate({ left: "480", opacity: 0.1 }, 1000);
      $(".r26").animate({ right: "360", opacity: 0.1 }, 1000);
      $(".slide16").css("display", "none");
      $(".slide26").css("display", "block");
      $(".r36").animate({ left: "65", opacity: 1 }, 1000);
      $(".r46").animate({ left: "410", opacity: 1 }, 1000);
    } else {
      $(".r36").animate({ left: "350", opacity: 0.1 }, 1000);
      $(".r46").animate({ right: "330", opacity: 0.1 }, 1000);
      $(".slide16").css("display", "block");
      $(".slide26").css("display", "none");
      $(".r16").animate({ left: "260", opacity: 1 }, 1000);
      $(".r26").animate({ right: "175", opacity: 1 }, 1000);
    }
  });
  $(window).scroll(function() {
    //导航栏隐藏部分
    if ($(document).scrollTop() >= 55) {
      $("#top_bar6").addClass("fixed");
    } else {
      $("#top_bar6").removeClass("fixed");
    }
  });

  $(".icon16").mouseenter(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-left": 43
        },
        150,
        "linear"
      );
  });
  $(".icon16").mouseleave(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-left": 28
        },
        150,
        "linear"
      );
  });
  $(".icon26").mouseenter(function() {
    $(".iconh1")
      .stop()
      .slideDown(500);
    $(this)
      .stop()
      .animate(
        {
          left: 15
        },
        150,
        "linear"
      );
  });
  $(".icon26").mouseleave(function() {
    $(".iconh1")
      .stop()
      .slideUp(500);
    $(this)
      .stop()
      .animate(
        {
          left: 0
        },
        150,
        "linear"
      );
  });

  $(".icon6").mouseenter(function() {
    $(".iconh2")
      .stop()
      .slideDown(500);
    $(this)
      .stop()
      .animate(
        {
          left: 15
        },
        150,
        "linear"
      );
  });
  $(".icon6").mouseleave(function() {
    $(".iconh2")
      .stop()
      .slideUp(500);
    $(this)
      .stop()
      .animate(
        {
          left: 0
        },
        150,
        "linear"
      );
  });

  $(".icon86").mouseenter(function() {
    $(".iconh3")
      .stop()
      .slideDown(500);
    $(this)
      .stop()
      .animate(
        {
          left: 15
        },
        150,
        "linear"
      );
  });
  $(".icon86").mouseleave(function() {
    $(".iconh3")
      .stop()
      .slideUp(500);
    $(this)
      .stop()
      .animate(
        {
          left: 0
        },
        150,
        "linear"
      );
  });

  $(".icon76").mouseenter(function() {
    $(".iconh4")
      .stop()
      .slideDown(500);
    $(this)
      .stop()
      .animate(
        {
          left: 15
        },
        150,
        "linear"
      );
  });
  $(".icon76").mouseleave(function() {
    $(".iconh4")
      .stop()
      .slideUp(500);
    $(this)
      .stop()
      .animate(
        {
          left: 0
        },
        150,
        "linear"
      );
  });

  $(".icon126").mouseenter(function() {
    $(".iconh5")
      .stop()
      .slideDown(500);
    $(this)
      .stop()
      .animate(
        {
          left: 15
        },
        150,
        "linear"
      );
  });
  $(".icon126").mouseleave(function() {
    $(".iconh5")
      .stop()
      .slideUp(500);
    $(this)
      .stop()
      .animate(
        {
          left: 0
        },
        150,
        "linear"
      );
  });

  $(".icon36").mouseenter(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-right": -3
        },
        150,
        "linear"
      );
  });
  $(".icon36").mouseleave(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-right": 12
        },
        150,
        "linear"
      );
  });

  $(".icon56").mouseenter(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-right": 13
        },
        150,
        "linear"
      );
  });
  $(".icon56").mouseleave(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-right": 28
        },
        150,
        "linear"
      );
  });

  $(".icon46").mouseenter(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-left": 43
        },
        150,
        "linear"
      );
  });
  $(".icon46").mouseleave(function() {
    $(this)
      .stop()
      .animate(
        {
          "margin-left": 28
        },
        150,
        "linear"
      );
  }); //游戏日历结束
});
// 左边轮播图开始
$(function() {
  oneWidth = $(".banner_item6").width();
  var timer = null;
  var iNow = 0;

  $(".banner_nav6 a").on("click", function() {
    $(this)
      .addClass("on")
      .siblings()
      .removeClass("on");
    var index = $(this).index();
    iNow = index;
    $(".banner_wrap6").animate({
      left: -oneWidth * iNow
    });
  });
  timer = setInterval(function() {
    iNow++;
    if (iNow > $(".banner_item6").length - 1) {
      iNow = 0;
    }
    $(".banner_nav6 a")
      .eq(iNow)
      .trigger("click");
  }, 2000);
});

// 中间的标签切换
//
$(function() {
  $(".news_tab").mouseenter(function() {
    var index = $(this).index();
    $(".news_list>ul").hide(300);
    $(".news_list>ul:eq(" + index + ")").show(300);
  });
  $(".news_tabs6").mouseleave(function() {
    $(".news_list>ul")
      .stop()
      .hide(300);
    $(".news_list>ul:eq(0)")
      .stop()
      .show(300);
  });
});
//式神主角切换
$(function() {
  $(".shishen").click(function() {
    $(".zhujue_container").removeClass("show");
    $(".shishen_container").addClass("show");
    $(".shishen").addClass("active");
    $(".zhujue").removeClass("active");
  });
  $(".zhujue").click(function() {
    $(".shishen_container").removeClass("show");
    $(".zhujue_container").addClass("show");
    $(".zhujue").addClass("active");
    $(".shishen").removeClass("active");
  });
});
//式神切换
$(function() {
  $(".shishen_tabs a").click(function() {
    var index = $(this).index();
    // console.log(index);
    $(".hidden>ul>li").hide();
    $(".hidden>ul>li:eq(" + index + ")").show();
  });
});

// 主角切换
$(function() {
  $(".zhujue_tab").click(function() {
    $(this)
      .addClass("bd")
      .siblings()
      .removeClass("bd");
    var index = $(this).index();
    $(".zhujue_wrap").removeClass("show");
    $(".zhujue_wrap:eq(" + index + ")").addClass("show");
  });
});

//亓玉部分

var fanData = [
  {
    type: 0,
    url: "images/index/area/jxtj/1.jpg",
    title: "妖刀姬cos【作者】@押切YAKI"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/2.jpg",
    title: "黑童子x白童子【作者】狗司令太子&大霖先森"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/3.jpg",
    title: "宰了那个阿爸【作者】茉莉瓜"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/4.jpg",
    title: "承包自己的大尾巴！【作者】remirror逆镜"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/5.png",
    title: "椒图原创皮肤【作者】溪初阳关"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/6.jpg",
    title: "午后日常【作者】玄米糕糕"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/7.jpg",
    title: "萤草合集【作者】腥臭的百瑞笔迹"
  },
  {
    type: 0,
    url: "images/index/area/jxtj/8.jpg",
    title: "妖琴师新衣【作者】@日出的小太阳"
  },
  {
    type: 1,
    url: "images/index/area/trhh/01.jpg",
    title: "式神魔法少女服【作者】 罗丸二"
  },
  {
    type: 1,
    url: "images/index/area/trhh/02.jpg",
    title: "寮日常，元、天、夫【作者】Koch_扣取"
  },
  {
    type: 1,
    url: "images/index/area/trhh/03.jpg",
    title: "日常心机【作者】-瓜子--"
  },
  {
    type: 1,
    url: "images/index/area/trhh/04.jpg",
    title: "酒茨逸事（二）【作者】KUMA没有猫"
  },
  {
    type: 1,
    url: "images/index/area/trhh/05.jpg",
    title: "阴阳师角色西装【作者】想要飞起来的零啊"
  },
  {
    type: 1,
    url: "images/index/area/trhh/06.jpg",
    title: "不可言说之事（二）【作者】精分兔乖乖"
  },
  {
    type: 1,
    url: "images/index/area/trhh/07.jpg",
    title: "酒茨小故事【作者】湘立"
  },
  {
    type: 1,
    url: "images/index/area/trhh/08.jpg",
    title: "合集【作者】阿婶sheen"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/1.jpg",
    title: "姑获鸟cos【作者】papapa帕娘"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/2.jpg",
    title: "山兔cos【作者】茶兔阿"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/3.jpg",
    title: "神乐和莹草COS【作者】舔手指的毛毛虫"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/4.jpg",
    title: "萤草cos【作者】亀梨郁"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/5.png",
    title: "鬼女红叶cos【作者】流苏"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/6.png",
    title: "青行灯cos【作者】Jiawen"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/7.png",
    title: "吸血姬cos【作者】值木姐姐"
  },
  {
    type: 2,
    url: "images/index/area/wjCOS/8.jpg",
    title: "性转茨木【作者】未岚RAN"
  },
  {
    type: 3,
    url: "images/index/area/trsp/01.jpg",
    title: "华丽现世召唤，突破次元壁之旅【作者】《阴阳师》手游"
  },
  {
    type: 3,
    url: "images/index/area/trsp/02.jpg",
    title: "【有声漫画】妖狐与天狗【莫逸工作室】【眠君】【作者】莫逸工作室&眠君"
  },
  {
    type: 3,
    url: "images/index/area/trsp/03.jpg",
    title: "祝各位阴阳师大人六一节日快乐【作者】"
  },
  {
    type: 3,
    url: "images/index/area/trsp/04.jpg",
    title: "【狗崽手书】樱色の梦【作者】@欧气零分偶偶偶"
  },
  {
    type: 3,
    url: "images/index/area/trsp/05.jpg",
    title:
      "大天狗X妖狐同人伪动态漫画【作者】绘音配音&印巴巴【作者】绘音配音&印巴巴"
  },
  {
    type: 3,
    url: "images/index/area/trsp/06.jpg",
    title: "源博雅与大天狗的惩罚游戏【作者】明矾矾矾矾"
  },
  {
    type: 3,
    url: "images/index/area/trsp/07.jpg",
    title: "当然是选择原谅她【作者】《阴阳师》手游"
  },
  {
    type: 3,
    url: "images/index/area/trsp/08.jpg",
    title: "O夫山泉广告时间，认真就输惹【作者】《阴阳师》手游"
  },
  {
    type: 4,
    url: "images/index/area/trxs/01.jpg",
    title: "华之乱#酒茨【作者】八点三十二分"
  },
  {
    type: 4,
    url: "images/index/area/trxs/02.jpg",
    title: "狗崽【作者】929****41"
  },
  {
    type: 4,
    url: "images/index/area/trxs/03.jpg",
    title: "指间冰雪（姑获鸟×雪女）【作者】瑶台镜"
  },
  {
    type: 4,
    url: "images/index/area/trxs/04.png",
    title: "阴阳师妖狐前身传记二【作者】Heyingyao"
  },
  {
    type: 4,
    url: "images/index/area/trxs/05.png",
    title: "阴阳师妖狐前身传记一【作者】Heyingyao"
  },
  {
    type: 4,
    url: "images/index/area/trxs/06.png",
    title: "阴阳寮的元宵节【作者】月朝歌＃阴阳师同人文大赛＃"
  },
  {
    type: 4,
    url: "images/index/area/trxs/07.jpg",
    title: "阴阳见闻录【作者】我初初见你"
  },
  {
    type: 4,
    url: "images/index/area/trxs/08.jpg",
    title: "万法皆空，有你无法【作者】小二上酒"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/01.jpg",
    title: "萌萌哒的小式神！【作者】会飞的鱼儿不想飞"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/02.jpg",
    title: "大天狗轻粘土【作者】包子酱Cion"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/03.jpg",
    title: "荒川之主轻粘土【作者】猫素粘土"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/04.jpg",
    title: "萤草超轻粘土【作者】美少女的魔法城堡"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/05.jpg",
    title: "一目连超轻粘土【作者】亭临"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/06.jpg",
    title: "小天狗和小崽崽【作者】紫衣烟染"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/07.jpg",
    title: "好可爱的山兔！【作者】狼烟KID痴迷32"
  },
  {
    type: 5,
    url: "images/index/area/gszmj/08.jpg",
    title: "式神软陶手工！【作者】阿染"
  }
];

$(function() {
  /* 面向对象 */
  (function() {
    function Banner($ul, $li, $tab) {
      this.$ul = $ul;
      this.$li = $li;
      this.$tab = $tab;
      this.width = $li.width();
      this.length = $li.length;
      this.time = null;
      this.index = 0;
    }
    Banner.prototype = {
      Init: function() {
        this.tabLiEvent();
        this.auto(); //图片自动轮播
        this.stop(); //鼠标移入，停止自动轮播
      },
      tabLiEvent: function() {
        var This = this;
        This.$tab.mouseenter(function() {
          clearTimeout(This.time);
          var $this = $(this);
          This.time = setTimeout(function() {
            var index = This.$tab.index($this); //index()方法传递jquery选择器，返回在原先集合中的索引位置
            $this
              .addClass("on")
              .siblings()
              .removeClass("on");
            This.$ul.stop().animate({ left: -(This.width * index) }, 500);
          }, 200);
        });
      },
      auto: function() {
        var This = this;
        This.time = setInterval(function() {
          This.index++;
          This.index %= This.length;
          This.$tab
            .eq(This.index)
            .addClass("on")
            .siblings()
            .removeClass("on");
          This.$ul.stop().animate({ left: -(This.width * This.index) }, 500);
        }, 3000);
      },
      stop: function() {
        var This = this;
        This.$ul.hover(
          function() {
            clearInterval(This.time);
          },
          function() {
            This.auto();
          }
        );
      }
    };
    window.Banner = Banner;

    function Info($ul, $li, $tab) {
      //私有属性继承
      Banner.call(this, $ul, $li, $tab);
    }
    //公有属性(原型)继承
    function Fn() {}
    Fn.prototype = Banner.prototype;
    Info.prototype = Fn.prototype;
    window.Info = Info;
  })();

  /* 角色切换 */
  (function() {
    var $view = $("#shishenAll").find(".main .view"), //式神部分
      $part = $("#shishenAll").find(".main .part"), //主角部分
      $oP = $("#shishenAll").find(".main .title p"), //标题
      $leftLi = $part.find(".left ul li"), //左边选项卡
      $rightLi = $part.find(".right ul li"); //右边内容

    /* 切换标题 */
    $oP.click(function() {
      var index = $(this).index(".main .title p");
      $(this)
        .addClass("on")
        .siblings()
        .removeClass("on");
      if (index) {
        /*$view.hide();
				 $part.show();*/
        $view.stop().fadeOut();
        $part.stop().fadeIn();
      } else {
        /*$part.hide();
				 $view.show();*/
        $part.stop().fadeOut();
        $view.stop().fadeIn();
      }
    });

    //选项卡切换
    $leftLi.click(function() {
      var index = $(this).index();
      $(this)
        .addClass("on")
        .siblings()
        .removeClass("on");
      $rightLi
        .eq(index)
        .fadeIn()
        .siblings()
        .fadeOut();
    });
  })();

  /* 游戏攻略 */
  (function() {
    var $raiders = $("#raiders"),
      $leftPic = $raiders.find(".left .pic"),
      $leftUl = $leftPic.find("ul"),
      $leftLi = $leftUl.find("li"),
      $leftSpan = $leftPic.find("p span");

    var inf = new Info($leftUl, $leftLi, $leftSpan);
    inf.Init();

    var $rightTitle = $raiders.find(".right .title"),
      $rightTab = $rightTitle.find(".tab"),
      $article = $raiders.find(".txt .article"),
      $rightUl = $article.find("ul");

    $rightUl.each(function(i) {
      //5个ul，i分别为：0、1、2、3、4
      var typeArr = ["新手", "式神", "斗技", "玩法", "御魂", "高阶"];
      // !i只有i为0的时候，才会通过，也就是第一个ul，即所有的类别都通过
      for (var j = 0, length = strateData.length; j < length; j++) {
        if (!i || new RegExp(i - 1).test(strateData[j].type)) {
          if (!i) {
            var index = strateData[j].type.slice(-1);
          } else {
            index = i - 1;
          }
          $(this).append(
            "<li>" +
              "<a href='#'>" +
              "<p>" +
              "<i></i>" +
              "<span>【" +
              typeArr[index] +
              "】 " +
              strateData[j].title +
              "</span>" +
              "</p>" +
              "<span>作者：" +
              strateData[j].author +
              "</span>" +
              "</a>" +
              "</li>"
          );
        }
      }
    });

    var info2 = new Info($article, $rightUl, $rightTab);
    info2.tabLiEvent();
  })();

  /* 同人专区 */
  (function() {
    var $area = $("#area"),
      $titleLi = $area.find(".title .tab ul li"),
      $wrap = $area.find(".pic .wrap"),
      $wrapUl = $wrap.find("ul");

    $wrapUl.each(function(i) {
      var num = 0;
      for (var j = 0, length = fanData.length; j < length; j++) {
        if (!i || fanData[j].type === i) {
          $(this).append(
            "<li>" +
              "<a href='#'>" +
              "<img src=" +
              fanData[j].url +
              " alt=''>" +
              "<span><i></i></span>" +
              "</a>" +
              "<p>" +
              fanData[j].title +
              "</p>" +
              "</li>"
          );
          num++;
          if (num === 8) break;
        }
      }
    });

    var info3 = new Info($wrap, $wrapUl, $titleLi);
    info3.tabLiEvent();
  })();
});

// 0 - 新手  1 - 式神  2 - 斗技  3 - 玩法  4 - 御魂   5 - 高阶
var strateData = [
  {
    type: "0235",
    title: "逆转的胜利！反击流式神阵容推荐！",
    author: "亓玉-JadeKee"
  },
  {
    type: "03",
    title: "秘闻！双奶过河童本十层",
    author: "亓玉-JadeKee"
  },
  {
    type: "123",
    title: "青行灯，美腿姐姐的全面剖析！",
    author: "亓玉-JadeKee"
  },
  {
    type: "12345",
    title: "尾速妖琴师 —— 好吧，再给你一次机会",
    author: "亓玉-JadeKee"
  },
  {
    type: "12345",
    title: "强势R卡，正面挑战SSR！",
    author: "亓玉-JadeKee"
  },
  {
    type: "023",
    title: "40级阴阳师的合理式神搭配",
    author: "亓玉-JadeKee"
  },
  {
    type: "1234",
    title: "小小黑反杀阵容+雨女十层攻略",
    author: "亓玉-JadeKee"
  },
  {
    type: "245",
    title: "进击的反击流！",
    author: "亓玉-JadeKee"
  },
  {
    type: "14",
    title: "“匣中少女”爱的~全方位评测",
    author: "亓玉-JadeKee"
  },
  {
    type: "0",
    title: "友谊的见证！好友羁绊打开方式",
    author: "亓玉-JadeKee"
  },
  {
    type: "03",
    title: "时间静止，开启魂10之路",
    author: "亓玉-JadeKee"
  },
  {
    type: "01",
    title: "阴阳师主流四治疗大盘点！",
    author: "亓玉-JadeKee"
  },
  {
    type: "04",
    title: "全【御魂】详解与欣赏",
    author: "亓玉-JadeKee"
  },
  {
    type: "01",
    title: "有奶便是娘！热门治疗式神推荐",
    author: "亓玉-JadeKee"
  },
  {
    type: "013",
    title: "鼠鼠VS兔兔？感受三兄弟的羁绊吧！",
    author: "亓玉-JadeKee"
  },
  {
    type: "03",
    title: "萌新专列！四星麒麟黑科技，发车~",
    author: "亓玉-JadeKee"
  },
  {
    type: "0",
    title: "萌新蜕变之路",
    author: "亓玉-JadeKee"
  },
  {
    type: "12",
    title: "黄金之羽【以津真天】暴力出击！",
    author: "亓玉-JadeKee"
  },
  {
    type: "12",
    title: "极致恐惧丶触之即死-3000分黑童子",
    author: "亓玉-JadeKee"
  },
  {
    type: "2",
    title: "日女巳时：转身~向后走~！",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "一场妥妥的战斗，【妖刀十层】再约~",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "星辰之境荒！破【河童副本】十层",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "日常御魂十层组队详细攻略",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "【河童本】第十层过关技巧！",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "【河童本】那位清流中走出的少年，愿和你一起努力",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "萌新专列！四星麒麟黑科技，发车~",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "【业原火】痴之阵推荐过关配置",
    author: "亓玉-JadeKee"
  },
  {
    type: "3",
    title: "为美腻小姐姐奋斗！平民过【妖刀本】",
    author: "亓玉-JadeKee"
  }
];

//白瑞龙部分
//右侧返回顶部
$(function() {
  $("#back_top")
    .mouseenter(function() {
      $("#back_top").animate({ bottom: "140px" }, 200);
    })
    .mouseleave(function() {
      $("#back_top").animate({ bottom: "128px" }, 200);
    });
  //	用户体验部分

  $(".footer_btn")
    .mouseenter(function() {
      $(".footer_btn .door").css("bottom", "-50px");
      $(".footer_btn img").css({
        top: "200px",
        opacity: "1"
      });
      $(".footer_btn .br").css("top", "150px");
      $(".footer_btn .txt2").css("opacity", "0");
    })
    .mouseleave(function() {
      $(".footer_btn .door").css("bottom", "");
      $(".footer_btn img").css({
        top: "",
        opacity: ""
      });
      $(".footer_btn .br").css("top", "222px");
      $(".footer_btn .txt2").css("opacity", "1");
    });
});

//分享部分高亮显示
$(function() {
  $(".share_to ul>li>a")
    .mouseenter(function() {
      $(this).css("opacity", "1");
    })
    .mouseleave(function() {
      $(this).css("opacity", "");
    });
});
//页面加载到底部时的动画效果未完成
$(document).ready(function() {
  $(window).scroll(function() {
    if (
      $(".share").offset().top - $(window).scrollTop() <=
      $(window).height()
    ) {
    //   alert('ok!!');
      $(".pageFooter_04 .txt1")
        .css("opacity", 1)
        .css("top", "100px");
      $(".pageFooter_04 .txt2")
        .css("opacity", 1)
        .css("top", "190px");
      $(".pageFooter_04 .br")
        .css("opacity", 1)
        .css("top", "222px");
    }
  });
});

//页面加载时底部动画
setTimeout(function() {
  $(".loadingBot").animate({ opacity: "0" }, 500);
  $(".pageFooter_04 .txt1").animate({ opacity: "1" });
}, 500);
