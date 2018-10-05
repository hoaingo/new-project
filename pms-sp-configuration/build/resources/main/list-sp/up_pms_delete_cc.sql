DELIMITER// 
DROP PROCEDURE IF EXISTS up_pms_delete_cc//
CREATE PROCEDURE `up_pms_delete_cc` (pCc_id VARCHAR(45))
BEGIN
	DELETE FROM `pms_cost_center`
		WHERE `cc_id` = pCc_id;
END//
