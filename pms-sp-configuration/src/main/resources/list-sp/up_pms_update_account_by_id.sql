DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_account_by_id//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_update_account_by_id`(pUserID INT(11),pUserName VARCHAR(45), pFullName VARCHAR(100),
																	pPassword VARCHAR(150), pDepartment VARCHAR(45),
                                                                    pRoles VARCHAR(45), pMaxApprovePR INT(11),
                                                                    pMaxApprovePO INT(11), pUpdateBy VARCHAR(45))
BEGIN
	UPDATE `pms_user_account`
		SET
		`user_name` = pUserName,
        `full_name` = pFullName,
		`user_password` = IFNULL(pPassword, user_password),
		`department` = pDepartment,
		`roles` = pRoles,
		`maximum_approve_pr` = pMaxApprovePR,
		`maximum_approve_po` = pMaxApprovePO,
		`updated_date` = NOW(),
		`updated_by` = pUpdateBy
        
		WHERE `user_id` = pUserID;

END//