DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_variable//
CREATE PROCEDURE `up_pms_get_list_variable`()
BEGIN
	SELECT          `variable_name`
			
	FROM `pms_system_variable`;

END//

