/**
 * Author:  gohan.intern
 * Created: Apr 27, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_role_permissions_by_roles//
CREATE PROCEDURE `up_pms_get_role_permissions_by_roles`(pRoles VARCHAR(500))
BEGIN

	SET @sqlStr = 'SELECT DISTINCT t3.permission_id, t3.permission_name, t3.permission_description, t3.updated_date, t3.updated_by FROM pms_role t1
	INNER JOIN pms_role_permission t2 ON t2.role_id = t1.role_id
	INNER JOIN pms_permission t3 ON t3.permission_id = t2.permission_id
	WHERE t1.role_id';

    SET @sqlStr = CONCAT(@sqlStr, ' IN (', pRoles, ')');
    
    PREPARE STMT FROM @sqlStr;
	EXECUTE STMT;
	DEALLOCATE PREPARE STMT ;
    
   
END//