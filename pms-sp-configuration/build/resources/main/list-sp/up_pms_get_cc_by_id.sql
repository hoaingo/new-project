DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_cc_by_id//
CREATE PROCEDURE `up_pms_get_cc_by_id`(pCc_id VARCHAR(45))
BEGIN
	SELECT `cc_id`,
		`cc_name`,
                `cc_description`,
                `user_responsible`,
                `department`,
		`created_date`,
		`created_by`,
		`updated_date`,
		`updated_by`
	FROM `pms_cost_center`
    WHERE cc_id = pCc_id;

END//