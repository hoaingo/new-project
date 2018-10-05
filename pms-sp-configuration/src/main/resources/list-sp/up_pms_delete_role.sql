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
DROP PROCEDURE IF EXISTS up_pms_delete_role//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_delete_role`(pRole_id INT(11))
BEGIN
	DELETE FROM  `pms_role`		
		WHERE `role_id` = pRole_id;

END//