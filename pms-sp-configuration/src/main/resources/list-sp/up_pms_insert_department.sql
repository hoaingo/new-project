DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_insert_department//
CREATE PROCEDURE `up_pms_insert_department`(pDept_ID INT(11), 
                                            pDept_Name VARCHAR(45), 
                                            pDept_Description VARCHAR(45),
                                            pCreatedDate DATETIME, 
                                            pCreatedBy VARCHAR(45),
                                            pDept_Type ENUM('PD_CLERK','CFO'))
BEGIN
    INSERT INTO pms_department (department_id, 
                                department_name, 
                                department_description, 
                                created_date, 
                                created_by, 
                                department_type)
    VALUES  (pDept_ID, pDept_Name, pDept_Description, NOW(), pCreatedBy, pDept_Type);
END//
