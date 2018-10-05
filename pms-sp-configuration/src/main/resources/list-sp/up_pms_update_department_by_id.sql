DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_update_department_by_id//
CREATE PROCEDURE `up_pms_update_department_by_id`(pDept_ID INT(11), 
                                                    pDept_Name VARCHAR(45), 
                                                    pDept_Description VARCHAR(45),
                                                    pUpdatedDate DATETIME, 
                                                    pUpdatedBy VARCHAR(45),
                                                    pDept_Type ENUM('PD_CLERK','CFO'))
BEGIN
	UPDATE `pms_department`
            SET
            `department_name` = pDept_Name,
            `department_description` = pDept_Description,
            `updated_date` = NOW(),
            `updated_by` = pUpdatedBy,
            `department_type` = pDept_Type
            WHERE `department_id` = pDept_ID;
END//

