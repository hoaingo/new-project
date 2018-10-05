DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_update_gl_by_id//
CREATE PROCEDURE `up_pms_update_gl_by_id`(pGl_id INT(11), 
                                        pGl_code VARCHAR(45), 
                                        pGl_name VARCHAR(45),
                                        pGl_description VARCHAR(45),
                                        pGl_budget DOUBLE, 
                                        pGl_owner VARCHAR(45), 
                                        pExpense_type ENUM('CAPEX','OPEX'),
                                        pAdditional_budget DOUBLE,
                                        pRelocate_budget DOUBLE, 
                                        pYear DOUBLE,
                                        pUpdated_date DATETIME, 
                                        pUpdated_by VARCHAR(45))
BEGIN
	UPDATE `pms_gl_account`
            SET
                `gl_name` = pGl_name,
                `gl_description` = pGl_description,
                `gl_budget` = pGl_budget,
                `gl_owner` = pGl_owner,
                `expense_type` = pExpense_type,
                `additional_budget` = pAdditional_budget,
                `relocate_budget` = pRelocate_budget,
                `year` = pYear,
                `updated_date` = NOW(),
                `updated_by` = pUpdated_by

            WHERE `gl_id` = pGl_id;
END//