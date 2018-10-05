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
DROP PROCEDURE IF EXISTS up_pms_get_list_role//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_list_role`()
BEGIN
	SELECT `role_id`,
		`role_name`,
		`role_description`,
		`updated_date`,
		`updated_by`
	FROM `pms_role`;

END//