DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_account_by_id//
CREATE PROCEDURE `up_pms_get_account_by_id`(pUserID INT(11))
BEGIN
	SELECT `user_id`,
		`user_name`,
		`user_password`,
		`department`,
		`roles`,
		`maximum_approve_pr`,
		`maximum_approve_po`,
		`created_date`,
		`created_by`,
		`updated_date`,
		`updated_by`
	FROM `pms_user_account`
    WHERE user_id = pUserID;

END//