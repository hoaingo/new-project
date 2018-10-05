/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  gohan.intern
 * Created: Apr 24, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_permission_by_id//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_update_permission_by_id`(pPermission_id INT(11),pPermission_name VARCHAR(50),pPermission_description Text, pUpdateBy VARCHAR(45))
BEGIN
	UPDATE `pms_permission`
		SET
		`permission_name` = pPermission_name,
		`permission_description` = pPermission_description,
		`updated_date` = NOW(),
		`updated_by` = pUpdateBy
        
		WHERE `permission_id` = pPermission_id;

END//