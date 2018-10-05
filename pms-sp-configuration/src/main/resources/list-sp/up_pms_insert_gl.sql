CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_insert_gl`(pGl_id INT(11), 
                                                        pGl_code VARCHAR(45), 
                                                        pGl_name VARCHAR(45), 
                                                        pGl_description VARCHAR(45),
                                                        pGl_budget DOUBLE, 
                                                        pGl_owner VARCHAR(45), 
                                                        pExpense_type ENUM('CAPEX', 'OPEX'),
                                                        pAdditional_budget DOUBLE, 
                                                        pRelocate_budget DOUBLE,
                                                        pYear DOUBLE,
                                                        pCreated_date DATETIME, 
                                                        pCreated_by VARCHAR(45), 
                                                        pUpdated_date DATETIME, 
                                                        pUpdated_by VARCHAR(45))
BEGIN
    INSERT INTO pms_gl_account (gl_id, gl_code, gl_name, gl_description, gl_budget, gl_owner, expense_type, additional_budget, relocate_budget, year, created_date, created_by, updated_date, updated_by)
    VALUES  (pGl_id, pGl_code, pGl_name, pGl_description, pGl_budget, pGl_owner, pExpense_type, pAdditional_budget, pRelocate_budget, pYear, NOW(), pCreated_by, NOW(), pUpdated_by);

END