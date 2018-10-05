DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_vendor_by_id//
CREATE PROCEDURE `up_pms_get_vendor_by_id`(pVendor_id INT(11))
BEGIN
	SELECT `vendor_id`,
			`vendor_name`,
			`vendor_score`,
			`product_type`,
			`vendor_address`,
			`vendor_contact`,
			`created_date`,
			`created_by`,
                        `currency`,
                        `description`,
                      
                        `city`,
                        `state`,
                        `country`,
                        `postal_code`,
                        `email`,
                        `phone`,
                        `fax`,
                        `web_url`
	FROM `pms_vendor`
    WHERE vendor_id = pVendor_id;

END//