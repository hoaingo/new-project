DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_vendor//
CREATE PROCEDURE `up_pms_delete_vendor`(pVendor_id INT(11))
BEGIN
	DELETE FROM  `pms_vendor`		
		WHERE `vendor_id` = pVendor_id;
END//