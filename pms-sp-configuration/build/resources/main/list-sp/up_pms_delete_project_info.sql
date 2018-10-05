/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: May 21, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_project_info//
CREATE PROCEDURE `up_pms_delete_project_info`(pproject_id int(11))
BEGIN
    DELETE FROM `pms_project_info`
    WHERE `project_id` = pproject_id;
END//
