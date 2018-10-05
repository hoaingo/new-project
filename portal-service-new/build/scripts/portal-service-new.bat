@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  portal-service-new startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

@rem Add default JVM options here. You can also use JAVA_OPTS and PORTAL_SERVICE_NEW_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto init

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto init

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:init
@rem Get command-line arguments, handling Windowz variants

if not "%OS%" == "Windows_NT" goto win9xME_args
if "%@eval[2+2]" == "4" goto 4NT_args

:win9xME_args
@rem Slurp the command line arguments.
set CMD_LINE_ARGS=
set _SKIP=2

:win9xME_args_slurp
if "x%~1" == "x" goto execute

set CMD_LINE_ARGS=%*
goto execute

:4NT_args
@rem Get arguments from the 4NT Shell from JP Software
set CMD_LINE_ARGS=%$

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\portal-service-new-0.0.1-SNAPSHOT.jar;%APP_HOME%\lib\pms-jdbc-1.0.0.jar;%APP_HOME%\lib\spring-boot-starter-data-ldap-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-security-ldap-4.2.6.RELEASE.jar;%APP_HOME%\lib\spring-cloud-starter-feign-1.3.0.RELEASE.jar;%APP_HOME%\lib\spring-cloud-starter-eureka-1.3.0.RELEASE.jar;%APP_HOME%\lib\spring-boot-starter-jdbc-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-security-messaging-4.2.6.RELEASE.jar;%APP_HOME%\lib\spring-boot-starter-cache-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-messaging-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-boot-starter-security-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-boot-starter-websocket-1.5.13.RELEASE.jar;%APP_HOME%\lib\pms-model.jar;%APP_HOME%\lib\spring-boot-starter-thymeleaf-1.5.13.RELEASE.jar;%APP_HOME%\lib\nekohtml-1.9.22.jar;%APP_HOME%\lib\web-push-3.1.0.jar;%APP_HOME%\lib\bcprov-jdk15on-1.59.jar;%APP_HOME%\lib\pms-redis-support.jar;%APP_HOME%\lib\spring-boot-starter-tomcat-1.5.13.RELEASE.jar;%APP_HOME%\lib\tomcat-embed-jasper-8.5.31.jar;%APP_HOME%\lib\mysql-connector-java-6.0.4.jar;%APP_HOME%\lib\spring-boot-starter-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-data-ldap-1.0.12.RELEASE.jar;%APP_HOME%\lib\spring-ldap-core-2.3.2.RELEASE.jar;%APP_HOME%\lib\spring-security-core-4.2.6.RELEASE.jar;%APP_HOME%\lib\spring-beans-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-context-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-core-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-tx-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-cloud-starter-1.2.0.RELEASE.jar;%APP_HOME%\lib\spring-cloud-netflix-core-1.3.0.RELEASE.jar;%APP_HOME%\lib\spring-web-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-cloud-commons-1.2.0.RELEASE.jar;%APP_HOME%\lib\feign-core-9.4.0.jar;%APP_HOME%\lib\feign-slf4j-9.4.0.jar;%APP_HOME%\lib\feign-hystrix-9.4.0.jar;%APP_HOME%\lib\spring-cloud-starter-ribbon-1.3.0.RELEASE.jar;%APP_HOME%\lib\spring-cloud-starter-archaius-1.3.0.RELEASE.jar;%APP_HOME%\lib\spring-boot-starter-web-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-cloud-netflix-eureka-client-1.3.0.RELEASE.jar;%APP_HOME%\lib\eureka-client-1.6.2.jar;%APP_HOME%\lib\eureka-core-1.6.2.jar;%APP_HOME%\lib\ribbon-eureka-2.2.2.jar;%APP_HOME%\lib\xstream-1.4.9.jar;%APP_HOME%\lib\tomcat-jdbc-8.5.31.jar;%APP_HOME%\lib\spring-jdbc-4.3.17.RELEASE.jar;%APP_HOME%\lib\aopalliance-1.0.jar;%APP_HOME%\lib\spring-expression-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-context-support-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-aop-4.3.17.RELEASE.jar;%APP_HOME%\lib\spring-security-config-4.2.6.RELEASE.jar;%APP_HOME%\lib\spring-security-web-4.2.6.RELEASE.jar;%APP_HOME%\lib\spring-websocket-4.3.17.RELEASE.jar;%APP_HOME%\lib\pms-sp-configuration.jar;%APP_HOME%\lib\thymeleaf-spring4-2.1.6.RELEASE.jar;%APP_HOME%\lib\thymeleaf-layout-dialect-1.4.0.jar;%APP_HOME%\lib\xercesImpl-2.11.0.jar;%APP_HOME%\lib\jcommander-1.72.jar;%APP_HOME%\lib\gson-2.8.4.jar;%APP_HOME%\lib\httpasyncclient-4.1.3.jar;%APP_HOME%\lib\guava-18.0.jar;%APP_HOME%\lib\jose4j-0.5.2.jar;%APP_HOME%\lib\tomcat-embed-core-8.5.31.jar;%APP_HOME%\lib\tomcat-embed-el-8.5.31.jar;%APP_HOME%\lib\tomcat-embed-websocket-8.5.31.jar;%APP_HOME%\lib\ecj-3.12.3.jar;%APP_HOME%\lib\spring-boot-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-boot-autoconfigure-1.5.13.RELEASE.jar;%APP_HOME%\lib\spring-boot-starter-logging-1.5.13.RELEASE.jar;%APP_HOME%\lib\snakeyaml-1.17.jar;%APP_HOME%\lib\spring-data-commons-1.13.12.RELEASE.jar;%APP_HOME%\lib\slf4j-api-1.7.25.jar;%APP_HOME%\lib\jcl-over-slf4j-1.7.25.jar;%APP_HOME%\lib\spring-cloud-context-1.2.0.RELEASE.jar;%APP_HOME%\lib\spring-security-rsa-1.0.3.RELEASE.jar;%APP_HOME%\lib\spring-security-crypto-4.2.6.RELEASE.jar;%APP_HOME%\lib\animal-sniffer-annotation-1.0.jar;%APP_HOME%\lib\hystrix-core-1.5.10.jar;%APP_HOME%\lib\ribbon-2.2.2.jar;%APP_HOME%\lib\ribbon-core-2.2.2.jar;%APP_HOME%\lib\ribbon-httpclient-2.2.2.jar;%APP_HOME%\lib\ribbon-loadbalancer-2.2.2.jar;%APP_HOME%\lib\rxjava-1.1.10.jar;%APP_HOME%\lib\archaius-core-0.7.4.jar;%APP_HOME%\lib\commons-configuration-1.8.jar;%APP_HOME%\lib\jackson-annotations-2.8.0.jar;%APP_HOME%\lib\jackson-core-2.8.11.jar;%APP_HOME%\lib\jackson-databind-2.8.11.1.jar;%APP_HOME%\lib\hibernate-validator-5.3.6.Final.jar;%APP_HOME%\lib\spring-webmvc-4.3.17.RELEASE.jar;%APP_HOME%\lib\jettison-1.3.7.jar;%APP_HOME%\lib\netflix-eventbus-0.3.0.jar;%APP_HOME%\lib\jsr311-api-1.1.1.jar;%APP_HOME%\lib\servo-core-0.10.1.jar;%APP_HOME%\lib\jersey-core-1.19.1.jar;%APP_HOME%\lib\jersey-client-1.19.1.jar;%APP_HOME%\lib\jersey-apache-client4-1.19.1.jar;%APP_HOME%\lib\httpclient-4.5.5.jar;%APP_HOME%\lib\guice-4.1.0.jar;%APP_HOME%\lib\woodstox-core-asl-4.4.1.jar;%APP_HOME%\lib\xmlpull-1.1.3.1.jar;%APP_HOME%\lib\xpp3_min-1.1.4c.jar;%APP_HOME%\lib\tomcat-juli-8.5.31.jar;%APP_HOME%\lib\javax.servlet-api-3.1.0.jar;%APP_HOME%\lib\thymeleaf-2.1.6.RELEASE.jar;%APP_HOME%\lib\groovy-2.4.15.jar;%APP_HOME%\lib\xml-apis-1.4.01.jar;%APP_HOME%\lib\httpcore-4.4.9.jar;%APP_HOME%\lib\httpcore-nio-4.4.6.jar;%APP_HOME%\lib\tomcat-annotations-api-8.5.31.jar;%APP_HOME%\lib\logback-classic-1.1.11.jar;%APP_HOME%\lib\jul-to-slf4j-1.7.25.jar;%APP_HOME%\lib\log4j-over-slf4j-1.7.25.jar;%APP_HOME%\lib\bcpkix-jdk15on-1.55.jar;%APP_HOME%\lib\HdrHistogram-2.1.9.jar;%APP_HOME%\lib\ribbon-transport-2.2.2.jar;%APP_HOME%\lib\javax.inject-1.jar;%APP_HOME%\lib\rxnetty-0.4.9.jar;%APP_HOME%\lib\commons-lang-2.6.jar;%APP_HOME%\lib\commons-collections-3.2.2.jar;%APP_HOME%\lib\netflix-commons-util-0.1.1.jar;%APP_HOME%\lib\netflix-statistics-0.1.1.jar;%APP_HOME%\lib\jsr305-3.0.1.jar;%APP_HOME%\lib\validation-api-1.1.0.Final.jar;%APP_HOME%\lib\jboss-logging-3.3.2.Final.jar;%APP_HOME%\lib\classmate-1.3.4.jar;%APP_HOME%\lib\stax-api-1.0.1.jar;%APP_HOME%\lib\netflix-infix-0.3.0.jar;%APP_HOME%\lib\commons-math-2.2.jar;%APP_HOME%\lib\servo-internal-0.10.1.jar;%APP_HOME%\lib\commons-codec-1.10.jar;%APP_HOME%\lib\stax-api-1.0-2.jar;%APP_HOME%\lib\stax2-api-3.1.4.jar;%APP_HOME%\lib\ognl-3.0.8.jar;%APP_HOME%\lib\javassist-3.21.0-GA.jar;%APP_HOME%\lib\unbescape-1.1.0.RELEASE.jar;%APP_HOME%\lib\logback-core-1.1.11.jar;%APP_HOME%\lib\rxnetty-contexts-0.4.9.jar;%APP_HOME%\lib\rxnetty-servo-0.4.9.jar;%APP_HOME%\lib\netty-codec-http-4.0.27.Final.jar;%APP_HOME%\lib\netty-transport-native-epoll-4.0.27.Final.jar;%APP_HOME%\lib\commons-jxpath-1.3.jar;%APP_HOME%\lib\joda-time-2.9.9.jar;%APP_HOME%\lib\antlr-runtime-3.4.jar;%APP_HOME%\lib\netty-codec-4.0.27.Final.jar;%APP_HOME%\lib\netty-handler-4.0.27.Final.jar;%APP_HOME%\lib\netty-common-4.0.27.Final.jar;%APP_HOME%\lib\netty-buffer-4.0.27.Final.jar;%APP_HOME%\lib\netty-transport-4.0.27.Final.jar;%APP_HOME%\lib\stringtemplate-3.2.1.jar;%APP_HOME%\lib\antlr-2.7.7.jar

@rem Execute portal-service-new
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %PORTAL_SERVICE_NEW_OPTS%  -classpath "%CLASSPATH%" com.pms.portal.UserApplication %CMD_LINE_ARGS%

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable PORTAL_SERVICE_NEW_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%PORTAL_SERVICE_NEW_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
