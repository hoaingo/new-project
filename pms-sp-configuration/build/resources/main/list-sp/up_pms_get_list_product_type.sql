/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: Apr 13, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_product_type//
CREATE PROCEDURE `up_pms_get_list_product_type`()
BEGIN
	SELECT 	`product_type_id`,
		`product_type_name`,
		`product_type_description`,
		`update_date`,
		`update_by`
        FROM    `pms_product_type`;

END//
