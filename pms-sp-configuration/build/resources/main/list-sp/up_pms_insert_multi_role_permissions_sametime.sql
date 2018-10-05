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
DROP PROCEDURE IF EXISTS up_pms_insert_multi_role_permissions_sametime//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_insert_multi_role_permissions_sametime`(pRoleID INT(11), pPermissions VARCHAR(1000), pLastUpdateBy VARCHAR(45))
BEGIN


  DECLARE permissionID varchar(150);

  WHILE pPermissions != '' DO

    SET permissionID = SUBSTRING_INDEX(pPermissions, ',', 1);    
    
    INSERT INTO `pms_role_permission`
		(`role_id`,
		`permission_id`,
		`updated_date`,
		`updated_by`)
		VALUES
		(pRoleID,
		permissionID,
		NOW(),
		pLastUpdateBy);

    IF LOCATE(',', pPermissions) > 0 THEN
      SET pPermissions = SUBSTRING(pPermissions, LOCATE(',', pPermissions) + 1);
    ELSE
      SET pPermissions = '';
    END IF;

  END WHILE;
END//