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
DROP PROCEDURE IF EXISTS up_pms_update_role_by_id//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_update_role_by_id`(pRole_id INT(11), pRole_name VARCHAR(50), pRole_description Text, pUpdateBy VARCHAR(45))
BEGIN
	UPDATE `pms_role`
		SET
		`role_name` = pRole_name,
        `role_description` = pRole_description,
		`updated_date` = NOW(),
		`updated_by` = pUpdateBy
        
		WHERE `role_id` = pRole_id;

END//