DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_pr_approve//
CREATE  PROCEDURE `up_pms_get_list_pr_approve`()
BEGIN
	SELECT 
		pr_id,
        level_approve,
        purchase_type,
        user_approver_id,
        update_date,
        update_by
    FROM pms_purchase_approver
    where  purchase_type = 'PR' 
    ORDER BY update_date DESC;
    

END//