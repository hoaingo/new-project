DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_email//
CREATE PROCEDURE `up_pms_delete_email`(pEmail_template_id INT(11))
BEGIN
	DELETE FROM  `pms_email_template`		
		WHERE `email_template_id` = pEmail_template_id;
END//