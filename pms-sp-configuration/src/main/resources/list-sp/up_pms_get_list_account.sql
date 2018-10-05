DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_account//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_list_account`()
BEGIN
	SELECT   t1.department_name, 
			t2.user_id,
            t2.user_name,
            t2.full_name,
            t2.user_password,
            t2.department ,t2.roles,
            t2.maximum_approve_pr,
            t2.created_date,
            t2.created_by,
            t2.updated_date,
            t2.updated_by ,
            t2.maximum_approve_po
    FROM pms_department t1
    INNER JOIN    pms_user_account t2 
    ON  t1.department_id = t2.department;  

END//
