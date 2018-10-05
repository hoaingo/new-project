DELIMITER// 
DROP PROCEDURE IF EXISTS up_pms_delete_gl//
CREATE PROCEDURE `up_pms_delete_gl` (pGl_id INT(11))
BEGIN
	DELETE FROM `pms_gl_account`
		WHERE `gl_id` = pGl_id;
END//
