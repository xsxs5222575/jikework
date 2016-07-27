// index页面


// 载入时加载
$(function() {

    $.ajax({
        type: "POST",
        url: "/recommend",
        data: { newsclass: "推荐" },
        dataType: "json",
        success: function(data) {
            $(".content-con:gt(0)").remove();
            for (var index in data) {
                $(".content-con:first").clone(true).appendTo(".content");
                var newstitle = $(".content-con:last .content-title span");
                var newsimg = $(".content-con:last .content-pic img");
                var newscontent = $(".content-con:last .content-content p");
                var newsaddtime = $(".content-con:last .content-addtime span");
                newstitle.text(data[index].newstitle);
                newsimg.attr("src", data[index].newsimg);
                console.log(data[index].newsimg);
                newscontent.text(data[index].newscontent);
                newsaddtime.text(data[index].newsaddtime);
                $(".content-con:last").css("display", "block");
            };
        }
    });
});


// 另外一块儿

$(function() {
    // 转到后台
    $(".turn-to-back").click(function() {
        window.location.href = "background.html";
    });

    // 切换展示新闻
    // 点击效果
    $(".items-con .items").each(function() {
        $(this).click(function() {
            $(".text-underline").removeClass("text-underline");
            $(this).children("span").addClass("text-underline");
            // 所有新闻的载入信息
            var newsclass = $(this).children("span").text();
            $.ajax({
                type: "POST",
                url: "/recommend",
                data: { newsclass: newsclass },
                dataType: "json",
                success: function(data) {
                    $(".content-con:gt(0)").remove();
                    for (var index in data) {
                        $(".content-con:first").clone(true).appendTo(".content");
                        var newstitle = $(".content-con:last .content-title span");
                        var newsimg = $(".content-con:last .content-pic img");
                        var newscontent = $(".content-con:last .content-content p");
                        var newsaddtime = $(".content-con:last .content-addtime span");
                        newstitle.text(data[index].newstitle);
                        newsimg.attr("src", data[index].newsimg);
                        console.log(newsimg.attr);
                        newscontent.text(data[index].newscontent);
                        newsaddtime.text(data[index].newsaddtime);
                        $(".content-con:last").css("display", "block");
                    };
                }
            });


        });
    });


});
