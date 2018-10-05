/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: Apr 17, 2018
 */

DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_department_by_id//
CREATE PROCEDURE `up_pms_get_department_by_id`(pdepartment_id INT(11))
BEGIN
	SELECT  `department_id`,
                `department_name`,
                `department_description`,
                `updated_date`,
                `updated_by`,
                `created_date`,
                `created_by`,
                `department_type`
	FROM    `pms_department`
        WHERE   `department_id` =  pdepartment_id; 

END//