<%-- 
    Document   : login
    Created on : Mar 22, 2018, 1:51:58 PM
    Author     : darik.intern
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Procurement Management System</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    
    <link rel="stylesheet" href="${contextPath}/resources/css/bootstrap.min.css">
    
    <link rel="stylesheet" href="${contextPath}/resources/css/font-awesome.min.css">
     
    <link rel="stylesheet" href="${contextPath}/resources/css/font.css">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,400,700">
     
    <link rel="stylesheet" href="${contextPath}/resources/css/style.default.css" id="theme-stylesheet">
 
    <link rel="shortcut icon" href="img/favicon.ico">
     
      
  </head>
  <body>
    <div class="login-page">
      <div class="container d-flex align-items-center" >
        <div class="form-holder has-shadow">
          <div class="row">
           
            <div class="col-lg-6">
              <div class="info d-flex align-items-center">
                <div class="content">
                  <div class="logo">
                    <h1>Procurement Management System</h1>
                  </div>
                  
                </div>
              </div>
            </div>
               
            <div class="col-lg-6 bg-white">
              <div class="form d-flex align-items-center" >
                <div class="content">
                  <form id="loginForm" method="post" action="${contextPath}/login" class="form-validate">
                      <div style="color: red">${error}</div>
                    <div class="form-group">
                      <input id="login-username" type="text" name="username" required data-msg="Please enter your username" class="input-material">
                      
                      <label for="login-username" class="label-material">User Name</label>
                    </div>
                    <div class="form-group">
                      <input id="login-password" type="password" name="password" required data-msg="Please enter your password" class="input-material">
                      <label for="login-password" class="label-material">Password</label>
                    </div>
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                    <button type="submit" id="login" class="btn btn-primary">Login</button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="copyrights text-center">
        <p>Design by <a href="https://bootstrapious.com" class="external">Bootstrapious</a></p>
        <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
      </div>
      
    </div>
    <script src="${contextPath}/resources/js/jquery.min.js"></script>
    <script src="${contextPath}/resources/js/popper.min.js"> </script>
    <script src="${contextPath}/resources/js/bootstrap.min.js"></script>
    <script src="${contextPath}/resources/js/jquery.validate.min.js"></script>
    <script src="${contextPath}/resources/js/front.js"></script>
 
  
  </body>
</html>
