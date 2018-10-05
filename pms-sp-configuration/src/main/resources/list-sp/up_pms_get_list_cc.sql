DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_cc//
CREATE PROCEDURE `up_pms_get_list_cc`()
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
	FROM `pms_cost_center`;

END//
