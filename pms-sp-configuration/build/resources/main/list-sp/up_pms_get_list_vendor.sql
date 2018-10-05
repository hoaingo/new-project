DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_vendor//
CREATE PROCEDURE `up_pms_get_list_vendor`()
BEGIN
	SELECT          `vendor_id`,
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
                        `web_url`,
                        `status`
	FROM `pms_vendor`;

END//

