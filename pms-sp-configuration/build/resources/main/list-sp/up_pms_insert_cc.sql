DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_insert_cc//
CREATE PROCEDURE `up_pms_insert_cc`(pCc_id VARCHAR(45), pCc_name VARCHAR(45), pCc_description VARCHAR(45),
                                    pUser VARCHAR(45), pDepartment VARCHAR(45), pCreated_date DATETIME, pCreated_by VARCHAR(45))
BEGIN
    INSERT INTO pms_cost_center (cc_id, cc_name, cc_description, user_responsible, department, created_date, created_by)
    VALUES  (pCc_id, pCc_name, pCc_description, pUser, pDepartment , NOW(), pCreated_by);

END//
