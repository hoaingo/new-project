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
DROP PROCEDURE IF EXISTS up_pms_get_list_project_info//
CREATE PROCEDURE `up_pms_get_list_project_info`()
BEGIN
        SELECT      t1.project_id as projectId,
                    t1.project_name as projectName,
                    t1.project_owner as projectOwner,
                    t1.update_date as updatedDate,
                    t1.update_by as updatedBy,
                    t1.created_date as createdDate,
                    t1.created_by as createdBy,
                    t2.user_name as userName
        FROM        pms_project_info t1
	LEFT JOIN  pms_user_account t2 
        ON          t2.user_id = t1.project_owner;

END//
