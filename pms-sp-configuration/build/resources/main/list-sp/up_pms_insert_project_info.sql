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
DROP PROCEDURE IF EXISTS up_pms_insert_project_info//
CREATE PROCEDURE `up_pms_insert_project_info`(pproject_name varchar(200),pproject_owner int(11),pcreated_by varchar(45))
BEGIN
	INSERT INTO `pms_project_info`
		(
		`project_name`,
		`project_owner`,
		`update_date`,
		`update_by`,
		`created_date`,
		`created_by`)
	VALUES
		(
		pproject_name,
		pproject_owner,
		null,
		'',
		now(),
		pcreated_by);

END//
