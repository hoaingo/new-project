/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  gohan.intern
 * Created: Mar 30, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_account//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_insert_account`(pUser_name Varchar(45), pFull_Name VARCHAR(100),
							    pPassword VARCHAR(150),pDepartment VARCHAR(45), 
                                                            pRoles VARCHAR(45), pMaximum_approve_pr int(11),
                                                            pMaximum_approve_po int(11), pCreated_by VARCHAR(45), 
                                                            pUpdated_by VARCHAR(45))
BEGIN
	INSERT INTO pms_user_account(
					user_name, full_name, user_password, department, 
                    roles, maximum_approve_pr, maximum_approve_po, 
                    created_date, created_by, updated_date, updated_by)
    VALUES  (pUser_name, pFull_name, pPassword, pDepartment, 
			 pRoles, pMaximum_approve_pr, pMaximum_approve_po, 
             NOW(), pCreated_by, NOW(), pUpdated_by);
END//
