DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_department//
CREATE PROCEDURE `up_pms_get_list_department`()
BEGIN
    SELECT	`department_id`,
		`department_name`,
		`department_description`,
                `updated_date`,
                `updated_by`,
                `created_date`,
                `created_by`,
                `department_type`
    FROM 	`pms_department`;
END