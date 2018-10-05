DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_shipping_item//
CREATE PROCEDURE `up_pms_get_shipping_item`()
BEGIN
	SELECT 
		`shipping_address_id`,
		`country`,
		`company_name`,
		`street_address`,
                `contact`,
		`optional`,
		`postcode`,
		`city`,
                `state`,
		`created_by`,
		`created_date`
	
	FROM `pms_shipping_address`;
END//
