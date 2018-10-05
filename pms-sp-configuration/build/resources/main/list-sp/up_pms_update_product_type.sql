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
DROP PROCEDURE IF EXISTS up_pms_update_product_type//
CREATE PROCEDURE `up_pms_update_product_type`(pproduct_type_id int,ptype_name VARCHAR(45),ptype_description varchar(45),pupdate_by varchar(45) )
BEGIN
	UPDATE `pms_product_type`
        SET
            `product_type_name` = ptype_name,
            `product_type_description` = ptype_description,
            `update_date` = now(),
            `update_by` = pupdate_by
        WHERE `product_type_id` = pproduct_type_id;


END//