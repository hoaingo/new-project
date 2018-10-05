<%-- 
    Document   : menuTemplate
    Created on : Mar 15, 2018, 11:05:33 AM
    Author     : darik.intern
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>PMS Manager</title>
        <link rel="shortcut icon" href="#" />
        <link rel="stylesheet" href="resources/js/tablist-bootstrap/tablist.css">
        <link href="resources/js/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="resources/js/vendor/metisMenu/metisMenu.min.css" rel="stylesheet">
        <link href="resources/js/dist/css/sb-admin-2.css" rel="stylesheet">
        <link href="resources/js/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <script>
            var rootPath = "/${adminContextName}/";
        </script>


    </head>

    <body>

        <div id="wrapper">         
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">ADMIN</a>
                </div>           
                <ul class="nav navbar-top-links navbar-right">                 
                    <li class="dropdown open">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="true">
                            <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li class="divider"></li>
                            <li><a href="/logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>                      
                    </li>                 
                </ul>
            

                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li class="sidebar-search">
                                <div class="input-group custom-search-form">
                                    <input type="text" class="form-control" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                                <!-- /input-group -->
                            </li>

                            <c:if test="${not empty lists}">

                               
                                    <c:forEach var="menu" items="${lists}">
                                        <li><a id="${menu.menuId}"><i class="${menu.menuClass}"></i>${menu.menuTitle}</a></li>
                                    </c:forEach>
                             

                            </c:if>
                        </ul>
                    </div>                
                </div>             
            </nav>         
            <div id="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                                <div class="col-lg-12">
                                </div>
                                <div id="tabs">

                                </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>
</div>
<script src="resources/js/vendor/jquery/jquery.min.js"></script>
<script type="text/javascript" src="resources/js/vendor/jquery/jquery-ui.js"></script>
<script src="resources/js/vendor/metisMenu/metisMenu.min.js"></script>
<script src="resources/js/dist/js/sb-admin-2.js"></script>
<link href="resources/js/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<script src="resources/js/vendor/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/js/tablist-bootstrap/tablist.js"></script>
<script >

        var tabs = $('#tabs').bootstrapDynamicTabs().addTab({
            title: 'Home',
            html: '<h3>Home page procurement management system</h3> ',
            closable: false,
            icon: 'fa fa-home'
        });
        <c:forEach var="menu" items="${lists}">

                $('#${menu.menuId}').click(function () {
                    tabs.addTab({
                        title: "${menu.menuTitle}",
                        html: '<iframe id="frame" frameborder="0" border="0" cellspacing="0" style="border-style: none;" src="${menu.menuPath}" scrolling="no" width="100%"  >\n\
                </iframe>',
                        icon: 'fa fa-user'
                    });
                });
        </c:forEach>

</script>
</body>
</html>
