DELIMITER// 
DROP PROCEDURE IF EXISTS up_pms_delete_department//
CREATE PROCEDURE `up_pms_delete_department` (pDept_ID INT(11))
BEGIN
	DELETE FROM `pms_department`
		WHERE `department_id` = pDept_ID;
END//