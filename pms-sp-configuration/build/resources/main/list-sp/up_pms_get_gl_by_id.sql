DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_gl_by_id//
CREATE PROCEDURE `up_pms_get_gl_by_id`(pGl_id INT(11))
BEGIN
	SELECT `gl_id`,
		`gl_name`,
                `gl_code`,
                `gl_description`,
                `gl_budget`,
                `gl_owner`,
		`created_date`,
		`created_by`,
		`updated_date`,
		`updated_by`
	FROM `pms_gl_account`
    WHERE gl_id = pGl_id;

END//