/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: May 25, 2018
 */

DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_permission_by_roleId//
CREATE PROCEDURE `up_pms_get_permission_by_roleId`(pRoleId int(11))
BEGIN
    SELECT 		t1.permission_id, t1.permission_name ,t1.permission_description ,t1.updated_date,t1.updated_by 
    FROM 		pms_permission t1
    INNER JOIN          pms_role_permission t2 
    ON 			t2.permission_id = t1.permission_id
    WHERE 		t2.role_id = pRoleId;    
   
END//