@echo off 
CLS
:MENU
ECHO.
ECHO ...............................................
ECHO PRESS the number: 1, 2,.. to open server, or 0 to EXIT.
ECHO ...............................................
ECHO.
ECHO  0 - EXIT
ECHO  1 - Eureka
ECHO  2 - Portal
ECHO  3 - Cost Center
ECHO  4 - Email
ECHO  5 - General Ledger (GL)
ECHO  6 - Invoice
ECHO  7 - Item
ECHO  8 - Notification
ECHO  9 - Permission
ECHO 10 - Role
ECHO 11 - User
ECHO 12 - Product Type
ECHO 13 - Vendor
ECHO 14 - Purchase Request (PR)
ECHO 15 - Purchase Order (PO)
ECHO 16 - Shipping
ECHO 17 - Billing
ECHO 18 - RUN ALL

REM start cmd.exe @cmd /k eureka-server

REM TIMEOUT /T 5

SET /P M=choose NUMBER then press ENTER:
IF %M%==0 GOTO :EOF 
IF %M%==1 GOTO EUREKA
IF %M%==2 GOTO PORTAL
IF %M%==3 GOTO COST_CENTER
IF %M%==4 GOTO EMAIL
IF %M%==5 GOTO GL
IF %M%==6 GOTO INVOICE
IF %M%==7 GOTO ITEM
IF %M%==8 GOTO NOTIFICATION
IF %M%==9 GOTO PERMISSION
IF %M%==10 GOTO ROLE
IF %M%==11 GOTO USER
IF %M%==12 GOTO PRODUCT_TYPE
IF %M%==13 GOTO VENDOR
IF %M%==14 GOTO PR
IF %M%==15 GOTO PO
IF %M%==16 GOTO SHIPPING
IF %M%==17 GOTO BILLING
IF %M%==18 GOTO RUN_ALL

:EUREKA
start cmd.exe @cmd /k "eureka-server.bat"
GOTO MENU
:PORTAL
start cmd.exe @cmd /k "portal-service-new.bat"
GOTO MENU
:COST_CENTER
start cmd.exe @cmd /k "pms-cost-center-service.bat"
GOTO MENU
:EMAIL
start cmd.exe @cmd /k "pms-email-service.bat"
GOTO MENU
:GL
start cmd.exe @cmd /k "pms-general-ledger-service.bat"
GOTO MENU
:INVOICE
start cmd.exe @cmd /k "pms-invoice-service.bat"
GOTO MENU
:ITEM
start cmd.exe @cmd /k "pms-item-service.bat"
GOTO MENU
:NOTIFICATION
start cmd.exe @cmd /k "pms-notification-service.bat"
GOTO MENU
:PERMISSION
start cmd.exe @cmd /k "pms-permission-service.bat"
GOTO MENU
:ROLE
start cmd.exe @cmd /k "pms-role-service.bat"
GOTO MENU
:USER
start cmd.exe @cmd /k "pms-user-service.bat"
GOTO MENU
:PRODUCT_TYPE
start cmd.exe @cmd /k "pms-product-type-service.bat"
GOTO MENU
:VENDOR
start cmd.exe @cmd /k "pms-vendor-service.bat"
GOTO MENU
:PR
start cmd.exe @cmd /k "pms-purchase-request-service.bat"
GOTO MENU
:PO
start cmd.exe @cmd /k "pms-purchase-order-service.bat"
GOTO MENU
:SHIPPING
start cmd.exe @cmd /k "pms-shipping-service.bat"
GOTO MENU
:BILLING
start cmd.exe @cmd /k "pms-billing-service.bat"
GOTO MENU
:RUN_ALL
@echo off 
start cmd.exe @cmd /k eureka-server

TIMEOUT /T 5

@echo off
SET count=1
FOR /f "tokens=*" %%G IN ('dir /b') DO (call :subroutine "%%G")
GOTO :eof

:subroutine
if not %1 == "eureka-server.bat" if not %1 == "RUN-SELECT.bat" start cmd.exe @cmd /k %1
 
 set /a count+=1
 GOTO :eof
 


