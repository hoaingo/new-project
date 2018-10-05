DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_email//
CREATE PROCEDURE `up_pms_insert_email`()
BEGIN
	INSERT INTO pms_email_template (email_template_name,update_date,update_by,subject,message)
        VALUES  (pEmail_template_name, pUpdate_date, pUpdate_by, pSubject, pMessage);
END//