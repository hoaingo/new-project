DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_email//
CREATE PROCEDURE `up_pms_update_email`(pEmail_template_id INT(11), pEmail_template_name VARCHAR(100), pUpdate_date datetime, pUpdate_by VARCHAR(45), pSubject TEXT, pMessage TEXT)
BEGIN
	UPDATE `up_pms_update_email`
		SET
                    `email_template_id` = pEmail_template_id
		`email_template_name` = pEmail_template_name,
		`update_date` = NOW(),
		`update_by` = pUpdate_by,
                `subject` = pSubject ,
		`message` = pMessage,
	
        
		WHERE `email_template_id` = pEmail_template_id;

END//