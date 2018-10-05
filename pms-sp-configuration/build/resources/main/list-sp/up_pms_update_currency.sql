DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_update_currency//
CREATE PROCEDURE `up_pms_update_currency`(pcurrency_code char(3),prate decimal(25,7), plast_update_by varchar(100))
BEGIN
		UPDATE `pms_currency`
		SET
		`rate` = prate,
		`last_update_by` = plast_update_by,
		`last_update_date` = CURRENT_TIMESTAMP
		WHERE `currency_code` = pcurrency_code;

END//