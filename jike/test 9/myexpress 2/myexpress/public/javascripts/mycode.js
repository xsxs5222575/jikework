$(function() {
    // 点击胶囊对新闻进行操作

    $(".nav-header li").each(function(index) {
        $(this).click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".news-content>div").eq(index).addClass("display").siblings().removeClass("display");
        });
    });
    // 插入新闻表单提交的一些逻辑判断
    $(".insert-news .btn-success").click(function() {
        if ($("#newstitle").val() == "" | $("#newscontent").val() == "" | $("#newsaddtime").val() == "") {
            alert("请正确并完整填写内容");
            return false;
        } else {
            $.ajax({
                type: "POST",
                dataType:"text",
                url: "/insert",
                data: { newstitle: $("#newstitle").val(), newsimg: $("#newsimg").val(), newscontent: $("#newscontent").val(), newsclass: $("#newsclass").val(), newsaddtime: $("#newsaddtime").val() },
                success:function(data){
                    alert(data);
                }
            });
        }
    });

    // 所有新闻的载入信息
    $.ajax({
        type: "POST",
        url: "/all",
        dataType: "json",
        success: function(data) {
            for (var index in data) {
                // console.log(index);
                $(".all-news .news-items-con .table-striped").append("<tr></tr>");
                var newadditems = $(".all-news .news-items-con .table-striped tbody tr:last");
                newadditems.addClass("primary");
                console.log(data[index].newsid);
                $("<td></td>").appendTo(newadditems).text(data[index].newsid);
                $("<td></td>").appendTo(newadditems).text(data[index].newstitle);
                $("<td></td>").appendTo(newadditems).text(data[index].newscontent);
                $("<td></td>").appendTo(newadditems).text(data[index].class);
                $("<td></td>").appendTo(newadditems).text(data[index].addtime);
                $("<td></td>").appendTo(newadditems);
                var btn = $(".all-news .news-items-con .table-striped tbody tr:last td:last");
                $("<div></div>").addClass("btn btn-sm btn-warning delete-btn").appendTo(btn).text("删除该新闻");
            }
            $(".delete-btn").each(function() {
                $(this).click(function(index) {
                    var id = $(this).parent().siblings("td").first().text();
                    console.log(id);
                    $.ajax({
                        type: "POST",
                        url: "/delete",
                        data: { "newsid":id },
                        beforeSend: function() {
                            if (confirm("确定要删除吗")) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        success: window.location.reload(),

                    });
                });
            });
            // $("tr").css("height","40px");
        }
    });


// 后台：载入所有的新闻信息
    $(".nav-all-news").click(function() {
        $.ajax({
            type: "POST",
            url: "/all",
            dataType: "json",
            success: function(data) {
            	$(".table tbody tr").remove();
                for (var index in data) {
                    // console.log(index);
                    $(".all-news .news-items-con .table-striped").append("<tr></tr>");
                    var newadditems = $(".all-news .news-items-con .table-striped tbody tr:last");
                    newadditems.addClass("primary");
                    console.log(data[index].newsid);
                    $("<td></td>").appendTo(newadditems).text(data[index].newsid);
                    $("<td></td>").appendTo(newadditems).text(data[index].newstitle);
                    $("<td></td>").appendTo(newadditems).text(data[index].newscontent);
                    $("<td></td>").appendTo(newadditems).text(data[index].class);
                    $("<td></td>").appendTo(newadditems).text(data[index].addtime);
                    $("<td></td>").appendTo(newadditems);
                    var btn = $(".all-news .news-items-con .table-striped tbody tr:last td:last");
                    $("<div></div>").addClass("btn btn-sm btn-warning delete-btn").appendTo(btn).text("删除该新闻");
                }
                $(".delete-btn").each(function() {
                    $(this).click(function(index) {
                        var id = $(this).parent().siblings("td").first().text();
                        console.log(id);
                        $.ajax({
                            type: "POST",
                            url: "/delete",
                            data: { newsid:id },
                            beforeSend: function() {
                                if (confirm("确定要删除吗")) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            success: window.location.reload(),
                        });
                    });
                });
            }
        });
    });

});
