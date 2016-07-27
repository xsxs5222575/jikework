$(document).ready(function() {
    // 默认加载
    $(window).load(function() {
        //加载类别
        loadType();
    });

    // 导航切换
    $(".side-nav li").click(function(event) {
        //样式控制
        $(this).addClass('active').siblings().removeClass('active');

        //导航控制
        var navName = $.trim($(this).text());
        $(".breadcrumb li a").eq(1).text(navName);

        //数据加载
        if (navName == '类别管理') {
            //显隐控制
            $(".typePanel").show();
            $(".newPanel").hide();

            //加载数据
            loadType();
        } else {
            //显隐控制
            $(".typePanel").hide();
            $(".newPanel").show();

            //加载数据
            loadNews(-1);
        }
    });

    //绑定事件
    function bindEvent() {
        //修改分类
        $(".editType").click(function(event) {
            $("#editTypeName").attr("data-id", this.attributes['data-id'].value);
            $("#editTypeName").val(this.attributes['data-name'].value);
        });

        //删除分类
        $(".delType").click(function(event) {
            var r = confirm("是否确认删除！");
            if (r == true) {
                $.ajax({
                    url: './data/typesDel.php',
                    type: 'get',
                    dataType: "json",
                    data: {
                        id: this.attributes['data-id'].value,
                    },
                    success: function(data) {
                        //加载类别
                        loadType();
                    },
                    error: function(e) {
                        //加载类别
                        loadType(-1);
                    }
                })
            }
        });
    }

    //修改分类
    $("#btnEditType").click(function(event) {
        var typeName = $("#editTypeName").val();
        if (!typeName) {
            alert("请输入分类名称！");
            return;
        }

        $.ajax({
            url: './data/typesEdit.php',
            type: 'get',
            dataType: "json",
            data: {
                id: $("#editTypeName").attr("data-id"),
                typeName: $("#editTypeName").val()
            },
            success: function(data) {
                //加载类别
                loadType();
            },
            error: function(e) {
                //加载类别
                loadType();
            }
        })
    });

    // 加载分类
    function loadType() {
        $.ajax({
            url: "./data/types.php",
            dataType: "json",
            type: 'get',
            success: function(data) {
                var cnt = 0;
                var parent = $(".typePanel table tbody");
                //初始化
                parent.html("");

                //加载新的内容
                var content;
                $.each(data, function(index, el) {
                    content = "<tr>";
                    content = content + "<td>" + el.id + "</td>";
                    content = content + "<td>" + el.name + "</td>";
                    content = content + "<td>" + "<button type='button' class='editType btn btn-info btn-sm' data-id=" + el.id + " data-name=" + el.name + " data-toggle='modal'" + " data-target='#myEditModal'>修改</button>" + "<button type='button' class='delType btn btn-warning btn-sm' data-id=" + el.id + ">删除</button>" + "</td>";
                    content = content + "</tr>";
                    parent.append(content);
                });

                // 绑定事件
                bindEvent();
            },
            error: function(e) {
                alert(e);
            }
        });
    }


    //新增分类
    $("#btnSaveType").click(function(event) {
        var typeName = $("#newTypeName").val();
        if (!typeName) {
            alert("请输入分类名称！");
            return;
        }

        $.ajax({
            url: './data/typesSave.php',
            type: 'get',
            dataType: "json",
            data: {
                typeName: $("#newTypeName").val()
            },
            success: function(data) {
                //加载类别
                loadType();
            },
            error: function(e) {
                //加载类别
                loadType();
           
            }
        })

    });



    //绑定事件
    function bindEventnew() {
        //修改新闻
        $(".editType1").click(function(event) {
            $("#editnewsname").attr("data-id", this.attributes['data-id'].value);
            $("#editnewsname").val(this.attributes['data-typeID'].value);
            $("#editnewstitle").attr("data-id", this.attributes['data-id'].value);
            $("#editnewstitle").val(this.attributes['data-title'].value);
            $("#editnewsimg").attr("data-id", this.attributes['data-id'].value);
            $("#editnewsimg").val(this.attributes['data-img'].value);
            $("#editnewsurl").attr("data-id", this.attributes['data-id'].value);
            $("#editnewsurl").val(this.attributes['data-url'].value);

        });

        //删除新闻
        $(".delType1").click(function(event) {
            var r = confirm("是否确认删除！");
            if (r == true) {
                $.ajax({
                    url: './data/newsDel.php',
                    type: 'get',
                    dataType: "json",
                    data: {
                        id: this.attributes['data-id'].value,
                    },
                    success: function(data) {
                        //加载新闻
                         loadNews(-1);
                    },
                    error: function(e) {
                         //加载新闻
                       loadNews(-1);
                    }
                })
            }
        });
    }


    //修改新闻
    $("#btnEditnews").click(function(event) {
        var typeID = $("#editnewsname").val();
        var title = $("#editnewstitle").val();
        var img = $("#editnewsimg").val();
        var url = $("#editnewsurl").val();
        if (!typeID) {
            alert("请输入分类编号！");
            return;
        } else if (!title) {
            alert("请输入标题！");
            return;
        } else if (!img) {
            alert("请输入图片！");
            return;
        } else if (!url) {
            alert("请输入正文！");
            return;
        }

        $.ajax({
            url: './data/newsEdit.php',
            type: 'get',
            dataType: "json",
            data: {
                id: $("#editnewsname").attr("data-id"),
                typeID: $("#editnewsname").val(),
                title: $("#editnewstitle").val(),
                img: $("#editnewsimg").val(),
                url: $("#editnewsurl").val()
            },
            success: function(data) {
                 //加载新闻
               loadNews(-1);
            },
            error: function(e) {
                //加载新闻
             loadNews(-1);
            }
        })
    });

    //加载新闻
    function loadNews(t) {
     
        $.ajax({
            url: "./data/news.php",
            dataType: "json",
            data: {
                id: t
            },
            type: 'get',
            success: function(data) {
                var parent = $(".newPanel table tbody");
                //初始化
                parent.html("");

                //加载新的内容
                var content;
                var index = 0;

                $.each(data, function(index, el) {

                    index++;
                    content = "<tr>";
                    content = content + "<td>" + index + "</td>";
                    content = content + "<td>" + el.typeName + "</td>";
                    content = content + "<td>" + el.title + "</td>";
                    content = content + "<td>" + el.img + "</td>";
                    content = content + "<td>" + el.url + "</td>";
                    content = content + "<td>" + "<button type='button' class='editType1 btn btn-info btn-sm' data-id=" + el.id + "  data-typeID=" + el.typeID + "  data-title=" + el.title + "   data-img=" + el.img + "  data-url=" + el.url + " data-toggle='modal'" + " data-target='#myEditModal1'>修改</button>" + "<button type='button' class='delType1 btn btn-warning btn-sm' data-id=" + el.id + ">删除</button>" + "</td>";
                    content = content + "</tr>";
                    parent.append(content);
                });
                // 绑定新闻事件
                bindEventnew();
            },
            error: function(e) {
                alert(e);
            }
        });
    }


    //新增新闻
    $("#btnSavenews").click(function(event) {
        var newname = $("#newname").val();
        var newstitle = $("#newstitle").val();
        var newsimg = $("#newsimg").val();
        var newsurl = $("#newsurl").val();

        if (!newname) {
            alert("请输入分类编号！");
            return;
        } else if (!newstitle) {
            alert("请输入标题！");
            return;
        } else if (!newsimg) {
            alert("请输入图片！");
            return;
        } else if (!newsurl) {
            alert("请输入正文！");
            return;
        }

        $.ajax({
            url: './data/newsSave.php',
            type: 'get',
            dataType: "json",
            data: {
                newname: $("#newname").val(),
                newstitle: $("#newstitle").val(),
                newsimg: $("#newsimg").val(),
                newsurl: $("#newsurl").val()
            },
            success: function(data) {
                //加载新闻
             loadNews(-1);
             
            },
            error: function(e) {
                   //加载新闻
             loadNews(-1);
            }
        })
    });
});
