DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_approval_status//
CREATE PROCEDURE `up_pms_update_approval_status`(pUserID INT(11), 
                                                pPurchaseRequestID INT(11))
BEGIN 
    
    INSERT INTO pms_purchase_process_approve (pr_id, level_approve, user_approved_id, purchase_type)
        SELECT t1.pr_id, t1.level_approve, t1.user_approver_id, t1.purchase_type
        FROM pms_purchase_approver t1
        LEFT JOIN pms_purchase_process_approve  t2
        ON t1.pr_id = t2.pr_id AND t1.level_approve = t2.level_approve AND t1.user_approver_id = t2.user_approved_id
        WHERE t1.pr_id = pPurchaseRequestID AND t1.user_approver_id = pUserID;
		
    UPDATE pms_purchase_request  t1
    INNER JOIN pms_purchase_process_approve t2 
    ON t1.pr_id = t2.pr_id
    SET t1.level_processing = t2.level_approve
    WHERE t1.pr_id = pPurchaseRequestID AND t2.user_approved_id = pUserID;

END//