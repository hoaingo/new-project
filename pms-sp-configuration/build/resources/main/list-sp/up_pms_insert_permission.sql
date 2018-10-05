/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  gohan.intern
 * Created: Apr 24, 2018
 */

DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_permission//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_insert_permission`(pPermission_name VARCHAR(50), pPermission_description Text,
								pUpdated_by VARCHAR(45))
BEGIN
	INSERT INTO pms_permission (permission_name, permission_description, updated_date, updated_by)
    VALUES  (pPermission_name, pPermission_description, NOW(), pUpdated_by);
END//