DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_email_by_id//
CREATE PROCEDURE `up_pms_get_email_by_id`(pEmail_template_id INT(11))
BEGIN
	SELECT `email_template_id`,
			`email_template_name`,
			`update_date`,
			`update_by`,
			`subject`,
			`message`
	FROM `pms_email_template`;
    WHERE email_template_id = pEmail_template_id;

END//