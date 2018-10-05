DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_pr_for_review//
CREATE PROCEDURE `up_pms_get_pr_for_review`(pUserID INT(11), pPurchaseType ENUM('PR','PO'))
BEGIN
	SELECT 
		t2.pr_id
        ,t1.pr_code
        ,t1.total_price
        ,t1.total_tax
        ,t1.priority
        ,t1.status
        ,t1.required_by
        ,t1.product_type
        ,t1.product_sub_type
        ,t1.purpose
        ,t1.level_processing
        ,t1.created_date
        ,t1.created_by
    FROM pms_purchase_request t1
    INNER JOIN pms_purchase_approver t2 ON t2.pr_id = t1.pr_id AND t2.level_approve = t1.level_processing AND t2.purchase_type = pPurchaseType
    WHERE t2.user_approver_id = pUserID AND t2.user_approver_id NOT IN (SELECT user_approved_id FROM pms_purchase_process_approve t3 WHERE t3.pr_id = t2.pr_id AND t3.level_approve = t2.level_approve AND t3.purchase_type = 'PR');
   
END//