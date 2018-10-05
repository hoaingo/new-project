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
DROP PROCEDURE IF EXISTS up_pms_get_role_name//
CREATE PROCEDURE `up_pms_get_role_name`(plistRole varchar(45))
BEGIN
	SET @sqlStr = 'SELECT role_id, role_name , role_description,updated_date,updated_by
    FROM pms_role 
	WHERE role_id';
    
    SET @sqlStr = CONCAT(@sqlStr, ' IN (', IF(plistRole = '', "0", plistRole) , ')');
    
    PREPARE STMT FROM @sqlStr;
	EXECUTE STMT;
	DEALLOCATE PREPARE STMT ;
    

END//