DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_update_cc_by_id//
CREATE PROCEDURE `up_pms_update_cc_by_id`(pCc_id VARCHAR(45), pCc_name VARCHAR(45), pCc_description VARCHAR(45),
                                    pUser VARCHAR(45), pDepartment VARCHAR(45), pUpdated_date DATETIME, pUpdated_by VARCHAR(45))
BEGIN
	UPDATE `pms_cost_center`
            SET
            `cc_name` = pCc_name,
            `cc_description` = pCc_description,
            `user_responsible` = pUser,
            `department` = pDepartment,
            `updated_date` = NOW(),
            `updated_by` = pUpdated_by

            WHERE `cc_id` = pCc_id;

END//

