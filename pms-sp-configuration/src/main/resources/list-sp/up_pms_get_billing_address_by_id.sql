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
DROP PROCEDURE IF EXISTS up_pms_get_billing_address_by_id//
CREATE PROCEDURE `up_pms_get_billing_address_by_id`(pbilling_id int(11))
BEGIN
	SELECT  `billing_id`,
                `country`,
                `company_name`,
                `street_address`,
                `contact`,
                `optional`,
                `postcode`,
                `city`,
                `state`,
                `updated_date`,
                `updated_by`,
                `created_date`,
                `created_by`,
                `status`
	FROM    `pms_billing_address`
        WHERE `billing_id` =  pbilling_id; 

END//