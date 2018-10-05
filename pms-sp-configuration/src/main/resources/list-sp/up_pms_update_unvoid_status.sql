DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_rejection_status//
CREATE PROCEDURE `up_pms_update_void_status`(pUserID INT(11), 
                                                pPurchaseRequestID INT(11))
BEGIN     
    UPDATE `pms_purchase_request`
		SET
		`status` = 'Purchase_Request_Submitted'   
		WHERE `pr_id` = pPurchaseRequestID;
END//
