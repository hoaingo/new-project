DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_email//
CREATE PROCEDURE `up_pms_get_list_email`()
BEGIN
	SELECT          `email_template_id`,
			`email_template_name`,
			`update_date`,
			`update_by`,
			`subject`,
			`message`
	FROM `pms_email_template`;

END//
