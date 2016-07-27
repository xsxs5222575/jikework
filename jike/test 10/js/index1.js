/*使用了单例模式
模块作用：
1.模块间的通信。
2.系统中某个类的对象只能存在一个。
3.保护自己的属性和方法。
注意事项：
1.注意this的使用。
2.闭包容易造成内存泄漏,不需要的赶快干掉。
3.注意new的成本。
*/

/**
 * js设计模式：单例模式
 * 功能:更多产品
 */
var moreProduct = {
    init: function(argument) {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.mpMouseEnter = $("#btn");
        me.mpMouseleave = $(".s_bdmainlink");
    },
    bind: function() {
        var me = this;
        me.mpMouseEnter.mouseenter(function() {
            $(".s_bdmainlink").show();
        });
        me.mpMouseleave.mouseleave(function() {
            $(".s_bdmainlink").hide();
        });
    }
};

/**
 * js设计模式：单例模式
 * 功能:更改皮肤
 */
var background = {
    init: function(argument) {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.mpMouseEnter = $("#skin");
        me.mpMouseleave = $(".s_skin");
    },
    bind: function() {
        var me = this;
        me.mpMouseEnter.mouseenter(function() {
            $(".s_skin").fadeIn();
        });
        me.mpMouseleave.mouseleave(function() {
            $(".s_skin").fadeOut();
        });
    }
};

$(window).scroll(function() {
    var t = $(this).scrollTop()
    if (t > 200) {
        $(".top").stop().fadeIn();
    } else {
        $(".top").stop().fadeOut();
    }
});

var msg = localStorage.getItem('my_bg') || 1;
var target = $("body").css("background-Image", 'url(img/bg' + msg + '\.jpg)');
target.innerHTML = msg;

for (var i = 1; i < 5; i++) {
    test(i);
}

function test(i) {
    $('#bg' + i).click(function() {
        $("body").css("background-Image", 'url(img/bg' + i + '\.jpg)');
        localStorage.setItem('my_bg', i);
    });
}

$("#tableFirst li").each(function(index) {
    var liNode = $(this);
    $(this).click(function() {
        $("#content1>div.content").removeClass("content");
        $("#content1>div").eq(index).addClass("content");
        $("#tableFirst li.tabin").removeClass("tabin");
        $(this).addClass("tabin");
    });
});

/**
 * js设计模式：外观模式
 * 功能:程序开始
 * 作用：网页加载依赖项在此统一载入，方便管理调度
 */
var start = (function() {
    //更多产品
    moreProduct.init();
    //皮肤
    background.init();
})();
