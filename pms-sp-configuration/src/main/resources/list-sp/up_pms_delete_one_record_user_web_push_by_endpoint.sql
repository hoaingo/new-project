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
DROP PROCEDURE IF EXISTS up_pms_delete_one_record_user_web_push_by_endpoint//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_delete_one_record_user_web_push_by_endpoint`(pEndPoint varchar(400))
BEGIN
			SET SQL_SAFE_UPDATES = 0;
					DELETE FROM `pms_user_web_push`
					WHERE pms_user_web_push.endpoint=pEndPoint;
                        SET SQL_SAFE_UPDATES = 1;       
END
