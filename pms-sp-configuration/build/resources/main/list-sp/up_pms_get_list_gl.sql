DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_gl//
CREATE PROCEDURE `up_pms_get_list_gl`()
BEGIN
	SELECT `gl_id`,
                `gl_name`,
                `gl_code`,
                `gl_description`,
                `gl_budget`,
                `gl_owner`,
                `expense_type`,
                `additional_budget`,
                `relocate_budget`,
                `year`,
                `created_date`,
                `created_by`,
                `updated_date`,
                `updated_by`
	FROM `pms_gl_account`;

END//