DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_shipping//
CREATE PROCEDURE `up_pms_delete_shipping`(pShippingAddressID INT(11))
BEGIN
	DELETE FROM  `pms_shipping_address`		
		WHERE `shipping_address_id` = pShippingAddressID;
END//
