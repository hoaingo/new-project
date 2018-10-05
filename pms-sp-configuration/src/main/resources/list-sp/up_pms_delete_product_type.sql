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
DROP PROCEDURE IF EXISTS up_pms_delete_product_type//
CREATE PROCEDURE `up_pms_delete_product_type`(pproduct_type_id int)
BEGIN
    DELETE FROM `pms_product_type`
    WHERE `product_type_id`= pproduct_type_id;
END//