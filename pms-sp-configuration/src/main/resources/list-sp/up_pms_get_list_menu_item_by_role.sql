
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_menu_item_by_role//
CREATE PROCEDURE `up_pms_get_list_menu_item_by_role`(pMenuRoleId VARCHAR(500))
BEGIN

SET @sqlStr = 'SELECT DISTINCT   t4.id, t4.menu_title,t4.menu_class, t4.menu_path, t4.parent_id  FROM pms_role t1
	INNER JOIN pms_role_permission t2 on t1.role_id = t2.role_id
	INNER JOIN pms_permission_menu t3 ON t3.permission_id = t2.permission_id
	INNER JOIN pms_menu_item t4 ON t3.menu_id = t4.id
    

	WHERE  t1.role_id ' ;
    
    
    SET @sqlStr = CONCAT(@sqlStr, ' IN (', pMenuRoleId, ')');
    
    PREPARE STMT FROM @sqlStr;
	EXECUTE STMT;
	DEALLOCATE PREPARE STMT ;

END//
