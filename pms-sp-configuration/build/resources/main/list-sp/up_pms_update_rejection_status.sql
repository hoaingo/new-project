DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_rejection_status//
CREATE PROCEDURE `up_pms_update_rejection_status`(pUserID INT(11), 
                                                pPurchaseRequestID INT(11))
BEGIN     
     UPDATE `pms_purchase_request`
		SET
		`status` = 'Purchase_Request_Rejected'   
		WHERE `pr_id` = pPurchaseRequestID;
        
	DELETE FROM `pms_purchase_process_approve`
    WHERE `pr_id` = pPurchaseRequestID; 
END//
