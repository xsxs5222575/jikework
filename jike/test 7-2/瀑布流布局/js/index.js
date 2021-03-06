$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        window.onscroll = function() {
            var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }] };
            window.onscroll = function() {
                if (scrollside()) {
                    $.each(dataImg.data, function(index, value) {
                        var box = $("<div>").addClass("box").appendTo($("#container"));
                        var content = $("<div>").addClass("content").appendTo(box);
                        $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                    });
                    imgLocation();
                }
            }
        };
    });
});

$(window).resize(function() {
    location.reload();
});


function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}


function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取到第一张图片的宽度
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left

            })
            boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}
