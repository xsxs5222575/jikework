<?php   session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>后台管理</title>
    <!-- 移动设备 -->
    <meta content="width=device-width,initial-scale=1.0,user-scalable=0,maximum-scale=1.0" name="viewport" />
    <!-- iOS-控制苹果工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- iOS-控制苹果状态栏 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="balck">
    <!-- iOS-禁止把数字转化为拨号链接 -->
    <meta name="format-detection" content="telphone=no">
    <script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/manage.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/manage.css">
</head>

<body>
    <div class="wrapper">
        <header>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">ASIMS</a>
                    </div>

                    <div id="navbar" class="navbar-collapse collapse">
                        <div class="navber_user">欢迎<?php  echo $_SESSION['name'] ?>登录本系统</div>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="login.html">重新登录</a></li>
                            <li><a href="login.html">退出系统</a></li>
                            <li><a href="#">帮助</a></li>
                        </ul>
                        <form class="navbar-form navbar-right">
                            <input class="form-control" placeholder="Search..."  type="text">
                        </form>
                    </div>
                </div>
                <!-- 左侧导航 -->
                <div class="collapse navbar-collapse" id="news-hide">
                    <ul class="nav navbar-nav side-nav">
                        <li class="active">
                            <a href="#"><i class="icon-coffee"></i>类别管理</a>
                        </li>
                        <li>
                            <a href="#"><i class="icon-tasks"></i>新闻管理</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    <div class="main">
        <div class="container-fluid">
            <div class="nav-map">
                <!-- 顶部导航 -->
                <ol class="breadcrumb">
                    <li><a href="#">首页</a></li>
                    <li class="active"><a href="#">类别管理</a></li>
                </ol>
                <!-- 分类区 -->
                <div class="typePanel panel panel-default">
                    <div class="panel-heading">
                        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myNewModal">新增</button>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr class="success">
                                <td>编号</td>
                                <td>名称</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <!-- 新闻区 -->
                <div class="newPanel panel panel-default" style="display: none;">
                    <div class="panel-heading">
                        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myNewModal1">新增</button>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr class="success">
                                <td>编号</td>
                                <td>分类</td>
                                <td>标题</td>
                                <td>图片</td>
                                <td>正文</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- 新增分类 -->
    <div class="modal fade" id="myNewModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">新增分类</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group form-inline">
                        <label for="newTypeName">名称</label>
                        <input name="newTypeName" id="newTypeName" type="text" class="form-control" placeholder="分类名" value="" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" id="btnSaveType" class="btn btn-primary" data-dismiss="modal">保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- 修改分类 -->
    <div class="modal fade" id="myEditModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">修改分类</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group form-inline">
                        <label for="editTypeName">名称</label>
                        <input name="editTypeName" id="editTypeName" type="text" class="form-control " placeholder="分类名" value="" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" id="btnEditType" class="btn btn-primary" data-dismiss="modal">保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!--  新增新闻 -->
    <div class="modal fade" id="myNewModal1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">新增新闻</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group form-inline">
                        <label for="newsname">分类编号：</label>
                        <input name="newsname" id="newname" type="text" class="form-control" placeholder="分类编号  " value="" required> 输入（1、2、3）根据分类编号添加
                    </div>
                    <div class="form-group form-inline">
                        <label for="newstitle">标题：</label>
                        <input name="newstitle" id="newstitle" type="text" class="form-control" placeholder="标题" value="" required>
                    </div>
                    <div class="form-group form-inline">
                        <label for="newsimg">图片：</label>
                        <input name="newsimg" id="newsimg" type="text" class="form-control" placeholder="图片" value="" required>
                    </div>
                    <div class="form-group form-inline">
                        <label for="newsurl">正文：</label>
                        <input name="newsurl" id="newsurl" type="text" class="form-control" placeholder="正文" value="" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" id="btnSavenews" class="btn btn-primary" data-dismiss="modal">保存</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 修改新闻 -->
    <div class="modal fade" id="myEditModal1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">修改新闻</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group form-inline">
                        <label for="editnewsname">分类编号：</label>
                        <input name="editnewsname" id="editnewsname" type="text" class="form-control" placeholder="分类编号：" value="" required>
                    </div>
                    <div class="form-group form-inline">
                        <label for="editnewstitle">标题：</label>
                        <input name="editnewstitle" id="editnewstitle" type="text" class="form-control" placeholder="标题" value="" required>
                    </div>
                    <div class="form-group form-inline">
                        <label for="editnewsimg">图片：</label>
                        <input name="editnewsimg" id="editnewsimg" type="text" class="form-control" placeholder="图片" value="" required>
                    </div>
                    <div class="form-group form-inline">
                        <label for="editnewsurl">正文：</label>
                        <input name="editnewsurl" id="editnewsurl" type="text" class="form-control" placeholder="正文" value="" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" id="btnEditnews" class="btn btn-primary" data-dismiss="modal">保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
</body>

</html>
