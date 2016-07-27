$(document).ready(function() {

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


    // $('#skin').click(function() {
    //     $('.s_skin').fadeIn();
    // });


    // $(".s_skin").mouseleave(function() {
    //     $(this).fadeOut();
    // });


    // $('#btn').hover(function() {
    //     $('.s_bdmainlink').show();
    // });


    // $(".s_bdmainlink").mouseleave(function() {
    //     $(this).hide();
    // });

    $(window).scroll(function() {
        var t = $(this).scrollTop()
        if (t > 200) {
            $(".top").stop().fadeIn();
        } else {
            $(".top").stop().fadeOut();
        }
    });

    $(".top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000)
    });

    $("#tableFirst li").each(function(index) {
        var liNode = $(this);
        $(this).click(function() {
            $("#content1>div.content").removeClass("content");
            $("#content1>div").eq(index).addClass("content");
            $("#tableFirst li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
        });
    });
});
