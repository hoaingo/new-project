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
DROP PROCEDURE IF EXISTS up_pms_update_project_info//
CREATE PROCEDURE `up_pms_update_project_info`(pproject_id int(11),pproject_name varchar(200),pproject_owner int(11),pupdate_by varchar(45) )
BEGIN
	UPDATE `pms_project_info`
        SET		
                `project_name` = pproject_name,
                `project_owner` = pproject_owner,
                `update_date` = now(),
                `update_by` = pupdate_by
        WHERE   `project_id` = pproject_id;


END//