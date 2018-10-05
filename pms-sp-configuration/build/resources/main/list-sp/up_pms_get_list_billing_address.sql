/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: Apr 3, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_billing_address//
CREATE PROCEDURE `up_pms_get_list_billing_address`()
BEGIN
	SELECT  `billing_id`,
                `country`,
                `company_name`,
                `address_1`,
                `contact_name`,
                `contact_email`,
                `postal_code`,
                `city`,
                `state`,
                `updated_date`,
                `updated_by`,
                `created_date`,
                `created_by`,
                `contact_phone`,
                `address_2`,
                `address_3`,
                `office_location`,
                `additional_information`,
                `office_location`
        FROM `pms_billing_address`;

END//
