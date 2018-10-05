/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  mark.intern
 * Created: Apr 24, 2018
 */

DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_search_shipping_by_name//
CREATE PROCEDURE `up_pms_search_shipping_by_name`(shipping_name varchar(50))
BEGIN
	SELECT * FROM pms_shipping_address WHERE 
                LOWER(country) LIKE CONCAT('%', shipping_name , '%') 
                OR LOWER(company_name) LIKE CONCAT('%', shipping_name , '%')
                OR LOWER(street_address) LIKE CONCAT('%', shipping_name , '%')
                OR LOWER(city) LIKE CONCAT('%', shipping_name , '%');

END//