/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  gohan.intern
 * Created: Apr 2, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_account//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_delete_account`(pUser_id INT(11))
BEGIN
	DELETE FROM  `pms_user_account`		
		WHERE `user_id` = pUser_id;

END//
