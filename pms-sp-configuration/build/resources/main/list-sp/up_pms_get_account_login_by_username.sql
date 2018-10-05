DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_account_login_by_username//
CREATE PROCEDURE `up_pms_get_account_login_by_username`(pUserName VARCHAR(45))
BEGIN
	SELECT `user_id`,
		`full_name`,
		`user_name`,
		`user_password`,
        `roles`,
        `department_name`
	FROM `pms_user_account` t1
    INNER JOIN pms_department t2 ON t2.department_id = t1.department
    WHERE user_name = pUserName;
END//